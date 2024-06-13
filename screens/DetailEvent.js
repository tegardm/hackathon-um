import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, SafeAreaView } from 'react-native';

const EventDetail = () => {
  const eventDetails = {
    thumbnail: '../assets/image-2.png',
    name: 'Nama Event',
    description: 'Deskripsi event yang sangat menarik dan informatif Deskripsi event yang sangat menarik dan informatif Deskripsi event yang sangat menarik dan informatif.',
    category: 'Kategori Event',
    author: 'Tegar Deyustian',
    startDate: '2024-06-20',
    endDate: '2024-06-21',
    location: 'Jl. Contoh Alamat No. 123, Kota Contoh',
    moreInfoLink: 'https://info-lebih-lanjut.com',
    startTime: '10:00 AM',
    endTime: '04:00 PM',
    umkmApplyDeadline: '2024-06-15'
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/image-2.png')} style={styles.thumbnail} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{eventDetails.name}</Text>
          <Text style={styles.description}>{eventDetails.description}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Kategori:</Text>
            <Text style={styles.value}>{eventDetails.category}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Publisher :</Text>
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
          <TouchableOpacity onPress={() => Linking.openURL(eventDetails.moreInfoLink)}>
            <Text style={styles.moreInfoLink}>Info Lebih Lanjut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Apply button pressed')}>
          <Text style={styles.buttonText}>Lihat Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Chat button pressed')}>
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
    paddingBottom: 80, // Adjust padding to make space for the button
  },
  thumbnail: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    borderWidth :2,
    borderColor:'#ac1484',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
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
  moreInfoLink: {
    fontSize: 16,
    color: '#ac1484',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#ac1484',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default EventDetail;
