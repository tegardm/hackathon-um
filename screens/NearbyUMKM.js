import React, { useState, useEffect, useCallback } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; 
import { useNavigation, useRoute } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { auth, db } from '../firebase';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

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




const EventCard = ({  idEvent, judul, deskripsi, lokasi, lat, long , url, jarak}) => {
  const navigation = useNavigation()
  const randomImageUrl = `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`;
  const imgUrl = url ? url : randomImageUrl

  return (
    <Pressable onPress={() => navigation.navigate('DetailUMKM',{uid:idEvent,jarak:jarak})}>

    <View style={styles.eventCardContainer}>
      <View>
        <ImageBackground
          source={{ uri: imgUrl}}
          style={styles.boxEvent}
          imageStyle={{ borderRadius: 20 }}>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.eventTitle}>{judul ? `UMKM ${judul}` : 'Nama UMKM'}</Text>
        <Text style={styles.eventDesc}>
            {deskripsi.substring(0,75)+'...'}
            </Text>

        
        <View style={styles.dateDistance}>
        <Text style={styles.eventDate}>
        <Icon name="location-arrow" size={12} color="gray" style={styles.searchIcon} /> {lokasi}</Text>
          <Text style={styles.eventDistance}>{jarak} Km</Text>
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

const NearbyUMKM = () => {
  const route = useRoute();
  const { text = '' } = route.params || {}; // Nilai default jika route.params atau text undefined

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [eventData,setEventData] = useState([])
  const [userdata,setUserData] = useState({})

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

          const dataDocRef = await getDocs(collection(db, 'umkms'));
          const docsData = dataDocRef.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            distance: calculateDistance(userLat, userLng, doc.data().Cordinate.latitude, doc.data().Cordinate.longitude)
          }));
          setEventData(docsData);
        } else {
          // setError('No user data found.');
        }
      } else {
        // setError('No user is signed in.');
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
      // setError('Failed to fetch user data.');
    }
  };

  fetchUserData();
}, []);


  const formatDate = (firebaseTimestamp) => {
    const date = firebaseTimestamp.toDate(); // Konversi Firebase Timestamp ke Date
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, options);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    // Do something with the search text, for example, filter data
  };

  const filteredEvents = eventData.filter(event => {
    const matchesSearchText = event.Name.toLowerCase().includes(searchText.toLowerCase()) ||
                              event.Description.toLowerCase().includes(searchText.toLowerCase());
  
    if (text) {
      const matchesCategory = event.Categories.some(category => category.toLowerCase().includes(text.toLowerCase()));
      return matchesSearchText && matchesCategory;
    }
  
    return matchesSearchText;
  });

  const sortedEvents = filteredEvents.sort((a, b) => a.distance - b.distance);



  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.acaraContainer}>
          
        <Pressable onPress={() => navigation.navigate('Saved', {text:text})}><Text style={[styles.acaraTitle, 
          {color:'gray',borderColor:'lightgray',fontWeight:'normal'}]}>Acara Sekitar</Text></Pressable>
        <Pressable><Text style={styles.acaraTitle}>UMKM Sekitar</Text></Pressable>

        </View>
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        <View >
        <Text style={styles.acaraRibbon}>{text ? `UMKM Dengan Kategori ${text}` : 'UMKM sekitar Anda'}</Text>
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
       
        <View style={{ flex: 1 ,marginBottom:150}}>
            {sortedEvents.length > 0 ? (
              sortedEvents.map((item) => (
                <EventCard
                  key={item.id.toString()}
                  judul={item.Name}
                  deskripsi={item.Description}
                  lokasi={item.Location}
                  jarak={item.distance.toFixed(2)}
                  lat={item.Cordinate.latitude}
                  long={item.Cordinate.longitude}
                  idEvent = {item.id}
                  url={item.ImageUrl}
                />
              ))
            ) : (
              <Text style={styles.noEventsText}>No UMKM Found.</Text>
            )}
          </View>
          </ScrollView>

      </View>
                <BottomNavBar/>
    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    marginBottom:70,
    alignItems: 'center'
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
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
    fontSize :14,
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
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    textAlign: 'center',
    zIndex: 999,
  },
  buttonNavDown: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center'
  },
});

export default NearbyUMKM;
