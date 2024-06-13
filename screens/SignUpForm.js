import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebase, auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import MapView, { Marker } from 'react-native-maps';

const SignUpForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRp, setPasswordRp] = useState('');
  const [domisili, setDomisili] = useState('');
  const [region, setRegion] = useState({
    latitude: -6.200000,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('Logged as:', user.email);
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    if (password !== passwordRp) {
      setErrorMessage('Passwords do not match');
      return;
    }

    signUp(email, password, username, domisili);
  };

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
      setErrorMessage(error.message);
      console.error('Error signing up:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        style={styles.background}
        locations={[0, 1]}
        colors={['rgba(32, 41, 51, 0.32)', '#202933']}
      />
      <LinearGradient
        style={[styles.background, styles.overlay]}
        locations={[0, 1]}
        colors={['#9c20a0', '#191a1b']}
      />

      <View style={styles.signupForm}>
        <Text style={styles.title}>EventaStand Registrasi</Text>

        <InputField label="Username" value={username} onChangeText={setUsername} />
        <InputField label="Alamat Email" value={email} onChangeText={setEmail} />
        <InputField label="Kota Domisili" value={domisili} onChangeText={setDomisili} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pilih Lokasi</Text>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
          >
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>
        </View>

        <InputField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <InputField
          label="Repeat Password"
          value={passwordRp}
          onChangeText={setPasswordRp}
          secureTextEntry
        />

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Pressable style={styles.createButton} onPress={handleSignup}>
          <Text style={styles.createButtonText}>Create account</Text>
        </Pressable>

        <Pressable style={styles.signInContainer} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>
            <Text style={styles.signInPrompt}>You have an account? </Text>
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const InputField = ({ label, value, onChangeText, secureTextEntry }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  signupForm: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#202936',
    padding: 20,
    borderRadius: 10,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#2C3E50',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 15,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  createButton: {
    backgroundColor: '#9c20a0',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    color: '#FFFFFF',
  },
  signInPrompt: {
    color: '#FFFFFF',
  },
  signInLink: {
    color: '#9c20a0',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpForm;
