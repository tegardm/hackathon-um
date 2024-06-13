import React, {useState} from "react";
import { View, Text, Pressable, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import MapView, { Marker } from 'react-native-maps';
import { auth, db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const LocationSelector = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleConfirm = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          location: {
            latitude: region.latitude,
            longitude: region.longitude,
          },
        });
        navigation.navigate('Home');
      } else {
        console.error('No authenticated user found');
      }
    } catch (error) {
      console.error('Error updating location: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={styles.selectorMenu}>
        <Text style={styles.selectorTitle}>Pilih lokasi baru</Text>
        
        <Pressable
          style={styles.confirmButton}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmButtonText}>Simpan Lokasi</Text>
        </Pressable>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  selectorMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  stateLayer: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: 'Arial',
    color: '#989ea7',
    textAlign: 'left',
    fontSize: 14,
    flex: 1,
  },
  confirmButton: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#c71585',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  confirmButtonText: {
    lineHeight: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Arial-BoldMT',
    fontWeight: '700',
  },
  selectorTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: '#2f4f4f',
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
    fontWeight: '700',
    marginVertical: 10,
  },
  locationPinContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -15, // half of the pin width
    marginTop: -30, // half of the pin height
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPin: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15,
  },
});

export default LocationSelector;
