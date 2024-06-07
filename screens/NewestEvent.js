import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NewestEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newestevent}>
      <Image
        style={styles.newesteventChild}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text style={styles.title}>Event Sekitar Terbaru</Text>
      <View style={[styles.eventitem, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem1, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem2, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem3, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem4, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem5, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem6, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem7, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem8, styles.eventitemLayout]}>
        <Image
          style={[styles.eventitemChild, styles.eventitemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.supportingText, styles.supportingTypo1]}>
          2.3 Km
        </Text>
        <Text style={styles.supportingText1}>Jarak Sekitar</Text>
        <View style={[styles.supportingTextParent, styles.supportingPosition]}>
          <Text style={styles.supportingText2}>{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector13.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-37.png")}
          />
          <Text style={styles.supportingText3}>Bangalore</Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingPosition]}>
          Electronic Steve - Music Festival
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
          style={[styles.profile, styles.savedLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.supportingText45, styles.supportingTypo]}>
            Profile
          </Text>
          <Image
            style={[styles.icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.saved, styles.savedLayout]}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.supportingText45, styles.supportingTypo]}>
            Saved
          </Text>
          <Image
            style={[styles.vectorIcon9, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.categories, styles.homePosition]}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={[styles.supportingText47, styles.supportingTypo]}>
            Categories
          </Text>
          <Image
            style={[styles.vectorIcon10, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.supportingText47, styles.supportingTypo]}>
            Home
          </Text>
          <Image
            style={[styles.vectorIcon11, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventitemLayout: {
    height: 83,
    position: "absolute",
  },
  supportingTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
  },
  supportingPosition: {
    left: "28.01%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  navbarLayout: {
    height: 77,
    width: 393,
    left: 0,
    position: "absolute",
  },
  savedLayout: {
    width: 34,
    left: "50%",
  },
  supportingTypo: {
    color: Color.colorWhite1,
    top: "47.81%",
    height: "52.19%",
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  iconPosition: {
    width: 22,
    bottom: "52.19%",
    height: "47.81%",
    top: "0%",
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "52.19%",
    height: "47.81%",
    top: "0%",
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  homePosition: {
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  newesteventChild: {
    top: 860,
    height: 51,
    display: "none",
    width: 393,
    left: 0,
    position: "absolute",
  },
  title: {
    height: "2.34%",
    marginLeft: -116.5,
    top: "8.29%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    width: 232,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    left: "50%",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
    position: "absolute",
  },
  eventitemChild: {
    borderRadius: Border.br_3xs,
    width: 83,
    top: 0,
    height: 83,
    left: 0,
  },
  supportingText: {
    right: 8,
    bottom: 4,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    position: "absolute",
  },
  supportingText1: {
    height: "23.98%",
    width: "21.39%",
    top: "48.19%",
    left: "76.2%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  supportingText2: {
    width: "82.67%",
    top: "46.07%",
    left: "17.33%",
    height: "53.93%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "20.33%",
    width: "12%",
    top: "61.79%",
    right: "88%",
    bottom: "17.89%",
  },
  layer3Icon: {
    height: "21.14%",
    width: "9.87%",
    top: "15.72%",
    right: "90.13%",
    bottom: "63.14%",
  },
  supportingText3: {
    width: "76%",
    top: "0%",
    left: "17.33%",
    height: "53.93%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  supportingTextParent: {
    height: "44.46%",
    width: "22.59%",
    top: "48.55%",
    right: "49.4%",
    bottom: "6.99%",
  },
  supportingText4: {
    height: "31.93%",
    width: "71.99%",
    top: "6.14%",
    fontSize: FontSize.textMMedium_size,
    lineHeight: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    alignItems: "center",
    display: "flex",
    left: "28.01%",
  },
  eventitem: {
    top: 141,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem1: {
    top: 250,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem2: {
    top: 359,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem3: {
    top: 468,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem4: {
    top: 577,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem5: {
    top: 686,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem6: {
    top: 795,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem7: {
    top: 904,
    width: 332,
    left: 31,
    height: 83,
  },
  eventitem8: {
    top: 1013,
    width: 332,
    left: 31,
    height: 83,
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
  supportingText45: {
    marginLeft: -17,
    width: 34,
    left: "50%",
  },
  icon1: {
    marginLeft: -11,
  },
  profile: {
    marginLeft: 117.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  vectorIcon9: {
    marginLeft: -7,
    width: 15,
  },
  saved: {
    marginLeft: 32.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  supportingText47: {
    left: "0%",
    color: Color.colorWhite1,
    top: "47.81%",
    height: "52.19%",
    width: "100%",
  },
  vectorIcon10: {
    marginLeft: -11.5,
  },
  categories: {
    width: "15.52%",
    right: "53.44%",
    left: "31.04%",
  },
  vectorIcon11: {
    marginLeft: -10,
    width: 20,
  },
  home: {
    width: "8.14%",
    right: "80.15%",
    left: "11.7%",
  },
  navbar: {
    top: 775,
  },
  newestevent: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default NewestEvent;
