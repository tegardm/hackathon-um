import React, { useState,useEffect } from 'react';
import { Image, View,Alert, Text, Linking,Button, StyleSheet, ScrollView,LogBox, TextInput,ImageBackground, TouchableOpacity, Pressable } from 'react-native'; // Import TextInput
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import categoriesData from '../assets/data/categories.json'
import MultiSelect from 'react-native-multiple-select';
import { auth, db,storage } from '../firebase';
import { doc,addDoc, getDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';


LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews']);

const UMKMRegistrationScreen = () => {
  const [username,setUsername] = useState('')
  const [userId,setUserId] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()
  const [umkmName, setUmkmName] = useState('');
  const [umkmDescription, setUmkmDescription] = useState('');
  const [umkmLink, setUmkmLink] = useState('');
  const [alamat, setAlamat] = useState('');
  const [categories,setCategories] = useState([])
  const [user,setUser] = useState([])
  const [uploading,setUploading] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const[image,setImage] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  


  useEffect(() => {
    const data = categoriesData.map((category, index) => ({
      label: category.title,
      value: category.title,
      id: index.toString(), // add a unique id for each category
    }));

    setCategories(data)
  

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


  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems.length <= 3) {
      console.log(selectedItems);
      setSelectedCategories(selectedItems);

    } else {

      alert('You can select up to 3 categories only');
    }
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
    
    const imgUrl = await uploadImage()
    console.log(imgUrl);

    const newEvent = {
      UserId : userId,
      Username : username,
      Name : umkmName,
      Description : umkmDescription,
      Categories : selectedCategories,
      Location : alamat,
      Link : umkmLink,
      IsChecked : isChecked,
      Cordinate : {latitude : region.latitude, longitude : region.longitude},
      ImageUrl : imgUrl

    }

    const docRef = await addDoc(collection(db, 'umkms'), newEvent);

    // console.log('Document written with ID:', docRef.id);
    navigation.navigate('UploadReview');
    // console.log(newEvent);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom:40}} vertical showsVerticalScrollIndicator={false}>
      <View style={styles.titleContainer}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/vector-7.png')}/>

          </Pressable>
      <Text style={styles.notifTitle}>Daftar Sebagai Pelaku UMKM</Text>

      </View>
      <Text style={styles.description}>
        Halaman ini untuk pendaftaran sebagai Pelaku UMKM. Silakan lengkapi berkas-berkas berikut sebelum mendaftar.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com/syarat-berkas')}>
        <Text style={styles.link}>Lihat persyaratan berkas identitas & usaha</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Nama UMKM</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama UMKM Anda"
        value={umkmName}
        onChangeText={setUmkmName}
      />

      <Text style={styles.label}>Deskripsi UMKM</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Deskripsi UMKM Anda"
        value={umkmDescription}
        onChangeText={setUmkmDescription}
        multiline
      />

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

<Text style={styles.label}>Tautan Social Media UMKM</Text>
      <TextInput
        style={styles.input}
        placeholder="Facebook / Instagram / Twitter"
        value={umkmLink}
        onChangeText={setUmkmLink}
      />

<Text style={styles.label}>Alamat Lokasi</Text>
      <TextInput
        style={styles.input}
        placeholder="Alamat Lokasi UMKM Anda"
        value={alamat}
        onChangeText={setAlamat}
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

        <Text style={styles.label}>Upload Thumbnail (image)</Text>
    <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.buttonText}>Unggah Gambar Sebagai Thumbnail Postingan</Text>
    </TouchableOpacity>

      <Text style={styles.label}>Upload Berkas Identitas (PDF)</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pilih Berkas</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Upload Berkas Usaha (PDF)</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pilih Berkas</Text>
      </TouchableOpacity>      

      <Text style={styles.label}>Download Surat Pernyataan</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com/syarat-berkas')}>
        <Text style={styles.link}>Download Surat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload Surat Pernyataan Dengan Tanda Tangan & Materai</Text>
      </TouchableOpacity>  


      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
          {isChecked && <View style={styles.checked} />}
        </TouchableOpacity>
        <Text  style={styles.labelCheck}>Saya menyetujui kebijakan aplikasi EventaStand dan siap 
          bertanggung jawab atas semua informasi saya.
        </Text>
      </View>

     
      </ScrollView>
      <TouchableOpacity onPress={handleSubmit} 
      style={[styles.button, styles.btnSubmit]}>
        <Text style={[styles.buttonText, {fontWeight:'bold',fontSize:15}]}>Submit Berkas</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    // alignItems:'center'
  },
  description: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'justify',
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 14,
    // fontWeight: 'bold',
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
  submitButton: {
    marginTop: 30,
  },
  
  notifTitle : {
    fontSize : 19,
    fontWeight:'bold',
   
    },
    titleContainer : {
      flexDirection : 'row',
      alignItems:'center',
      width:'100%',
      paddingBottom :15,
      marginBottom :15,
      borderBottomWidth:3,
      borderBottomColor:'#ac1484',
      justifyContent:'space-between'
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
    btnSubmit : {
      marginTop:0,
      position:'absolute',
      bottom:0,
      paddingVertical:15,
      right:0,
      left:0
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
    categoryContainer: {
      borderColor: '#ac1484',
      borderWidth: 1,
      marginTop: 15,
      padding: 10,
      borderRadius: 5,
    },
});

export default UMKMRegistrationScreen;
