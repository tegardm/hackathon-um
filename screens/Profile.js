import * as React from "react";
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const ProfileButton = ({text}) => {
  return (
    <View style={styles.containerButton}>
    <TouchableOpacity style={styles.buttonEach}>
      <Text style={styles.buttonText}>{text}</Text>
      <Image source={require('../assets/chevrondown.png')}/>
    </TouchableOpacity>
  </View>
  )
}


const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerNavDown}>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/vector24.png')}/>
        <Text style={{fontSize:11, color:'white'}}>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Categories")}>
      <Image source={require('../assets/vector23.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Categories</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Saved")}>
      <Image source={require('../assets/vector10.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Saved</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Profile")}>
      <Image  source={require('../assets/profile1335.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Profile</Text>
      </Pressable>   
      </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
    <Text style={styles.profileTitle}>Profil Anda</Text>
    <Image style={{marginVertical:15}} source={require('../assets/profilepicture.png')}/>
    <Text style={styles.profileUsername}>Tegar Deyustian</Text>
    <View style={styles.containerButtons}>
      <ProfileButton text='Atur Profil'/>
      <ProfileButton text='Notifikasi'/>
      <ProfileButton text='Daftar Menjadi UMKM'/>
      <ProfileButton text='Buat Acara'/>
      <ProfileButton text='Dukungan'/>
      <ProfileButton text='Keluar'/>
    </View>
  </View>
  <BottomNavBar/>
    </View>
  
);
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems:'center'
  },
  profileTitle : {
    fontSize : 21,
   fontWeight:'bold'
   },
   profileUsername : {
    fontSize : 18,
   fontWeight:'bold'
   },
   containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEach: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 330,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
   containerButtons : {
    marginVertical:20,
    alignItems:'center',
    gap:10
   },
   
  containerNavDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ac1484',
    padding: 5, // Padding horizontal untuk tombol
    position: 'absolute',
    bottom: -65,
    left: 0,
    right: 0,
    width: '100%',
    textAlign:'center',
    zIndex: 999, // Menentukan navbar berada di layer terdepan
  },
  buttonNavDown: {
    padding: 10,
    textAlign:'center',
    alignItems:'center'
  },
});

export default Profile;
