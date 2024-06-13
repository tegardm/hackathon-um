import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Pressable, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MultiSelect from 'react-native-multiple-select';
import categoryData from '../assets/data/categories.json';
import MapView, { Marker } from 'react-native-maps';

const CreateEvent = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [category, setCategory] = useState('');
  const [eventDateStart, setEventDateStart] = useState(new Date());
  const [showEventDatePickerStart, setShowEventDatePickerStart] = useState(false);
  const [eventDateEnd, setEventDateEnd] = useState(new Date());
  const [showEventDatePickerEnd, setShowEventDatePickerEnd] = useState(false);
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [endTime, setEndTime] = useState(new Date());
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [registrationEnd, setRegistrationEnd] = useState(new Date());
  const [showRegistrationEndPicker, setShowRegistrationEndPicker] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = categoryData.map((category, index) => ({
      id: index,
      label: category.title,
      value: category.title,
    }));
    setCategories(data);
  }, []);

  const handleImagePick = () => {
    // Handle image picking logic here
  };

  const handleFilePick = () => {
    // Handle file picking logic here
  };

  const showDatePicker = (type) => {
    setShowEventDatePickerStart(type === 'eventDateStart');
    setShowEventDatePickerEnd(type === 'eventDateEnd');
    setShowStartTimePicker(type === 'startTime');
    setShowEndTimePicker(type === 'endTime');
    setShowRegistrationEndPicker(type === 'registrationEnd');
  };

  const handleDateChange = (type, event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    showDatePicker(null); // close all pickers
    switch (type) {
      case 'eventDateStart':
        setEventDateStart(currentDate);
        break;
      case 'eventDateEnd':
        setEventDateEnd(currentDate);
        break;
      case 'startTime':
        setStartTime(currentDate);
        break;
      case 'endTime':
        setEndTime(currentDate);
        break;
      case 'registrationEnd':
        setRegistrationEnd(currentDate);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 20 }} vertical showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/vector-7.png')} />
          </Pressable>
          <Text style={styles.notifTitle}>Buat Postingan Acara / Event</Text>
        </View>

        <Text style={styles.label}>Nama Event</Text>
        <TextInput
          style={styles.input}
          placeholder="NamaEvent"
          value={eventName}
          onChangeText={setEventName}
        />

        <Text style={styles.label}>Deskripsi Event</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Deskripsi Event"
          value={eventDescription}
          onChangeText={setEventDescription}
          multiline
        />

        <View style={styles.categoryContainer}>
          <Text style={styles.label}>Kategori</Text>
          <MultiSelect
            items={categories}
            uniqueKey="id"
            onSelectedItemsChange={setSelectedCategories}
            selectedItems={selectedCategories}
            selectText="Pilih Kategori"
            searchInputPlaceholderText="Cari Kategori..."
            onChangeInput={(text) => console.log(text)}
            displayKey="label"
            submitButtonText="Submit"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#CCC"
          />
        </View>

        <Text style={styles.label}>Tanggal Awal</Text>
        <TouchableOpacity onPress={() => showDatePicker('eventDateStart')} style={styles.dateButton}>
          <Text style={styles.dateText}>{eventDateStart.toDateString()}</Text>
        </TouchableOpacity>
        {showEventDatePickerStart && (
          <DateTimePicker
            value={eventDateStart}
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('eventDateStart', event, date)}
          />
        )}

        <Text style={styles.label}>Tanggal Akhir</Text>
        <TouchableOpacity onPress={() => showDatePicker('eventDateEnd')} style={styles.dateButton}>
          <Text style={styles.dateText}>{eventDateEnd.toDateString()}</Text>
        </TouchableOpacity>
        {showEventDatePickerEnd && (
          <DateTimePicker
            value={eventDateEnd}
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('eventDateEnd', event, date)}
          />
        )}

        <Text style={styles.label}>Alamat Lokasi</Text>
        <TextInput
          style={styles.input}
          placeholder="Lokasi"
          value={location}
          onChangeText={setLocation}
        />
          <Text style={styles.label}>Pilih Lokasi</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
          >
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>
        </View>

        <Text style={styles.label}>Tautan (Link Social Media / Tautan Lebih Lanjut)</Text>
        <TextInput
          style={styles.input}
          placeholder="Tautan"
          value={link}
          onChangeText={setLink}
        />

        <Text style={styles.label}>Waktu Mulai</Text>
        <TouchableOpacity onPress={() => showDatePicker('startTime')} style={styles.dateButton}>
          <Text style={styles.dateText}>{startTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            display="default"
            onChange={(event, time) => handleDateChange('startTime', event, time)}
          />
        )}

        <Text style={styles.label}>Waktu Selesai</Text>
        <TouchableOpacity onPress={() => showDatePicker('endTime')} style={styles.dateButton}>
          <Text style={styles.dateText}>{endTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            display="default"
            onChange={(event, time) => handleDateChange('endTime', event, time)}
          />
        )}

        <Text style={styles.label}>Tanggal Akhir Registrasi</Text>
        <TouchableOpacity onPress={() => showDatePicker('registrationEnd')} style={styles.dateButton}>
          <Text style={styles.dateText}>{registrationEnd.toDateString()}</Text>
        </TouchableOpacity>
        {showRegistrationEndPicker && (
          <DateTimePicker
            value={registrationEnd}
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('registrationEnd', event, date)}
          />
        )}
        <Text style={styles.label}>Upload Thumbnail (image)</Text>
        <TouchableOpacity style={styles.button} onPress={handleImagePick}>
          <Text style={styles.buttonText}>Unggah Gambar Sebagai Thumbnail Postingan</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Unggah Proposal (PDF)</Text>
        <TouchableOpacity style={styles.button} onPress={handleFilePick}>
          <Text style={styles.buttonText}>Unggah Proposal Sesuai Format</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Unggah Surat Pernyataan (PDF)</Text>
        <TouchableOpacity style={styles.button} onPress={handleFilePick}>
          <Text style={styles.buttonText}>Unggah Surat Pernyataan Dengan Tanda Tangan & Materai</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Tautan Berkas</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com/syarat-berkas')}>
          <Text style={styles.link}>Tautan Untuk Format Surat Pernyataan (DOC)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com/syarat-berkas')}>
          <Text style={styles.link}>Tautan Untuk Format Proposal (DOC)</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
            {isChecked && <View style={styles.checked} />}
          </TouchableOpacity>
          <Text style={styles.labelCheck}>
            Saya menyetujui kebijakan aplikasi EventaStand dan siap bertanggung jawab atas semua informasi saya.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('UploadReview')}
        style={[styles.button, { borderWidth: 1, backgroundColor: 'transparent', borderColor: '#ac1484' }]}
      >
        <Text style={[styles.buttonText, { fontWeight: 'bold', color: '#ac1484', fontSize: 15 }]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    marginTop:35
  },
  notifTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ac1484',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ac1484',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontSize: 16,
    height: 100, // Adjust height as needed
    textAlignVertical: 'top', // For multiline text alignment
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ac1484',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 5,
  },
  dateText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ac1484',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#ac1484',
    fontSize: 16,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac1484',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: '#ac1484',
    borderRadius: 3,
  },
  labelCheck: {
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
  },
  categoryContainer: {
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
  mapContainer: {
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    overflow: 'hidden', // Ensure the map stays within the border radius
  },
  map: {
    height: 200, // Adjust the height as needed
  },
  inputContainer: {
    marginBottom: 15,
  },
});

export default CreateEvent;