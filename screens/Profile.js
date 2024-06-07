import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Pressable
        style={[styles.logout, styles.logoutLayout]}
        onPress={() => navigation.navigate("SplashScreen")}
      >
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.manageprofile, styles.logoutLayout]}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.manageProfile, styles.logout1Typo]}>
          Manage Profile
        </Text>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon8.png")}
        />
        <Image
          style={[styles.manageprofileItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-71.png")}
        />
      </Pressable>
      <View style={[styles.notification, styles.logoutLayout]}>
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.notifications, styles.support1Typo]}>
          Notifications
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.manageprofileItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-71.png")}
        />
      </View>
      <View style={[styles.support, styles.logoutLayout]}>
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.support1, styles.support1Typo]}>Support</Text>
        <Image
          style={[styles.supportItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-71.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
      </View>
      <Pressable
        style={[styles.list, styles.logoutLayout]}
        onPress={() => navigation.navigate("UploadUMKM")}
      >
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.daftarUmkm, styles.support1Typo]}>
          Daftar UMKM
        </Text>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon9.png")}
        />
        <Image
          style={[styles.manageprofileItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-71.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.create, styles.logoutLayout]}
        onPress={() => navigation.navigate("BuatEvent")}
      >
        <View style={[styles.logoutChild, styles.logoutLayout]} />
        <Text style={[styles.daftarUmkm, styles.support1Typo]}>Buat Acara</Text>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon10.png")}
        />
        <Image
          style={[styles.manageprofileItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/vector-71.png")}
        />
      </Pressable>
      <Text style={styles.name}>Aayush Kriti</Text>
      <Text style={styles.title}>Profile</Text>
      <Image
        style={[styles.profilepictureIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/profilepicture.png")}
      />
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.background, styles.navbarLayout]} />
        <View style={[styles.profile1, styles.homePosition]}>
          <Text style={styles.supportingText}>Profile</Text>
          <Image
            style={[styles.profile1335Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/profile1335.png")}
          />
        </View>
        <Pressable
          style={[styles.saved, styles.homePosition]}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.supportingText1, styles.supportingFlexBox]}>
            Saved
          </Text>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector17.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.categories, styles.categoriesPosition]}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={[styles.supportingText2, styles.categoriesPosition]}>
            Categories
          </Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector18.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.supportingText}>Home</Text>
          <Image
            style={[styles.vectorIcon5, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector19.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutLayout: {
    height: 58,
    width: 325,
    position: "absolute",
  },
  logout1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.textSRegular,
    lineHeight: 14,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  vectorIconPosition1: {
    maxWidth: "100%",
    top: "50%",
    left: "7.69%",
    right: "87.38%",
    width: "4.92%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemLayout: {
    height: 11,
    width: 6,
    left: 297,
    position: "absolute",
  },
  support1Typo: {
    top: 22,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.textSRegular,
    lineHeight: 14,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconLayout: {
    left: "6.77%",
    right: "86.71%",
    width: "6.52%",
    height: "30.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navbarLayout: {
    height: 77,
    width: 393,
    left: 0,
    position: "absolute",
  },
  homePosition: {
    width: 34,
    left: "50%",
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "52.19%",
    top: "0%",
    height: "47.81%",
    left: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  supportingFlexBox: {
    top: "50.12%",
    height: "50.12%",
    justifyContent: "center",
    color: Color.colorWhite1,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.textSRegular,
  },
  vectorIconPosition: {
    bottom: "54.04%",
    height: "45.96%",
    top: "0%",
    left: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  categoriesPosition: {
    width: 61,
    left: "50%",
    position: "absolute",
  },
  profileChild: {
    top: 815,
    height: 51,
    display: "none",
    width: 393,
    position: "absolute",
    left: 0,
  },
  logoutChild: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    top: 0,
    width: 325,
    left: 0,
    backgroundColor: Color.colorWhite1,
  },
  logout1: {
    top: 20,
    left: 115,
    width: 96,
  },
  vectorIcon: {
    marginTop: -17,
    height: 15,
  },
  logout: {
    top: 619,
    left: 34,
    width: 325,
  },
  manageProfile: {
    left: 90,
    width: 146,
    top: 23,
  },
  icon: {
    height: "22.76%",
    top: "27.93%",
    bottom: "49.31%",
    left: "7.69%",
    right: "87.38%",
    width: "4.92%",
    maxHeight: "100%",
  },
  manageprofileItem: {
    top: 23,
  },
  manageprofile: {
    top: 272,
    left: 34,
    width: 325,
  },
  notifications: {
    left: 77,
    width: 171,
  },
  vectorIcon1: {
    marginTop: -18,
    height: 18,
  },
  notification: {
    top: 344,
    left: 34,
    width: 325,
  },
  support1: {
    left: 97,
    width: 132,
  },
  supportItem: {
    top: 24,
  },
  vectorIcon2: {
    marginTop: -16,
    height: 14,
  },
  support: {
    top: 551,
    left: 34,
    width: 325,
  },
  daftarUmkm: {
    left: 72,
    width: 182,
  },
  icon1: {
    top: "19.83%",
    bottom: "50%",
  },
  list: {
    top: 415,
    left: 34,
    width: 325,
  },
  icon2: {
    top: "20.86%",
    bottom: "48.97%",
  },
  create: {
    top: 482,
    left: 34,
    width: 325,
  },
  name: {
    height: "1.64%",
    width: "24.17%",
    top: "23.69%",
    left: "38.68%",
    fontSize: FontSize.textMMedium_size,
    lineHeight: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.colorBlack,
    position: "absolute",
  },
  title: {
    height: "2.48%",
    width: "17.56%",
    top: "6.9%",
    left: "41.98%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  profilepictureIcon: {
    height: "10.82%",
    width: "23.92%",
    top: "11.4%",
    right: "37.15%",
    bottom: "77.78%",
    left: "38.93%",
  },
  background: {
    backgroundColor: Color.colorMediumvioletred_100,
    top: 0,
  },
  supportingText: {
    height: "52.19%",
    top: "47.81%",
    justifyContent: "center",
    color: Color.colorWhite1,
    fontSize: FontSize.size_3xs,
    marginLeft: -17,
    width: 34,
    left: "50%",
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.textSRegular,
    position: "absolute",
  },
  profile1335Icon: {
    marginLeft: -11,
    width: 22,
  },
  profile1: {
    marginLeft: 117.5,
  },
  supportingText1: {
    marginLeft: -17,
    top: "50.12%",
    height: "50.12%",
    width: 34,
    left: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    marginLeft: -7,
    width: 15,
  },
  saved: {
    marginLeft: 32.5,
  },
  supportingText2: {
    marginLeft: -30.5,
    top: "50.12%",
    height: "50.12%",
    justifyContent: "center",
    color: Color.colorWhite1,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.textSRegular,
  },
  vectorIcon4: {
    marginLeft: -10.5,
    width: 22,
  },
  categories: {
    marginLeft: -74.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    width: 61,
  },
  vectorIcon5: {
    marginLeft: -10.6,
    width: 21,
  },
  home: {
    marginLeft: -150.5,
  },
  navbar: {
    top: 775,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite1,
  },
});

export default Profile;
