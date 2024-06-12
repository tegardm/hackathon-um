import React, { useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

import {firebase, auth, db} from "../firebase"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        console.log("Logged as:", user.email);
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      console.log("Email:", email, "Password:", password);
      signInWithEmailAndPassword(auth, email, password).then(userCredentials =>{
        const user = userCredentials.user;
        console.log("Logged in using:", user.email);
        
      }).catch(error => {
        setErrorMessage(error.message)})
      
    }
  };



  return (
    <View style={styles.login}>

      <View style={styles.albumBackground}>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <LinearGradient
          style={styles.albumBackgroundOverlay}
          locations={[0, 1]}
          colors={["rgba(32, 41, 51, 0.32)", "#93118a"]}
        />
      </View>
      <Text style={styles.title}>Silahkan Login Untuk Lanjut.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Email address"
          placeholderTextColor={Color.colorGray_400}
          onChangeText={text => setEmail(text)}
          value={email}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          accessibilityLabel="Email address input"
        />
      </View>
      <View style={[styles.inputContainer, styles.inputPassword]}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={Color.colorGray_400}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          textContentType="password"
          accessibilityLabel="Password input"
        />
      </View>
      {errorMessage !== "" && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.signUpContainer}
        onPress={() => navigation.navigate("SignUpForm")}
      >
        <Text style={styles.text2}>
          <Text style={styles.youDontHaveAccount}>
            {`You don’t have an account? `}
          </Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.forgotPasswordContainer}
        onPress={() => {
          // Add forgot password functionality
        }}
      >
        {/* <Text style={styles.forgotPassword}>Forgot password?</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  albumBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  albumBackgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  image2Icon: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  inputContainer: {
    marginHorizontal: 33,
    marginTop: 15,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_5xs,
    padding: Padding.p_base,
    zIndex: 2,
  },
  inputPassword: {
    marginTop: 20,
  },
  inputText: {
    height: 28,
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.textSRegular_size,
  },
  errorText: {
    color: 'white',
    marginTop: Padding.p_base,
    textAlign: "center",
  },
  loginButton: {
    marginTop: 30,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumvioletred_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Padding.p_base,
    marginHorizontal: 33,
  },
  buttonText: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
  },
  youDontHaveAccount: {
    color: Color.colorWhite1,
  },
  signUp: {
    color: Color.colorMediumpurple,
  },
  text2: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  signUpContainer: {
    marginTop: 10,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: "flex-end",
    marginHorizontal: 33,
  },
  forgotPassword: {
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: FontSize.size_9xl,
    lineHeight: 42,
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
  },
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default Login;