import React, { useState, useEffect, useCallback } from 'react';
import { Image, View, Text, ScrollView, TextInput, ImageBackground, StyleSheet,TouchableOpacity, FlatList, Pressable } from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { auth, db } from '../firebase';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import categoryData from '../assets/data/categories.json'

const SearchBar = ({ placeholder, onSearch }) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
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
      <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
    </View>
  );
};

const NavTop = ({ username, city }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navTop}>
      <View>
        <Pressable onPress={() => navigation.navigate("LocationSelector")}>
          <Text style={styles.cityNav}>
            <Image style={{ margin: 5 }} source={require('../assets/layer-2.png')} />
            <Text style={{ fontSize: 15, marginLeft: 5, color: 'gray' }}> {city ?? 'Loading...'}</Text>
          </Text>
        </Pressable>
        <Text style={styles.usernameNav}>{username ?? 'Loading...'}</Text>
      </View>
      <View style={styles.navInfo}>
        <Pressable onPress={() => navigation.navigate("Notification1")}>
          <Icon name="bell" size={25} color="#ac1484" />
        </Pressable>
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

const Category = ({ text }) => {
  const navigation = useNavigation();
  const randomImageUrl = `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`;

  return (
    <Pressable onPress={() => navigation.navigate('Saved', { text })}>
      <View style={styles.containerCategory}>
        <ImageBackground
          source={{ uri: randomImageUrl }}
          style={styles.boxCategory}
          imageStyle={{ borderRadius: 20 }}>
          <Text style={styles.textCategory}>{text}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const EventCard = ({ judul, deskripsi, lokasi, tanggal, jarak, lat, long }) => {
  const navigation = useNavigation();
  const randomImageUrl = `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`;

  return (
    <Pressable onPress={() => navigation.navigate('DetailEvent')}>
      <View style={styles.eventCardContainer}>
        <View>
          <ImageBackground
            source={{ uri: randomImageUrl }}
            style={styles.boxEvent}
            imageStyle={{ borderRadius: 20 }}>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.eventTitle}>{judul}</Text>
          <Text style={styles.eventDesc}>{deskripsi}</Text>
          <Text style={styles.eventCity}>
            <Icon name="location-arrow" size={12} color="gray" style={styles.searchIcon} /> {lokasi}</Text>
          <View style={styles.dateDistance}>
            <Text style={styles.eventDate}>
              <Icon padding={15} name="clock-o" size={12} color="gray" style={styles.searchIcon} />{tanggal}</Text>
            <Text style={styles.eventDistance}>{jarak} Km</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerNavDown}>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/vector9.png')} />
        <Text style={{ fontSize: 11, color: 'white' }}>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Categories")}>
        <Image source={require('../assets/vector23.png')} />
        <Text style={{ fontSize: 11, color: 'white' }}>Categories</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Saved")}>
        <Image source={require('../assets/vector10.png')} />
        <Text style={{ fontSize: 11, color: 'white' }}>Sekitar</Text>
      </Pressable>
      <Pressable style={styles.buttonNavDown} onPress={() => navigation.navigate("Profile")}>
        <Image source={require('../assets/icon1.png')} />
        <Text style={{ fontSize: 11, color: 'white' }}>Profile</Text>
      </Pressable>
    </View>
  );
};

const Home = () => {
  const [categories, setCategories] = useState(categoryData.slice(0, 6));
  const [userData, setUserData] = useState({});
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');

  const calculateDistance = (userLat, userLng, itemLat, itemLng) => {
    const earthRadiusKm = 6371;
    const dLat = degreesToRadians(itemLat - userLat);
    const dLng = degreesToRadians(itemLng - userLng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(userLat)) * Math.cos(degreesToRadians(itemLat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    return distance;
  };

  const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData(data);
            const userLat = data.location.latitude;
            const userLng = data.location.longitude;

            const dataDocRef = await getDocs(collection(db, 'events'));
            const docsData = dataDocRef.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              distance: calculateDistance(userLat, userLng, doc.data().Cordinate.latitude, doc.data().Cordinate.longitude)
            }));
            setEventData(docsData);
          } else {
            setError('No user data found.');
          }
        } else {
          setError('No user is signed in.');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
        setError('Failed to fetch user data.');
      }
    };

    fetchUserData();
  }, []);

  const handleSearch = useCallback((value) => {
    setSearchText(value);
  }, []);

  const filteredEvents = eventData.filter(event => 
    event.EventName.toLowerCase().includes(searchText.toLowerCase()) ||
    event.EventDescription.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <NavTop city={userData?.Domisili} username={userData?.Username} />
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        
        <View style={styles.categories}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.categoriesTitle}>Kategori</Text>
            <Pressable onPress={() => navigation.navigate("Categories")}>
              <Text style={{ color: '#ac1484' }}>Lihat Lainnya</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesItems}>
              {categories.map((category, index) => (
                <Category key={index} text={category.title} />
              ))}
            </View>
          </ScrollView>
        </View>
  
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.categoriesTitle}>Event Sekitar</Text>
            <Pressable onPress={() => navigation.navigate("Saved")}>
              <Text style={{ color: '#ac1484' }}>Lihat Lainnya</Text>
            </Pressable>
          </View>
          {/* Pastikan konten event ada dalam View yang diatur dengan flex: 1 */}
          <View style={{ flex: 1 ,marginBottom:150}}>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((item) => (
                <EventCard
                  key={item.id.toString()}
                  judul={item.EventName}
                  deskripsi={item.EventDescription}
                  lokasi={item.Location}
                  tanggal={""}
                  jarak={item.distance.toFixed(2)}
                  lat={item.Cordinate.latitude}
                  long={item.Cordinate.longitude}
                />
              ))
            ) : (
              <Text style={styles.noEventsText}>No events found.</Text>
            )}
          </View>
        </View>
  
      </ScrollView>
      <BottomNavBar />
    </View>
  )
};

const styles = StyleSheet.create({
  
  container: {
    minHeight:'100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  navTop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 25, 
    overflow: 'hidden', 
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
    marginTop: 20, 
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
    backgroundColor: '#ffffff', 
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
    fontSize: 14,
    width:'90%',
    textShadowColor : 'black',
    textAlign:'center',
    fontWeight: 'bold',
    color: 'white', 
  },
  eventContainer : {
    gap:10,
    paddingBottom:120

  },
  eventCardContainer : {
    flexDirection:'row',
    gap:15,
    paddingBottom : 10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
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
    backgroundColor: '#ffffff', 
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNavDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ac1484',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 999,
  },
  buttonNavDown: {
    padding: 10,
    alignItems: 'center',
  },
  navText: {
    fontSize: 11,
    color: 'white',
  },
});

export default Home;