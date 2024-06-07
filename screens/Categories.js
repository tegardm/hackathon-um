import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categories}>
      <Image
        style={styles.categoriesChild}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text style={styles.title}>Categories</Text>
      <Pressable
        style={[styles.categoryitem, styles.categoryitemLayout]}
        onPress={() => navigation.navigate("DetailCategory")}
      >
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </Pressable>
      <View style={[styles.categoryitem1, styles.categoryitemLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText1, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem2, styles.categoryitemLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText2, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem3, styles.categoryitemLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText3, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem4, styles.categoryitemLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText4, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem5, styles.categoryitemLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText5, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem6, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem7, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText1, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem8, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText2, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem9, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText3, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem10, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText4, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <View style={[styles.categoryitem11, styles.categoryitemPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.categoryitemLayout]}
          contentFit="cover"
          source={require("../assets/background5.png")}
        />
        <Text style={[styles.supportingText5, styles.supportingTypo1]}>
          Olahraga
        </Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
      </Pressable>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.background, styles.navbarLayout]} />
        <Pressable
          style={[styles.profiles, styles.savedPosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.supportingText12, styles.supportingTypo]}>
            Profile
          </Text>
          <Image
            style={[styles.icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.saved, styles.savedPosition]}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.supportingText12, styles.supportingTypo]}>
            Saved
          </Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
        </Pressable>
        <View style={[styles.categories1, styles.categories1Position]}>
          <Text style={[styles.supportingText14, styles.categories1Position]}>
            Categories
          </Text>
          <Image
            style={[styles.vectorIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.supportingText15, styles.homePosition]}>
            Home
          </Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryitemLayout: {
    height: 158,
    width: 158,
    position: "absolute",
  },
  supportingTypo1: {
    textAlign: "left",
    color: Color.colorWhite1,
    lineHeight: 17,
    fontSize: FontSize.size_5xs,
    left: "23.86%",
    width: "52.28%",
    height: "24.49%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  categoryitemPosition: {
    left: 210,
    height: 158,
    width: 158,
    position: "absolute",
  },
  navbarLayout: {
    height: 77,
    width: 393,
    left: 0,
    position: "absolute",
  },
  savedPosition: {
    width: 34,
    left: "50%",
    position: "absolute",
  },
  supportingTypo: {
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    top: "47.81%",
    height: "52.19%",
    color: Color.colorWhite1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 1,
  },
  iconPosition: {
    width: 22,
    maxHeight: "100%",
    bottom: "52.19%",
    top: "0%",
    height: "47.81%",
    left: "50%",
    position: "absolute",
  },
  vectorIconPosition: {
    maxHeight: "100%",
    bottom: "52.19%",
    top: "0%",
    height: "47.81%",
    left: "50%",
    position: "absolute",
  },
  categories1Position: {
    width: 61,
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    width: 32,
    left: "50%",
    position: "absolute",
  },
  categoriesChild: {
    top: 819,
    height: 51,
    display: "none",
    width: 393,
    left: 0,
    position: "absolute",
  },
  title: {
    height: "2.62%",
    marginLeft: -59.5,
    top: "8.29%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    width: 119,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    left: "50%",
    position: "absolute",
  },
  backgroundIcon: {
    borderRadius: Border.br_3xs,
    top: 0,
    width: 158,
    left: 0,
  },
  supportingText: {
    top: "69.05%",
  },
  categoryitem: {
    left: 25,
    width: 158,
    top: 125,
  },
  supportingText1: {
    top: "66.77%",
  },
  categoryitem1: {
    top: 313,
    left: 25,
    width: 158,
  },
  supportingText2: {
    top: "64.43%",
  },
  categoryitem2: {
    top: 501,
    left: 25,
    width: 158,
  },
  supportingText3: {
    top: "62.09%",
  },
  categoryitem3: {
    top: 689,
    left: 25,
    width: 158,
  },
  supportingText4: {
    top: "59.75%",
  },
  categoryitem4: {
    top: 877,
    left: 25,
    width: 158,
  },
  supportingText5: {
    top: "57.47%",
  },
  categoryitem5: {
    top: 1065,
    left: 25,
    width: 158,
  },
  categoryitem6: {
    top: 125,
  },
  categoryitem7: {
    top: 313,
  },
  categoryitem8: {
    top: 501,
  },
  categoryitem9: {
    top: 689,
  },
  categoryitem10: {
    top: 877,
  },
  categoryitem11: {
    top: 1065,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 37,
    top: 73,
    width: 9,
    height: 17,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorMediumvioletred_100,
    top: 0,
  },
  supportingText12: {
    marginLeft: -17,
    width: 34,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    marginLeft: -11,
  },
  profiles: {
    marginLeft: 117.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  vectorIcon: {
    marginLeft: -7,
    width: 15,
  },
  saved: {
    marginLeft: 32.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  supportingText14: {
    marginLeft: -30.5,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    top: "47.81%",
    height: "52.19%",
    color: Color.colorWhite1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 1,
  },
  vectorIcon1: {
    marginLeft: -10.5,
  },
  categories1: {
    marginLeft: -74.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
  },
  supportingText15: {
    marginLeft: -16,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    top: "47.81%",
    height: "52.19%",
    color: Color.colorWhite1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 1,
  },
  vectorIcon2: {
    marginLeft: -10,
    width: 20,
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
  categories: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default Categories;
