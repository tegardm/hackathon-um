import React, { useState } from 'react';
import { Image, Button, View, Text, StyleSheet, Linking, ScrollView, TextInput, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';

const CreateEvent = () => { 
  const navigation = useNavigation();

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
    showDatePicker(null);  // close all pickers
    switch(type) {
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
      <ScrollView style={{marginBottom:20}} vertical showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/vector-7.png')}/>
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
    <View style={{borderColor: '#ac1484', borderWidth: 1, marginTop:15, padding:10, borderRadius:5}}>
      <Text style={styles.label}>Kategori</Text>
      <RNPickerSelect 
        onValueChange={value => setCategory(value)}
        items={[
          { label: 'Konser', value: 'konser' },
          { label: 'Workshop', value: 'workshop' },
          { label: 'Seminar', value: 'seminar' },
        ]}
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

    <Text style={styles.label}>Lokasi</Text>
    <TextInput
      style={styles.input}
      placeholder="Lokasi"
      value={location}
      onChangeText={setLocation}
    />

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
      <Text style={styles.labelCheck}>Saya menyetujui kebijakan aplikasi EventaStand dan siap 
        bertanggung jawab atas semua informasi saya.
      </Text>
    </View>
  </ScrollView>
  <TouchableOpacity onPress={() => navigation.navigate('UploadReview')} style={[styles.button, 
    {borderWidth:1,backgroundColor:'transparent'  ,borderColor:'#ac1484'}]}>
    <Text style={[styles.buttonText, {
      fontWeight:'bold',color:'#ac1484',fontSize:15}]}>Submit Berkas</Text>
  </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dateButton: {
    height: 40,
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#ac1484',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical:1,

  },
  buttonText : {
    color : 'white',
    fontSize:12
  },
  notifTitle : {
    fontSize : 18,
    fontWeight:'bold',
   
    },
    titleContainer : {
      flexDirection : 'row',
      alignItems:'center',
      width:'100%',
      paddingVertical :20,
      borderBottomWidth:3,
      borderBottomColor:'#ac1484',
      justifyContent:'space-between'
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline',
      marginVertical: 8,
      textAlign:'left',
      fontSize:12
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    checkbox: {
      height: 20,
      width: 20,
      borderWidth: 2,
      borderColor: '#ac1484',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    checked: {
      width: 12,
      height: 12,
      backgroundColor: '#ac1484',
    },
    labelCheck : {
      fontSize: 13,
      // fontWeight: 'bold',
      fontStyle:'italic',
      width:'93%'
   },
});
export default CreateEvent;
