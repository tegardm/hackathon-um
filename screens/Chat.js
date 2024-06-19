import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const Chat = ({route}) => {
  const { uid,from } = route.params;

  // Dummy data for chat messages
  const messages = [
    { id: '1', text: 'Hi!', isMyMessage: true },
    { id: '2', text: 'Hello!', isMyMessage: false },
    { id: '3', text: 'How are you?', isMyMessage: true },
    { id: '4', text: 'I\'m fine, thank you.', isMyMessage: false },
    { id: '5', text: 'What are you doing?', isMyMessage: true },
    { id: '6', text: 'Just working on some stuff.', isMyMessage: false },
    { id: '7', text: 'Cool!', isMyMessage: true },
  ];

  const navigation = useNavigation()

  // Render each chat message item
  const renderChatMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isMyMessage ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const backFunction = (from) => {
    if (from == 'Event') {
      navigation.navigate('DetailEvent',{uid:uid})
    } else {
      navigation.navigate('DetailUMKM',{uid:uid})

    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {backFunction(from)}} style={styles.backButton}>
          <Image source={require('../assets/vector-7.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>John Doe</Text>
        
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        renderItem={renderChatMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesContainer}
        inverted  // Start rendering from the bottom (newest message at the bottom)
      />

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          multiline
          // onChangeText={...}
          // value={...}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require('../assets/vector-7.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 8,
  },
  profileIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  messagesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageContainer: {
    maxWidth: '70%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#edc2e2',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    fontSize: 16,
  },
  sendButton: {
    padding: 8,
  },
  sendIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Chat;
