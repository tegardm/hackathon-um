import * as React from "react";
import { useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";
import {firebase, auth, db} from "../firebase"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        console.log("Logged as:", user.email);
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  return (
    <View style={styles.signup}>
      <View style={[styles.background, styles.backgroundLayout]}>
        <Image
          style={[styles.backgroundimageIcon, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/backgroundimage.png")}
        />
        <LinearGradient
          style={styles.backgroundeffect}
          locations={[0, 1]}
          colors={["rgba(32, 41, 51, 0.32)", "#93118a"]}
        />
      </View>
      <Pressable
        style={styles.loginbutton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      </Pressable>
      
      <Pressable
        style={[styles.accountsignup, styles.googlesignupFlexBox]}
        onPress={() => navigation.navigate("SignUpForm")}
      >
        <Text style={[styles.text1, styles.textTypo]}>Sign up free</Text>
      </Pressable>
      <Text style={[styles.tagline, styles.textTypo]}>
        EventaStand hadir sebagai ruang pertemuan antara acara - acara yang
        membutuhkan pelaku UMKM untuk bisa meramaikan.
      </Text>
      <Text style={[styles.title, styles.logInTypo]}>
        Ruang Kolaboratif UMKM dan Acara
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    height: 867,
    width: 393,
    left: 0,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  googlesignupFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_124xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 370,
    borderRadius: Border.br_3xs,
    left: 10,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorWhite1,
    lineHeight: 20,
  },
  backgroundimageIcon: {
    top: 0,
  },
  backgroundeffect: {
    top: 15,
    backgroundColor: "transparent",
    width: 393,
    left: 0,
    position: "absolute",
    height: 852,
  },
  background: {
    top: -15,
  },
  logIn: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    bottom:35,
    textAlign: "center",
    color: Color.colorWhite1,
  },
  loginbutton: {
    left: 174,
    top: 789,
    position: "absolute",
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text: {
    marginLeft: 10,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  googlesignup: {
    top: 630,
    backgroundColor: "rgba(15, 15, 15, 0.5)",
  },
  text1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  accountsignup: {
    top: 680,
    backgroundColor: "#c82495",
  }, title: {
    top:380,
    fontWeight: "700"

  },
  tagline: {
    top: 426,
    left: 57,
    fontFamily: FontFamily.textSRegular,
    width: 300,
    position: "absolute",
  }
 
});

export default SignUp;