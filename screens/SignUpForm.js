import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebase, auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import MapView, { Marker } from 'react-native-maps';


const SignUpForm = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRp, setPasswordRp] = useState('')
  const [domisili, setDomisili] = useState('')
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        console.log("Logged as:", user.email);
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])


  const handleUsernameChange = (e) => {
    const username = e.nativeEvent.text;
    setUsername(username);
  };

  const handleEmailChange = (e) => {
    const email = e.nativeEvent.text;
    setEmail(email);
  };

  const handleDomisiliChange = (e) => {
    const domisili = e.nativeEvent.text;
    setDomisili(domisili);
  };

  const handleSignup = () => {
    if(password === ""){
      console.log("password harus sama");
      console.log("data log:", password, email);
    }else{
      signUp(email, password, username, domisili);
    }
  }

  const signUp = async (email, password, username, domisili) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user.email);
      await setDoc(doc(db, 'users', user.uid), {
        Username: username,
        Email: email,
        Domisili: domisili,
        location: {
          latitude: region.latitude,
          longitude: region.longitude,
        },
      });
  
      console.log('User signed up and username saved');
    } catch (error) {
    console.error('Error signing up:', error);
    console.error("Error code:", error.code);
    }
  };


  
  return (
    <ScrollView>
    <View  style={styles.signupForm}>
      <LinearGradient
        style={styles.background}
        locations={[0, 1]}
        colors={["rgba(32, 41, 51, 0.32)", "#202933"]}
      />
      <LinearGradient
        style={[styles.background, styles.overlay]}
        locations={[0, 1]}
        colors={["#9c20a0", "#191a1b"]}
      />

      <Text style={styles.title}>Daftar Untuk Lanjut</Text>

      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChange={handleUsernameChange}
        />
      </View>
      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Alamat Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Kota Domisili</Text>
        <TextInput
          style={styles.input}
          value={domisili}
          onChangeText={text => setDomisili(text)}
        />
      </View>

      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Pilih Lokasi</Text>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      </View>

      

      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={[styles.inputField, styles.inputContainer]}>
        <Text style={styles.label}>Repeat Password</Text>
        <TextInput
          style={styles.input}
          value={passwordRp}
          onChangeText={text => setPasswordRp(text)}
          secureTextEntry
        />
      </View>
      

      <Pressable
        style={styles.createButton}
        onPress={handleSignup}
      >
      <Text style={styles.createButtonText}>Create account</Text>
      </Pressable>
      
      <Pressable
        style={styles.signInContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signInText}>
          <Text style={styles.signInPrompt}>You have an account? </Text>
          <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </Pressable>
    

    </View>
    </ScrollView>
  );
};

const InputField = ({ label, value, onChangeText, containerStyle, secureTextEntry }) => (
  <View style={[styles.inputField, containerStyle]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      defaultValue={value}
      value={value}
      onChange={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);



const styles = StyleSheet.create({
  signupForm: {
    flex: 1,
    backgroundColor: "#202936",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    opacity: 0.8,
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputField: {
    width: 328,
    backgroundColor: "#2C3E50",
    borderRadius: 5,
    padding: 15,
  },
  label: {
    color: "#A0A0A0",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createButton: {
    backgroundColor: "#9c20a0",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: "center",
    marginBottom: 20,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signInText: {
    color: "#FFFFFF",
  },
  signInPrompt: {
    color: "#FFFFFF",
  },
  signInLink: {
    color: "#9c20a0",
    fontWeight: "bold",
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});

export default SignUpForm;