import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, SafeAreaView, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const EventDetail = ({ route }) => {
  const { uid } = route.params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, 'events', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEvent(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [uid]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ac1484" />
        </View>
      </SafeAreaView>
    );
  }

  if (!event) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Event not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const formatDate = (firebaseTimestamp) => {
    if (!firebaseTimestamp || !firebaseTimestamp.toDate) return 'Invalid date';
    const date = firebaseTimestamp.toDate();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (firebaseTimestamp) => {
    if (!firebaseTimestamp || !firebaseTimestamp.toDate) return 'Invalid time';
    const date = firebaseTimestamp.toDate();
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  const eventDetails = {
    thumbnail: event.ImageUrl || `https://random.danielpetrica.com/api/random?ref=danielpetrica.com&${new Date().getTime()}`,
    name: event.EventName || 'Nama Event',
    description: event.EventDescription || 'Deskripsi event yang sangat menarik dan informatif.',
    category: event.Category || 'Kategori Event',
    author: event.Username || 'Publisher',
    startDate: event.EventDateStart ? formatDate(event.EventDateStart) : 'Invalid date',
    endDate: event.EventDateEnd ? formatDate(event.EventDateEnd) : 'Invalid date',
    startTime: event.StartTime ? formatTime(event.StartTime) : 'Invalid time',
    endTime: event.EndTime ? formatTime(event.EndTime) : 'Invalid time',
    location: event.Location || 'Jl. Contoh Alamat No. 123, Kota Contoh',
    moreInfoLink: event.MoreInfoLink || 'https://info-lebih-lanjut.com',
    umkmApplyDeadline: event.RegistrationEnd ? formatDate(event.RegistrationEnd) : 'Invalid date',
    region: {
      latitude: event.Cordinate?.latitude || 0,
      longitude: event.Cordinate?.longitude || 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={{ uri: eventDetails.thumbnail }} style={styles.thumbnail} />
          <View style={styles.headerOverlay} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
            <Image source={require('../assets/vector-7.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{eventDetails.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.description}>{eventDetails.description}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Kategori:</Text>
            <Text style={styles.value}>{eventDetails.category}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Publisher:</Text>
            <Text style={styles.value}>{eventDetails.author}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Tanggal Acara:</Text>
            <Text style={styles.value}>{eventDetails.startDate} - {eventDetails.endDate}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Alamat Lokasi:</Text>
            <Text style={styles.value}>{eventDetails.location}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Waktu Jam Acara:</Text>
            <Text style={styles.value}>{eventDetails.startTime} - {eventDetails.endTime}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Tanggal Akhir UMKM Bisa Apply:</Text>
            <Text style={styles.value}>{eventDetails.umkmApplyDeadline}</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={eventDetails.region}
            >
              <Marker coordinate={{ latitude: eventDetails.region.latitude, longitude: eventDetails.region.longitude }} />
            </MapView>
          </View>
          <TouchableOpacity style={styles.moreInfoContainer} onPress={() => Linking.openURL(eventDetails.moreInfoLink)}>
            <Text style={styles.moreInfoLink}>Info Lebih Lanjut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`https://www.google.com/maps?q=${eventDetails.region.latitude},${eventDetails.region.longitude}`)}>
          <Text style={styles.buttonText}>Lihat Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 300,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    position: 'absolute',
    bottom: 35,
    left: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 25,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'justify',
  },
  infoContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  moreInfoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  moreInfoLink: {
    fontSize: 18,
    color: '#ac1484',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#ac1484',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  mapContainer: {
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    overflow: 'hidden',
  },
  map: {
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    right: 20,
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default EventDetail;
