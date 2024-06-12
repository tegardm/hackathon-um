import * as React from "react";
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { signOut } from "firebase/auth";
import {firebase, auth, db} from "../firebase"
const ProfileButton = ({text, address}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (address && typeof address === 'string') {
     
        navigation.navigate(address);
       
    } else {
      console.warn('Invalid address:', address);
    }
  };

  return (

    <Pressable style={styles.containerButton} onPress={handlePress}>
    <View style={styles.buttonEach} >
    
      <Text style={styles.buttonText}>{text}</Text>
      <Image source={require('../assets/chevrondown.png')}/>
   
  </View>
    </Pressable>
  )
}

const LogoutButton = ({text, onPress}) => {
  return (
    <View style={styles.containerButton}>
    <TouchableOpacity onPress={onPress} style={styles.buttonEach}>
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
  const handleSignout = () => {
    auth.signOut().then(() => {
      console.log("Berhasil Logout");
      navigation.replace("Login")
    }).catch((error) => {
      console.log(error);
    })
  }

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
    <Text style={styles.profileTitle}>Profil Anda</Text>
    <Image style={{marginVertical:15}} source={require('../assets/profilepicture.png')}/>
    <Text style={styles.profileUsername}>Tegar Deyustian</Text>
    <View style={styles.containerButtons}>
    <ProfileButton address='EditProfile' text='Atur Profil'/>
      <ProfileButton address='Notification1' text='Notifikasi'/>
      <ProfileButton address='UploadUMKM' text='Daftar Menjadi UMKM'/>
      <ProfileButton address='Home' text='Buat Acara'/>
      <ProfileButton address='Home' text='Dukungan'/>
      <LogoutButton  text='Keluar' onPress={() => handleSignout()}/>
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