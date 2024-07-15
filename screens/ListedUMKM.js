import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth, db } from '../firebase';
import { doc, getDoc, getDocs, collection, setDoc } from 'firebase/firestore';

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

const EventCard = ({ idEvent, judul, deskripsi, lokasi, lat, long, url, jarak, status, action, handleApprove, handleDecline, isPublisher }) => {
  const navigation = useNavigation();
  const randomImageUrl = `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`;
  const imgUrl = url ? url : randomImageUrl;

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('DetailUMKM', { uid: idEvent, jarak: jarak })}>
        <View style={styles.eventCardContainer}>
          <View>
            <ImageBackground
              source={{ uri: imgUrl }}
              style={styles.boxEvent}
              imageStyle={{ borderRadius: 20 }}>
            </ImageBackground>
          </View>
          <View>
            <Text style={styles.eventTitle}>{judul ? `UMKM ${judul}` : 'Nama UMKM'}</Text>
            <Text style={styles.eventDesc}>{deskripsi.substring(0, 75) + '...'}</Text>
            <View style={styles.dateDistance}>
              <Text style={styles.eventDate}>
                <Icon name="location-arrow" size={12} color="gray" style={styles.searchIcon} /> {lokasi}
              </Text>
              <Text style={styles.eventDistance}>{jarak} Km</Text>
            </View>
          </View>
        </View>
      </Pressable>
      {isPublisher && !action && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleApprove(idEvent)}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDecline(idEvent)}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const ListedUMKM = () => {
  const route = useRoute();
  const { text = '', idEvent = '', dataUMKM = [] } = route.params || {};

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [eventData, setEventData] = useState([]);
  const [userdata, setUserData] = useState({});
  const [isPublisher, setIsPublisher] = useState(false);

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

            // Check if the current user is the publisher of the event
            const eventDocRef = doc(db, 'events', idEvent);
            const eventDoc = await getDoc(eventDocRef);
            if (eventDoc.exists()) {
              setIsPublisher(eventDoc.data().UserId === user.uid);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [idEvent]);

  const handleApprove = async (umkmId) => {
    try {
      const eventRef = doc(db, 'events', idEvent);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        const updatedDataUMKM = eventData.DataUMKM.map((umkm) =>
          umkm.idumkm === umkmId ? { ...umkm, status: true, action: true } : umkm
        );
  
        await setDoc(eventRef, { ...eventData, DataUMKM: updatedDataUMKM }, { merge: true });
        setEventData((prevEventData) =>
          prevEventData.map((event) =>
            event.id === umkmId ? { ...event, status: true, action: true } : event
          )
        );
      }
    } catch (error) {
      console.error('Error approving UMKM: ', error);
    }
  };
  

  const handleDecline = async (umkmId) => {
    try {
      const eventRef = doc(db, 'events', idEvent);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        const updatedDataUMKM = eventData.DataUMKM.filter(umkm => umkm.idumkm !== umkmId);
  
        await setDoc(eventRef, { ...eventData, DataUMKM: updatedDataUMKM }, { merge: true });
        setEventData((prevEventData) => prevEventData.filter(event => event.id !== umkmId));
      }
    } catch (error) {
      console.error('Error declining UMKM: ', error);
    }
  };
  

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredEvents = eventData.filter(event => {
    const matchesSearchText = event.Name.toLowerCase().includes(searchText.toLowerCase()) ||
                              event.Description.toLowerCase().includes(searchText.toLowerCase());
  
    if (text) {
      const matchesCategory = event.Categories.some(category => category.toLowerCase().includes(text.toLowerCase()));
      const matchesSearchAndCategory = matchesSearchText && matchesCategory;
  
      const isEventInUMKM = dataUMKM.some(umkm => umkm.idumkm === event.id);
  
      return matchesSearchAndCategory && isEventInUMKM;
    }
  
    const isEventInUMKM = dataUMKM.some(umkm => umkm.idumkm === event.id);
  
    // Filter based on user role and status
    if (isPublisher) {
      return matchesSearchText && isEventInUMKM;
    } else {
      // Check status and action within DataUMKM array for the event
      const umkmData = dataUMKM.find(umkm => umkm.idumkm === event.id);
      return matchesSearchText && isEventInUMKM && umkmData && umkmData.status === true && umkmData.action === true;
    }
  });
  
  const sortedEvents = filteredEvents.sort((a, b) => a.distance - b.distance);
  
  
  

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.acaraContainer}>
          <Pressable><Text style={styles.acaraTitle}>UMKM Terdaftar Pada Event Ini</Text></Pressable>
        </View>
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, marginBottom: 100, marginTop: 20 }}>
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
                  idEvent={item.id}
                  url={item.ImageUrl}
                  status={item.status}
                  action={item.action}
                  handleApprove={handleApprove}
                  handleDecline={handleDecline}
                  isPublisher={isPublisher}
                />
              ))
            ) : (
              <Text style={styles.noEventsText}>No UMKM Found.</Text>
            )}
          </View>
        </ScrollView>
      </View>
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
    marginBottom: 70,
    alignItems: 'center'
  },
  acaraContainer: {
    flexDirection: 'row',
    gap: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: 'white'
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#ac1484',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  acaraTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#ac1484',
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
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
    padding: 10
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  eventCardContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  eventTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  eventDesc: {
    color: 'gray',
    fontSize: 12,
    width: 250,
    marginBottom: 5,
  },
  dateDistance: {
    color: 'gray',
    fontSize: 12,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventDate: {
    color: 'gray',
    fontSize: 12,
    flexDirection: 'row',
  },
  eventDistance: {
    color: 'gray',
    fontSize: 12
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
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
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

export default ListedUMKM;
