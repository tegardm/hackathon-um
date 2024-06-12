import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";
import { signOut } from "firebase/auth";

const EditProfile = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.editprofile}>
      <Image
        style={styles.editprofileChild}
        contentFit="cover"
        source={require("../assets/vector-61.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
        <TextInput
            style={[styles.tegarDeyustian, styles.vectorIconPosition]}
            placeholder="Tegar Deyustian"
            />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
        <TextInput
            style={[styles.tegarDeyustian, styles.vectorIconPosition]}
            placeholder="03/30/3030"
            />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector20.png")}
        />
      
        <TextInput
            style={[styles.tegarDeyustian, styles.vectorIconPosition]}
            placeholder="tegardm@gmail.com"
            />
      </View>
      <Pressable
        style={[styles.savebutton, styles.titlePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/icon11.png")}
      />
      <Image
        style={[styles.profileicon, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/profileicon1.png")}
      />
      <Text style={[styles.title, styles.saveTypo]}>Edit Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 58,
    width: 325,
    position: "absolute",
  },
  vectorIconPosition: {
    justifyContent: "center",
    top: "35%",
    position: "absolute",
  },
  titlePosition: {
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  icon1Position: {
    left: "50%",
    position: "absolute",
  },
  editprofileChild: {
    top: 952,
    width: 393,
    height: 19,
    display: "none",
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    top: 81,
    width: 9,
    height: 17,
    left: 34,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    left: 0,
    backgroundColor: Color.colorWhite1,
  },
  vectorIcon: {
    width: "3.38%",
    right: "7.69%",
    left: "88.92%",
    maxWidth: "100%",
    height: 14,
    overflow: "hidden",
  },
  tegarDeyustian: {
    left: 25,
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    fontFamily: FontFamily.textSRegular,
    color: Color.colorBlack,
    width: 169,
    textAlign: "left",
  },
  rectangleParent: {
    top: 248,
    left: 34,
  },
  rectangleGroup: {
    top: 320,
    left: 34,
  },
  rectangleContainer: {
    top: 392,
    left: 34,
  },
  save: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    color: Color.colorWhite1,
    textAlign: "center",
  },
  savebutton: {
    marginLeft: -163.5,
    top: 760,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumvioletred_100,
    width: 328,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_77xl,
    paddingVertical: Padding.p_base,
  },
  icon1: {
    height: "9.27%",
    marginLeft: -45.5,
    top: "14.4%",
    bottom: "76.33%",
    maxHeight: "100%",
    width: 91,
  },
  profileicon: {
    marginLeft: -46.5,
    top: 115,
    width: 94,
    height: 94,
  },
  title: {
    height: "2.82%",
    marginLeft: -56.5,
    top: "9.15%",
    fontSize: FontSize.size_xl,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.colorDarkslategray_100,
    display: "flex",
    width: 114,
    alignItems: "center",
    left: "50%",
    position: "absolute",
    textAlign: "left",
  },
  editprofile: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default EditProfile;
