import React, { useEffect, useState } from 'react';
import { Image, Button, View, Text, StyleSheet, Linking, LogBox ,Alert,FlatList , ScrollView, TextInput, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import MapView, { Marker } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import app,{ auth, db, storage } from '../firebase';
import { doc,addDoc, getDoc, collection, updateDoc } from 'firebase/firestore';
import categoriesData from '../assets/data/categories.json'
import MultiSelect from 'react-native-multiple-select';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { getAuth } from 'firebase/auth';
import * as FileSystem from 'expo-file-system'


LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews']);
LogBox.ignoreLogs(['Cannot convert null value to object']);

const CreateEvent = () => { 


  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [user,setUser] = useState([])
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
  const [categories,setCategories] = useState([])
  const [username,setUsername] = useState('')
  const [userId,setUserId] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMap, setIsMap] = useState(true)
  const [image, setImage] = useState('');
  const [uploading,setUploading] = useState(false)
  const [number, setNumber] = useState('');
  const [imageUrl,setImageUrl] = useState('')
  useEffect(() => {
    const data = categoriesData.map((category, index) => ({
      label: category.title,
      value: category.title,
      id: index.toString(), // add a unique id for each category
    }));

    setCategories(data)
  

    const handleDocumentPicker = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: "*/*",
          copyToCacheDirectory: true,
        });
  
        if (result.type === "success") {
          console.log(
            result.uri,
            result.name,
            result.size,
            result.mimeType
          );
  
          // Upload file to Firebase Storage
          const uploadUri = Platform.OS === 'ios' ? result.uri.replace('file://', '') : result.uri;
          const filename = result.name;
          const reference = storage().ref(filename);
  
          const task = reference.putFile(uploadUri);
  
          task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
          });
  
          task.then(() => {
            Alert.alert('File uploaded to Firebase Storage');
          });
        } else {
          Alert.alert('Document picking was canceled.');
        }
      } catch (err) {
        console.error(err);
        Alert.alert('An error occurred while picking the document.');
      }
    };

    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        // console.log('Current user:', user);
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          console.log(user);
          if (userDoc.exists()) {
            setUser(userDoc.data());
            console.log(userDoc.data());
            setUsername(userDoc.data()["Username"])
            setUserId(user["uid"])
            console.log(username);
            console.log(userId);

          
            
            // console.log(userData.Username);
          } else {
          }
        } else {
        }
      } catch (error) {
        // console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();

  },[])



  const handleFilePick = () => {
    // Handle file picking logic here
  };

  const handleImageUpload = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Permission denied', 'You need to grant access to photos to use this feature.');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setImage(pickerResult['assets'][0]['uri']);
        console.log(pickerResult['assets'][0]['uri']);
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };
const uploadImage = async () => {
  if (!image) {
    Alert.alert('No image selected', 'Please select an image to upload.');
    return;
  }

  setUploading(true); // Set uploading state for UI feedback (optional)

  try {
    console.log('Fetching image from URI:', image);
    const response = await fetch(image); // Fetch the image data using the URI
    const blob = await response.blob(); // Convert to a blob for upload

    console.log('Image fetched and converted to blob:', blob);

    const filename = image.substring(image.lastIndexOf('/') + 1); // Extract filename
    const storageRef = ref(storage, `images/${filename}`); // Get reference to the storage location

    console.log('Uploading image to Firebase Storage:', filename);
    const snapshot = await uploadBytes(storageRef, blob); // Upload the blob to Firebase Storage

    console.log('Upload successful, getting download URL...');
    const downloadURL = await getDownloadURL(snapshot.ref); // Get download URL of the uploaded image
    setImageUrl(downloadURL.toString())
    console.log('Download URL obtained:', downloadURL.toString());
    const data = downloadURL.toString()
    setUploading(false); // Reset uploading state (optional)
    Alert.alert('Photo Uploaded!');
    // setImage(null); // Clear the selected image state
    return data;
  } catch (error) {
    console.error('Upload Error:', error);
    setUploading(false); // Reset uploading state (optional)
    Alert.alert('Upload Failed', 'An error occurred while uploading the image.');
    return false;
  }
};


  const handleSubmit = async () => {
    try {


      const sourceImg = await uploadImage()
      const newEvent = {
        UserId : userId,
        Username : username,
        EventName : eventName,
        EventDescription : eventDescription,
        Categories : selectedCategories,
        EventDateStart : eventDateStart,
        EventDateEnd : eventDateEnd,
        Location : location,
        Link : link,
        NumberUMKM : number,
        StartTime : startTime,
        EndTime : endTime,
        RegistrationEnd : registrationEnd,
        IsChecked : isChecked,
        DataUMKM : [],
        Cordinate : {latitude : region.latitude, longitude : region.longitude},
        ImageUrl :  sourceImg // Pastikan imageUrl diisi dengan nilai yang diperoleh dari Firebase Storage
      };

  
      const docRef = await addDoc(collection(db, 'events'), newEvent);
      console.log('Document written with ID:', docRef.id);


   
      navigation.navigate('UploadReview');
    } catch (error) {
      console.error('Error handling submit:', error);
      // Handle error
    }
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

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems.length <= 3) {
      console.log(selectedItems);
      setSelectedCategories(selectedItems);

    } else {

      alert('You can select up to 3 categories only');
    }
  };

  const handleChangeNum = (text) => {
    // Hanya izinkan input angka
    if (/^\d*$/.test(text)) {
      setNumber(text);
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
        
        <View>
        <Text style={styles.label}>Nama Event</Text>
        <TextInput
          style={styles.input}     
          placeholder="NamaEvent"
          value={eventName}
          onChangeText={setEventName}
          />
        </View>
        <View>
          
    <Text style={styles.label}>Deskripsi Event</Text>
    <TextInput
      style={styles.textArea}
      placeholder="Deskripsi Event"
      value={eventDescription}
      onChangeText={setEventDescription}
      multiline
    />
    <Text style={styles.label}>Masukkan Jumlah UMKM yang dapat diterima :</Text>
      <TextInput
        style={styles.input}
        value={number}
        placeholder="Jumlah UMKM"
        onChangeText={handleChangeNum}
        keyboardType="numeric"
        maxLength={4}  // Batas maksimum karakter yang diizinkan
      />
        </View>
        <View style={styles.categoryContainer}>
          <Text  style={[styles.label,{marginBottom:15}]}>Kategori</Text>
          <MultiSelect
            items={categories}
            uniqueKey="value"
            onSelectedItemsChange={handleSelectedItemsChange}
            selectedItems={selectedCategories}
            selectText="Pilih Kategori"
            searchInputPlaceholderText="Cari Kategori..."
            onChangeInput={(text) => console.log(text)}
            displayKey="label"
            submitButtonText="Submit"
            tagRemoveIconColor="#ac1484"
            tagBorderColor="#ac1484"
            tagTextColor="#ac1484"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#ac1484"
          />
        </View>
    <View>
      
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
    </View>

   <View>
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
   </View>

    <View>
    <Text style={styles.label}>Alamat Lokasi</Text>
    <TextInput
      style={styles.input}
      placeholder="Lokasi"
      value={location}
      onChangeText={setLocation}
    />
    </View>

     <View>
     <Text style={[styles.label,{fontSize:9,paddingBottom:5,fontWeight:'normal'}]}>Kordinat Lokasi (Tutup Map Sebelum Memasukan Data Lain Agar Menghindari Bug)</Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsMap(!isMap)}>
      <Text style={styles.buttonText}>{isMap ? 'Buka Map' : "Tutup Map"}</Text>
    </TouchableOpacity>
    <View style={[styles.mapContainer, { display: isMap ? 'none' : 'relative' }]}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
    </View>
     </View>


    <View>
    <Text style={styles.label}>Tautan (Link Social Media / Tautan Lebih Lanjut)</Text>
    <TextInput
      style={styles.input}
      placeholder="Tautan"
      value={link}
      onChangeText={setLink}
    />
    </View>

   <View>
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
   </View>

    <View>
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
    </View>

    <View>
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
    </View>

    <View>
    <Text style={styles.label}>Upload Thumbnail (image)</Text>
    <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
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
    </View>
  </ScrollView>
  <TouchableOpacity onPress={handleSubmit} style={[styles.button, 
    {borderWidth:1,backgroundColor:'transparent'  ,borderColor:'#ac1484'}]}>
    <Text style={[styles.buttonText, {
      fontWeight:'bold',color:'#ac1484',fontSize:15}]}>Submit Berkas</Text>
  </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
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
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
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
   categoryContainer: {
    borderColor: '#ac1484',
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
});
export default CreateEvent;