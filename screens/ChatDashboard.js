import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { auth, db } from '../firebase';

const ChatDashboard = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    if (currentUser) {
      console.log('Current user ID:', currentUser.uid);  // Log current user ID
      const chatsQuery = query(
        collection(db, 'chats')
      );

      const unsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
        const chatsFirestore = querySnapshot.docs
          .filter(doc => doc.id.includes(currentUser.uid))
          .map(doc => {
            const firebaseData = doc.data();
            const data = {
              _id: doc.id,
              ...firebaseData
            };
            return data;
          });

        console.log('Fetched chats:', chatsFirestore);  // Log fetched chats

        // Fetch user names for all chats
        const chatsWithNames = await Promise.all(chatsFirestore.map(async (chat) => {
          const otherParticipant = chat._id.replace(currentUser.uid, '').replace('-', '');
          const userDoc = await getDoc(doc(db, 'users', otherParticipant));
          const otherParticipantName = userDoc.exists() ? userDoc.data().Username : 'Unknown User';
          return {
            ...chat,
            otherParticipant,
            otherParticipantName,
          };
        }));

        setChats(chatsWithNames);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      console.log('No authenticated user');  // Log if no user is authenticated
      setLoading(false);
    }
  }, [currentUser]);

  const handleChatPress = (chatId, otherParticipant) => {
    navigation.navigate('Chat', { uid: otherParticipant, chatId, from: 'Dashboard' });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleChatPress(item._id, item.otherParticipant)}>
      <View style={styles.chatItem}>
        <Text style={styles.chatName}>{item.otherParticipantName}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
        <Text style={styles.chatTimestamp}>
          {item.lastTimestamp ? new Date(item.lastTimestamp.seconds * 1000).toLocaleString() : 'Unknown Time'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>No user authenticated.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  chatItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 16,
    color: '#555',
  },
  chatTimestamp: {
    fontSize: 14,
    color: '#999',
  },
});

export default ChatDashboard;
