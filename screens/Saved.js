import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation, useRoute } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";
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
        value={text}
        onChangeText={handleChangeText}
      />
      <Icon name="search"  size={20} color="gray" style={styles.searchIcon} />

    </View>
  );
};


const EventCard = ({title}) => {
  const navigation = useNavigation()
  const randomImageUrl = `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`;
  return (
    <Pressable onPress={() => navigation.navigate('DetailEvent')}>
      <View style={styles.eventCardContainer}>
      <View>
        <ImageBackground
          source={{uri:randomImageUrl }}
          style={styles.boxEvent}
          imageStyle={{ borderRadius: 20 }}>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.eventTitle}>{title ? `Acara ${title}` : 'Title Event'}</Text>
        <Text style={styles.eventDesc}>ini adalah deskripsi dalah deskripsi ya yang akan panjang tapi saya bingung</Text>

        <Text style={styles.eventCity}>
        <Icon name="location-arrow" size={12} color="gray" style={styles.searchIcon} /> Malang</Text>
        <View style={styles.dateDistance}>
          <Text style={styles.eventDate}>
            <Icon padding={15} name="clock-o" size={12} color="gray" style={styles.searchIcon} /> 14 June</Text>
          <Text style={styles.eventDistance}>2.4 Km</Text>
        </View>
      </View>
    </View>
    </Pressable>
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
      <Image source={require('../assets/vector22.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Sekitar</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown}  onPress={() => navigation.navigate("Profile")}>
      <Image  source={require('../assets/icon1.png')}/>
      <Text style={{fontSize:11, color:'white'}}>Profile</Text>
      </Pressable>   
      </View>
  );
};

const Saved = () => {
  const route = useRoute();
  const { text = '' } = route.params || {}; // Nilai default jika route.params atau text undefined

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
    // Lakukan sesuatu dengan search text, misalnya filter data
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.acaraContainer}>
          <Pressable><Text style={styles.acaraTitle}>Acara Sekitar</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('NearbyUMKM', {text : text})}>
            <Text style={[styles.acaraTitle, { color: 'gray', borderColor: 'lightgray', fontWeight: 'normal' }]}>UMKM Sekitar</Text>
          </Pressable>
        </View>
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        <View>
          <Text style={styles.acaraRibbon}>{text ? `Acara Dengan Kategori ${text}` : 'Acara sekitar Anda'}</Text>
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.eventContainer}>
            <EventCard title={text} />
            <EventCard title={text} />
            <EventCard title={text} />
            <EventCard title={text} />
            <EventCard title={text} />
            <EventCard title={text} />
          </View>
        </ScrollView>
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    // paddingHorizontal: 20,
    alignItems:'center'
  },
  acaraContainer : {
    flexDirection : 'row',
    gap : 15
  },
  acaraTitle : {
   fontSize : 15,
  fontWeight:'bold',
  paddingBottom : 10,
  borderBottomWidth:3,
  borderBottomColor:'#ac1484',
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
    marginRight: 10,
    padding:10
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  acaraRibbon : {
    fontSize:15,
    marginVertical:20,
    paddingVertical:15,
    backgroundColor: '#ac1484',
    width:500,
    textAlign:'center',
    color:'white'
  },
  
  eventContainer : {
    gap:10,
    marginBottom:430

  },
  eventCardContainer : {
    flexDirection:'row',
    gap:15,
    paddingBottom : 10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  },
  eventTitle : {
    fontSize :15,
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
    bottom:195,
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

export default Saved;
