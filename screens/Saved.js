import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Saved = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.saved}>
      <Image
        style={styles.savedChild}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Pressable
        style={[styles.savedInner, styles.savedInnerLayout]}
        onPress={() => navigation.navigate("AprovedEvent")}
      >
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.supportingText, styles.supportingTypo3]}>
            4 Hari Lagi
          </Text>
          <Text style={[styles.supportingText1, styles.supportingTypo2]}>
            Starting from
          </Text>
          <View
            style={[styles.supportingTextParent, styles.supportingPosition3]}
          >
            <Text
              style={[styles.supportingText2, styles.supportingTypo1]}
            >{`10 February `}</Text>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.layer3Icon, styles.layer3IconPosition]}
              contentFit="cover"
              source={require("../assets/layer-38.png")}
            />
            <Text style={[styles.supportingText3, styles.supportingTypo1]}>
              Bangalore
            </Text>
          </View>
          <Text
            style={[styles.supportingText4, styles.supportingTypo]}
          >{`Electronic Steve-
Music Festival`}</Text>
        </View>
      </Pressable>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.supportingText5, styles.supportingPosition2]}>
            Starting from
          </Text>
          <View
            style={[styles.supportingTextGroup, styles.supportingPosition2]}
          >
            <Text
              style={[styles.supportingText6, styles.supportingTypo1]}
            >{`10 February `}</Text>
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector21.png")}
            />
            <Image
              style={[styles.layer3Icon1, styles.layer3IconPosition]}
              contentFit="cover"
              source={require("../assets/layer-38.png")}
            />
            <Text style={[styles.supportingText3, styles.supportingTypo1]}>
              Bangalore
            </Text>
          </View>
          <Text
            style={[styles.supportingText4, styles.supportingTypo]}
          >{`Electronic Steve-
Music Festival`}</Text>
          <Text style={[styles.supportingText9, styles.supportingTypo3]}>
            4 Hari Lagi
          </Text>
        </View>
      </View>
      <View style={[styles.tag, styles.tagLayout]}>
        <View style={[styles.tagChild, styles.tagChildBg]} />
        <Text style={styles.supportingText10}>Acara Anda</Text>
      </View>
      <View style={[styles.searchbar, styles.searchbarLayout]}>
        <View style={[styles.stateLayer, styles.searchbarLayout]}>
          <Text style={[styles.supportingText11, styles.supportingTypo]}>
            Search
          </Text>
          <View style={styles.trailingElements}>
            <View style={[styles.stTrailingIcon, styles.stateLayer1FlexBox]}>
              <View style={[styles.stateLayer1, styles.stateLayer1FlexBox]} />
            </View>
          </View>
        </View>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon12.png")}
        />
      </View>
      <Text style={[styles.title, styles.vectorIconPosition]}>Acara Anda</Text>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.background, styles.navbarLayout]} />
        <Pressable
          style={[styles.profile, styles.saved1Position]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.supportingText12, styles.supportingFlexBox]}>
            Profile
          </Text>
          <Image
            style={[styles.icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon13.png")}
          />
        </Pressable>
        <View style={[styles.saved1, styles.saved1Position]}>
          <Text style={[styles.supportingText12, styles.supportingFlexBox]}>
            Saved
          </Text>
          <Image
            style={[styles.vectorIcon2, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <Pressable
          style={[styles.categories, styles.categoriesPosition]}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={[styles.supportingText14, styles.categoriesPosition]}>
            Categories
          </Text>
          <Image
            style={[styles.vectorIcon3, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector23.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.supportingText15, styles.homePosition]}>
            Home
          </Text>
          <Image
            style={[styles.vectorIcon4, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savedInnerLayout: {
    height: 87,
    width: 343,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    left: 0,
  },
  groupChildPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  supportingTypo3: {
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  supportingTypo2: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_3xs,
    left: "78.72%",
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
  },
  supportingPosition3: {
    right: "51.02%",
    width: "21.87%",
    left: "27.11%",
  },
  supportingTypo1: {
    left: "17.33%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  layer3IconPosition: {
    right: "90.13%",
    width: "9.87%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  supportingTypo: {
    fontSize: FontSize.textMMedium_size,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  groupLayout: {
    height: 90,
    width: 343,
    position: "absolute",
  },
  supportingPosition2: {
    top: "48.89%",
    position: "absolute",
  },
  tagLayout: {
    height: 35,
    width: 407,
    position: "absolute",
  },
  tagChildBg: {
    backgroundColor: Color.colorMediumvioletred_100,
    top: 0,
  },
  searchbarLayout: {
    height: 52,
    width: 332,
    position: "absolute",
  },
  stateLayer1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconPosition: {
    left: "50%",
    position: "absolute",
  },
  navbarLayout: {
    height: 77,
    width: 393,
    left: 0,
    position: "absolute",
  },
  saved1Position: {
    width: 34,
    left: "50%",
    position: "absolute",
  },
  supportingFlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    letterSpacing: 1,
  },
  iconPosition: {
    width: 22,
    left: "50%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  iconPosition1: {
    bottom: "52.19%",
    height: "47.81%",
  },
  categoriesPosition: {
    width: 61,
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    width: 32,
    left: "50%",
    position: "absolute",
  },
  savedChild: {
    top: 801,
    height: 51,
    display: "none",
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    width: 83,
    height: 83,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  supportingText: {
    top: "71.26%",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: "81.05%",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  supportingText1: {
    top: "47.13%",
    position: "absolute",
  },
  supportingText2: {
    top: "47.83%",
  },
  vectorIcon: {
    height: "19.57%",
    top: "63.04%",
    bottom: "17.39%",
    maxHeight: "100%",
    left: "0%",
    right: "88%",
    width: "12%",
    maxWidth: "100%",
  },
  layer3Icon: {
    height: "20.43%",
    top: "15.22%",
    bottom: "64.35%",
  },
  supportingText3: {
    top: "0%",
  },
  supportingTextParent: {
    height: "52.87%",
    bottom: "0%",
    left: "27.11%",
    top: "47.13%",
    position: "absolute",
  },
  supportingText4: {
    lineHeight: 16,
    top: "0%",
    left: "27.11%",
    color: Color.colorBlack,
    fontSize: FontSize.textMMedium_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleParent: {
    height: 87,
    width: 343,
    position: "absolute",
  },
  savedInner: {
    top: 247,
    left: 25,
  },
  supportingText5: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_3xs,
    left: "78.72%",
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
  },
  supportingText6: {
    top: "44.19%",
  },
  vectorIcon1: {
    height: "20.93%",
    top: "60.47%",
    bottom: "18.6%",
    maxHeight: "100%",
    left: "0%",
    right: "88%",
    width: "12%",
    maxWidth: "100%",
  },
  layer3Icon1: {
    height: "21.86%",
    top: "16.28%",
    bottom: "61.86%",
  },
  supportingTextGroup: {
    height: "47.78%",
    bottom: "3.33%",
    left: "27.11%",
    right: "51.02%",
    width: "21.87%",
  },
  supportingText9: {
    top: "73.33%",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: "81.05%",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
    left: 0,
  },
  groupView: {
    top: 373,
    left: 25,
  },
  tagChild: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 35,
    width: 407,
    position: "absolute",
    left: 0,
    backgroundColor: Color.colorMediumvioletred_100,
  },
  supportingText10: {
    marginLeft: -42.5,
    top: "17.14%",
    color: Color.colorWhite1,
    left: "50%",
    fontSize: FontSize.textMMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 24,
    position: "absolute",
  },
  tag: {
    top: 186,
    left: -6,
  },
  supportingText11: {
    top: 14,
    left: 30,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.textMMedium_size,
    lineHeight: 24,
  },
  stateLayer1: {
    width: 40,
    height: 40,
  },
  stTrailingIcon: {
    width: 48,
    height: 48,
  },
  trailingElements: {
    top: 2,
    left: 262,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  stateLayer: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  icon: {
    height: "26.92%",
    width: "4.28%",
    top: "36.54%",
    right: "7.32%",
    bottom: "36.54%",
    left: "88.4%",
    maxHeight: "100%",
  },
  searchbar: {
    top: 114,
    left: 33,
  },
  title: {
    marginLeft: -63.5,
    top: "7.86%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  background: {
    backgroundColor: Color.colorMediumvioletred_100,
    top: 0,
  },
  supportingText12: {
    marginLeft: -17,
    top: "47.81%",
    height: "52.19%",
    display: "flex",
    textAlign: "center",
    width: 34,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    marginLeft: -11,
    bottom: "52.19%",
    height: "47.81%",
  },
  profile: {
    marginLeft: 117.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  vectorIcon2: {
    marginLeft: -7,
    width: 15,
    left: "50%",
    position: "absolute",
    top: "0%",
    maxHeight: "100%",
  },
  saved1: {
    marginLeft: 32.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  supportingText14: {
    height: "50.12%",
    marginLeft: -30.5,
    top: "50.12%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    letterSpacing: 1,
  },
  vectorIcon3: {
    height: "45.96%",
    marginLeft: -10.5,
    bottom: "54.04%",
  },
  categories: {
    marginLeft: -74.5,
    top: "19.48%",
    bottom: "24.29%",
    height: "56.23%",
    width: 61,
  },
  supportingText15: {
    marginLeft: -16,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    letterSpacing: 1,
    top: "47.81%",
    height: "52.19%",
  },
  vectorIcon4: {
    marginLeft: -10,
    width: 20,
    left: "50%",
    position: "absolute",
    top: "0%",
    maxHeight: "100%",
  },
  home: {
    marginLeft: -150.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  navbar: {
    top: 775,
  },
  saved: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default Saved;
