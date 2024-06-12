import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const SearchBar = ({ placeholder, onSearch }) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
    // Call the onSearch function with the value parameter
    onSearch(value);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={placeholder}
        onChangeText={handleChangeText}
      />
      <Icon name="search"  size={20} color="gray" style={styles.searchIcon} />

    </View>
  );
};

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Pressable onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/vector-7.png')}/>

          </Pressable>
      <Text style={styles.profileTitle}>Edit Profile</Text>

      </View>   
      <Image style={{marginVertical:15}} source={require('../assets/profilepicture.png')}/>
      <Text style={{fontSize:13,color:'#ac1484',textDecorationLine:'underline',marginBottom:30}}>Ganti Foto</Text>

      <Text style={{fontSize:18}}>Informasi Profile Anda</Text>
      <View style={styles.containerSearchs}>
      <SearchBar placeholder="Mohamad Tegar Deyustian Muslim"  />
      <SearchBar placeholder="mohamad.tegar.2205336@students.um.ac.id"  />
      <SearchBar placeholder="Malang, Jawa Timur"  />

      </View>
      <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, styles.cancelButton]} >
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.saveButton]} >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container : {

      paddingVertical: 40,
      paddingHorizontal: 20,
      alignItems:'center'
   
  },
  containerSearchs : {
    width:'100%'
  },

  profileTitle : {
    fontSize : 21,
    fontWeight:'bold',
   
    },
    titleContainer : {
      flexDirection : 'row',
      alignItems:'center',
      width:'100%',
      paddingBottom :20,
      borderBottomWidth:3,
      borderBottomColor:'#ac1484',
      justifyContent:'space-between'
    },
      searchContainer: {
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 20, // Add marginTop to create space between NavTop and SearchBar
    },
    searchIcon: {
      marginRight: 1,
      padding:5
    },
    searchInput: {
      flex: 1,
      height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal:10
  },
  button: {
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#d9534f', // Warna merah untuk tombol Cancel
  },
  saveButton: {
    backgroundColor: '#5cb85c', // Warna hijau untuk tombol Save
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default EditProfile;
