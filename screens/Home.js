import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import popps from '../assets/fonts/Poppins-Regular.ttf';

import { Ionicons } from '@expo/vector-icons'; // Menggunakan Ionicons dari Expo

// Define the SearchBar component
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
        value={text}
        onChangeText={handleChangeText}
      />
      <Icon name="search"  size={20} color="gray" style={styles.searchIcon} />

    </View>
  );
};



const NavTop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navTop}>
      <View>
        <Text style={styles.cityNav}>
          <Image style={{margin:5}} source={require('../assets/layer-2.png')} />
          <Text style={{fontSize:15, marginLeft:5,color:'gray'}}> Nama Kota</Text>
        </Text>
        <Text style={styles.usernameNav}>Username User</Text>
      </View>
      <View style={styles.navInfo}>
        <Icon name="bell" size={25} color="#ac1484" />
        <Pressable onPress={() => navigation.navigate("Profile")}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.navProfileImg}
            source={require("../assets/icon11.png")}
          />
        </View>
        </Pressable>
      </View>
    </View>
  );
};

const Category = () => {
  return (
    <View style={styles.containerCategory}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.boxCategory}
        imageStyle={{ borderRadius: 20 }}>
        <Text style={styles.textCategory}>Olaahraga</Text>
      </ImageBackground>
    </View>
  );
}

const EventCard = () => {
  return (
    <View style={styles.eventCardContainer}>
      <View>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.boxEvent}
          imageStyle={{ borderRadius: 20 }}>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.eventTitle}>Title Event</Text>
        <Text style={styles.eventDesc}>ini adalah deskripsi yang akan panjang tapi saya bing....</Text>

        <Text style={styles.eventCity}>
        <Icon name="location-arrow" size={12} color="gray" style={styles.searchIcon} /> Malang</Text>
        <View style={styles.dateDistance}>
          <Text style={styles.eventDate}>
            <Icon padding={15} name="clock-o" size={12} color="gray" style={styles.searchIcon} /> 14 June</Text>
          <Text style={styles.eventDistance}>2.4 Km</Text>
        </View>
      </View>
    </View>
  )
}

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerNavDown}>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/vector9.png')}/>
        <Text style={{fontSize:11, color:'white'}}>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Categories")}>
      <Image source={require('../assets/vector23.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Categories</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Saved")}>
      <Image source={require('../assets/vector10.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Sekitar</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Profile")}>
      <Image  source={require('../assets/icon1.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Profile</Text>
      </Pressable>   
      </View>
  );
};

const Home = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
    // Do something with the search text, for example, filter data
  };
  return (
    <View>
    <ScrollView   style={styles.container}>
      <NavTop />
      <SearchBar placeholder="Search..." onSearch={handleSearch} />
      <View style={styles.categories}>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <Pressable onPress={() => navigation.navigate("Categories")}>
        <Text style={{color:'#ac1484'}}>Lihat Lainnya</Text>
        </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesItems}>
          <Category/>
          <Category/>
          <Category/>
          <Category/>

          <Category/>
          <Category/>
          {/* Tambahkan kategori tambahan di sini */}
        </View>
      </ScrollView>

      </View>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
      <Text style={styles.categoriesTitle}>Event Sekitar</Text>
        <Pressable onPress={() => navigation.navigate("Saved")}>
        <Text style={{color:'#ac1484'}}>Lihat Lainnya</Text>
        </Pressable>
        </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.eventContainer}>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>

        </View>
        </ScrollView>
      </View>
    </ScrollView>
    <BottomNavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  navTop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 25, // Half of width and height for circular shape
    overflow: 'hidden', // Clip the image to the container shape
  },
  navProfileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  navInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  cityNav: {
    gap: 50,
    color: 'gray',
    fontSize: 17,
  },
  navIcon: {
    margin: 5,
  },
  usernameNav: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  searchContainer: {
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
    marginRight: 10,
    padding:10
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categories:{
    marginVertical:15,
  },
  categoriesItems:{
    flexDirection:'row',
    gap:10

  },
  categoriesTitle : {
    fontSize :20,
    fontWeight:'bold',
    paddingVertical:10
  },
  containerCategory: {
    justifyContent: 'center',
  },
  boxCategory: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Ganti dengan gambar latar belakang
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCategory: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white', // Ganti dengan warna teks yang sesuai
  },
  eventContainer : {
    gap:10,
    paddingBottom:120

  },
  eventCardContainer : {
    flexDirection:'row',
    gap:15
  },
  eventTitle : {
    fontSize :18,
    marginBottom:5,
    fontWeight : 'bold'
  },
  eventCity : {
    color : 'gray',
    fontSize : 12,
    width:250
  },
  eventDesc : {
    color : 'gray',
    fontSize : 12,
    width:250,
    marginBottom:5,

  },
  dateDistance : {
    color : 'gray',
    fontSize : 12,
    width :  220
    ,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  eventDate : {
    color : 'gray',
    fontSize : 12,
    flexDirection:'row',
    
  },
  eventDistance : {
    color : 'gray',
    fontSize : 12
  },
  boxEvent: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Ganti dengan gambar latar belakang
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNavDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ac1484',
    padding: 5, // Padding horizontal untuk tombol
    position: 'absolute',
    bottom: 0,
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

export default Home;
