import * as React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      
      <View style={styles.eventitem}>
        <Image
          style={[styles.eventitemChild, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText1, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View style={[styles.supportingTextParent, styles.groupParentPosition]}>
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-3.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText4, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem1, styles.eventitemPosition]}>
        <Image
          style={[styles.eventitemItem, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText6, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View style={[styles.supportingTextGroup, styles.groupParentPosition]}>
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-31.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText9, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem2, styles.eventitemPosition]}>
        <Image
          style={[styles.eventitemInner, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText11, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View
          style={[styles.supportingTextContainer, styles.groupParentPosition]}
        >
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-32.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText14, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem3, styles.eventitemPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-43.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText16, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View style={[styles.groupView, styles.groupParentPosition]}>
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-33.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText19, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem4, styles.eventitemPosition]}>
        <Image
          style={[styles.eventitemChild1, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-44.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText21, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View
          style={[styles.supportingTextParent1, styles.groupParentPosition]}
        >
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-34.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText24, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem5, styles.eventitemPosition]}>
        <Image
          style={[styles.eventitemChild2, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-45.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText26, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View
          style={[styles.supportingTextParent2, styles.groupParentPosition]}
        >
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-35.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText29, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <View style={[styles.eventitem6, styles.eventitemPosition]}>
        <Image
          style={[styles.eventitemChild3, styles.eventitemChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-46.png")}
        />
        <Text style={styles.supportingText}>2.3 Km</Text>
        <Text style={[styles.supportingText31, styles.supportingFlexBox1]}>
          Jarak Sekitar
        </Text>
        <View
          style={[styles.supportingTextParent3, styles.groupParentPosition]}
        >
          <Text
            style={[styles.supportingText2, styles.supportingTypo1]}
          >{`10 February `}</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Image
            style={[styles.layer3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-36.png")}
          />
          <Text style={[styles.supportingText3, styles.supportingTypo1]}>
            Bangalore
          </Text>
        </View>
        <Text style={[styles.supportingText34, styles.supportingTypo]}>
          Electronic Steve - Music Festival
        </Text>
      </View>
      <Text style={[styles.newevent, styles.nameTypo1]}>
        Event Sekitar Terbaru
      </Text>
      <Pressable
        style={[styles.expand, styles.expandPosition]}
        onPress={() => navigation.navigate("NewestEvent")}
      >
        <Text style={[styles.seeAll, styles.supportingFlexBox1]}>See all</Text>
      </Pressable>
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <View style={[styles.categoriescontainer, styles.homeChildPosition]}>
        <View style={[styles.categoryitem, styles.categoryitemLayout]}>
          <Image
            style={[styles.backgroundIcon, styles.categoryitemLayout]}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <Text style={styles.supportingText35}>Olahraga</Text>
        </View>
        <View style={[styles.categoryitem1, styles.categoryitemLayout]}>
          <Image
            style={[styles.backgroundIcon, styles.categoryitemLayout]}
            contentFit="cover"
            source={require("../assets/background1.png")}
          />
          <Text style={styles.supportingText35}>Olahraga</Text>
        </View>
        <View style={[styles.categoryitem2, styles.categoryitemLayout]}>
          <Image
            style={[styles.backgroundIcon, styles.categoryitemLayout]}
            contentFit="cover"
            source={require("../assets/background2.png")}
          />
          <Text style={styles.supportingText35}>Olahraga</Text>
        </View>
        <View style={[styles.categoryitem3, styles.categoryitemPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.categoryitemLayout]}
            contentFit="cover"
            source={require("../assets/background3.png")}
          />
          <Text style={styles.supportingText35}>Olahraga</Text>
        </View>
        <View style={[styles.categoryitem4, styles.categoryitemPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.categoryitemLayout]}
            contentFit="cover"
            source={require("../assets/background4.png")}
          />
          <Text style={styles.supportingText35}>Olahraga</Text>
        </View>
      </View>
      <Pressable
        style={[styles.expand1, styles.expandPosition]}
        onPress={() => navigation.navigate("Categories")}
      >
        <Text style={[styles.seeAll, styles.supportingFlexBox1]}>See all</Text>
      </Pressable>
      <Text style={[styles.categories, styles.namePosition]}>Categories</Text>
      <View style={[styles.searchbar, styles.searchbarLayout]}>
        <View style={[styles.searchinput, styles.searchbarLayout]}>
          <Text style={styles.supportingText40}>Search</Text>
        </View>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <Pressable
        style={styles.profileicon}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profileicon.png")}
        />
      </Pressable>
      <Pressable
        style={styles.notification}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </Pressable>
      <Text style={[styles.name, styles.nameTypo]}>Sheshadri Road</Text>
      <Pressable
        style={[styles.location, styles.namePosition]}
        onPress={() => navigation.navigate("LocationSelector")}
      >
        <Image
          style={[styles.locationicon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/locationicon.png")}
        />
        <Text style={[styles.locationtext, styles.nameTypo]}>Bangalore</Text>
        <Image
          style={styles.locationChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </Pressable>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.background, styles.navbarLayout]} />
        <Pressable
          style={[styles.profile, styles.savedLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.supportingText41, styles.supportingFlexBox]}>
            Profile
          </Text>
          <Image
            style={[styles.icon3, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.saved, styles.savedLayout]}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.supportingText41, styles.supportingFlexBox]}>
            Saved
          </Text>
          <Image
            style={[styles.vectorIcon7, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.categories1, styles.savedPosition]}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={[styles.supportingText43, styles.supportingFlexBox]}>
            Categories
          </Text>
          <Image
            style={[styles.vectorIcon8, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <View style={[styles.home1, styles.savedPosition]}>
          <Text style={[styles.supportingText43, styles.supportingFlexBox]}>
            Home
          </Text>
          <Image
            style={[styles.vectorIcon9, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventitemChildLayout: {
    width: 83,
    borderRadius: Border.br_3xs,
    left: 0,
    height: 83,
    position: "absolute",
  },
  supportingFlexBox1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
  },
  groupParentPosition: {
    left: "28.01%",
    right: "49.4%",
    width: "22.59%",
    position: "absolute",
  },
  supportingTypo1: {
    left: "17.33%",
    height: "53.93%",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  supportingTypo: {
    lineHeight: 16,
    width: "71.99%",
    fontSize: FontSize.textMMedium_size,
    left: "28.01%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  eventitemPosition: {
    width: 332,
    left: 36,
    position: "absolute",
  },
  nameTypo1: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  expandPosition: {
    left: "80.15%",
    position: "absolute",
  },
  homeChildPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  categoryitemLayout: {
    height: 88,
    width: 88,
    position: "absolute",
  },
  categoryitemPosition: {
    top: 40,
    height: 88,
    width: 88,
    position: "absolute",
  },
  namePosition: {
    left: "8.91%",
    height: "2.34%",
  },
  searchbarLayout: {
    height: 52,
    width: 334,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
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
  supportingFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    top: "47.81%",
    height: "52.19%",
    color: Color.colorWhite1,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  iconPosition: {
    width: 22,
    bottom: "52.19%",
    height: "47.81%",
    left: "50%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "52.19%",
    height: "47.81%",
    left: "50%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  savedPosition: {
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  eventitemChild: {
    top: 0,
  },
  supportingText: {
    right: 7,
    bottom: 13,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  supportingText1: {
    height: "23.98%",
    top: "48.43%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingText2: {
    width: "82.67%",
    top: "46.07%",
  },
  vectorIcon: {
    height: "20.33%",
    width: "12%",
    top: "61.79%",
    right: "88%",
    bottom: "17.89%",
    left: "0%",
    position: "absolute",
  },
  layer3Icon: {
    height: "21.14%",
    width: "9.87%",
    top: "15.72%",
    right: "90.13%",
    bottom: "63.14%",
    left: "0%",
    position: "absolute",
  },
  supportingText3: {
    width: "76%",
    top: "0%",
  },
  supportingTextParent: {
    height: "44.46%",
    top: "42.65%",
    bottom: "12.89%",
  },
  supportingText4: {
    height: "31.93%",
    top: "0.12%",
  },
  eventitem: {
    top: 396,
    height: 83,
    width: 332,
    left: 36,
    position: "absolute",
  },
  eventitemItem: {
    top: 2,
  },
  supportingText6: {
    height: "23.41%",
    top: "47.18%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingTextGroup: {
    height: "43.41%",
    top: "41.53%",
    bottom: "15.06%",
  },
  supportingText9: {
    height: "31.18%",
    top: "0%",
  },
  eventitem1: {
    top: 502,
    height: 85,
  },
  eventitemInner: {
    top: 4,
  },
  supportingText11: {
    height: "22.85%",
    top: "46.04%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingTextContainer: {
    height: "42.37%",
    top: "40.53%",
    bottom: "17.11%",
  },
  supportingText14: {
    height: "30.42%",
    top: "0%",
  },
  eventitem2: {
    top: 608,
    height: 87,
  },
  rectangleIcon: {
    top: 6,
  },
  supportingText16: {
    height: "22.31%",
    top: "44.96%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  groupView: {
    height: "41.37%",
    top: "39.57%",
    bottom: "19.06%",
  },
  supportingText19: {
    height: "29.71%",
    top: "0%",
  },
  eventitem3: {
    top: 714,
    height: 89,
  },
  eventitemChild1: {
    top: 8,
  },
  supportingText21: {
    height: "21.77%",
    top: "43.87%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingTextParent1: {
    height: "40.37%",
    top: "38.62%",
    bottom: "21.01%",
  },
  supportingText24: {
    height: "28.99%",
    top: "0%",
  },
  eventitem4: {
    top: 820,
    height: 91,
  },
  eventitemChild2: {
    top: 11,
  },
  supportingText26: {
    height: "21.28%",
    top: "42.89%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingTextParent2: {
    height: "39.47%",
    top: "37.75%",
    bottom: "22.78%",
  },
  supportingText29: {
    height: "28.34%",
    top: "0%",
  },
  eventitem5: {
    top: 926,
    height: 93,
  },
  eventitemChild3: {
    top: 13,
  },
  supportingText31: {
    height: "20.82%",
    top: "41.95%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.size_3xs,
    left: "78.01%",
    width: "21.39%",
    display: "flex",
    position: "absolute",
  },
  supportingTextParent3: {
    height: "38.6%",
    top: "36.92%",
    bottom: "24.48%",
  },
  supportingText34: {
    height: "27.72%",
    top: "0%",
  },
  eventitem6: {
    top: 1032,
    height: 96,
  },
  newevent: {
    width: "59.03%",
    left: "8.4%",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
    top: "40.74%",
    height: "2.34%",
  },
  seeAll: {
    width: "11.96%",
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    height: "2.34%",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  expand: {
    top: "40.74%",
  },
  homeChild: {
    top: 860,
    height: 51,
    display: "none",
  },
  backgroundIcon: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  supportingText35: {
    height: "25%",
    width: "52.27%",
    top: "72.05%",
    left: "23.86%",
    fontSize: FontSize.size_5xs,
    lineHeight: 17,
    color: Color.colorWhite1,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  categoryitem: {
    left: 33,
    top: 39,
    width: 88,
  },
  categoryitem1: {
    left: 141,
    top: 39,
    width: 88,
  },
  categoryitem2: {
    left: 249,
    top: 39,
    width: 88,
  },
  categoryitem3: {
    left: 357,
  },
  categoryitem4: {
    left: 465,
  },
  categoriescontainer: {
    top: 176,
    height: 134,
  },
  expand1: {
    top: "21.21%",
  },
  categories: {
    width: "30.28%",
    top: "21.01%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  supportingText40: {
    top: 14,
    left: 30,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.textMMedium_size,
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  searchinput: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  icon: {
    top: 18,
    left: 296,
    width: 16,
    height: 16,
    position: "absolute",
  },
  searchbar: {
    top: 114,
    left: 33,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  profileicon: {
    left: "84.48%",
    top: "5.18%",
    right: "5.6%",
    bottom: "90.34%",
    width: "9.92%",
    height: "4.48%",
    position: "absolute",
  },
  notification: {
    left: "72.26%",
    top: "5.99%",
    right: "21.12%",
    bottom: "91.14%",
    width: "6.62%",
    height: "2.88%",
    position: "absolute",
  },
  name: {
    width: "32.82%",
    top: "7.98%",
    left: "8.91%",
    height: "2.34%",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  locationicon: {
    height: "62.31%",
    width: "10.73%",
    top: "12.56%",
    right: "89.27%",
    bottom: "25.13%",
    left: "0%",
    position: "absolute",
  },
  locationtext: {
    width: "74.55%",
    left: "15.45%",
    height: "100%",
    top: "0%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.textSRegular,
  },
  locationChild: {
    top: 9,
    left: 104,
    width: 6,
    height: 3,
    position: "absolute",
  },
  location: {
    width: "27.99%",
    top: "5.45%",
    right: "63.1%",
    bottom: "92.22%",
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorMediumvioletred_100,
    top: 0,
  },
  supportingText41: {
    marginLeft: -17,
    width: 34,
    left: "50%",
  },
  icon3: {
    marginLeft: -11,
  },
  profile: {
    marginLeft: 117.5,
    bottom: "21.69%",
    top: "22.08%",
    height: "56.23%",
    position: "absolute",
  },
  vectorIcon7: {
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
  supportingText43: {
    left: "0%",
    width: "100%",
  },
  vectorIcon8: {
    marginLeft: -11.5,
  },
  categories1: {
    width: "15.52%",
    right: "53.44%",
    left: "31.04%",
  },
  vectorIcon9: {
    marginLeft: -10,
    width: 20,
  },
  home1: {
    width: "8.14%",
    right: "80.15%",
    left: "11.7%",
  },
  navbar: {
    top: 760,
  },
  home: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default Home;