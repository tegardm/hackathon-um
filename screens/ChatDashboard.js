import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth, db } from '../firebase';

const ChatDashboard = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    if (currentUser) {
      const chatsQuery = query(collection(db, 'chats'));

      const unsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
        const chatsFirestore = querySnapshot.docs
          .filter(doc => doc.id.includes(currentUser.uid))
          .map(doc => {
            const firebaseData = doc.data();
            return {
              _id: doc.id,
              ...firebaseData,
            };
          });

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
      setLoading(false);
    }
  }, [currentUser]);

  const handleChatPress = (chatId, otherParticipant) => {
    navigation.navigate('Chat', { uid: otherParticipant, chatId, from: 'Dashboard' });
  };

  const renderChatItem = ({ item }) => (
    <ChatItem
      chat={item}
      onPress={() => handleChatPress(item._id, item.otherParticipant)}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
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
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const ChatItem = ({ chat, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.chatItem}>
    <Text style={styles.chatName}>{chat.otherParticipantName}</Text>
    <Text style={styles.chatMessage}>{chat.lastMessage}</Text>
    <Text style={styles.chatTimestamp}>
      {chat.lastTimestamp ? new Date(chat.lastTimestamp.seconds * 1000).toLocaleString() : 'Unknown Time'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ac1484',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  homeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  chatList: {
    paddingBottom: 16,
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
    marginTop: 4,
  },
  chatTimestamp: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
});

export default ChatDashboard;
