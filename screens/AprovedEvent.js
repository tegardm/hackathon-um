import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const AprovedEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aprovedevent}>
      <View style={[styles.aprovedeventChild, styles.aprovedeventLayout]} />
      <Text style={styles.supportingText}>Detail Tentang Event</Text>
      <Image
        style={styles.aprovedeventItem}
        contentFit="cover"
        source={require("../assets/vector-62.png")}
      />
      <Text style={[styles.supportingText1, styles.supportingFlexBox]}>
        Registrasi End at
      </Text>
      <Text style={[styles.supportingText2, styles.supportingFlexBox]}>
        Category
      </Text>
      <Text style={[styles.supportingText3, styles.supportingFlexBox]}>
        Deskripsi
      </Text>
      <Text
        style={[styles.supportingText4, styles.supportingFlexBox]}
      >{`0-2 hrs prior to slot: Cancellations not allowed. >2 hrs prior to slot: 15.0% of Gross Amount will  be deducted as cancellation fee. 0-2 hrs prior to slot: Cancellations not allowed. >2 hrs prior to slot: 15.0% of Gross Amount will be deducted as cancellation fee. 0-2 hrs prior to slot: Cancellations not allowed. >2 hrs prior to slot: 15.0% of Gross Amount will 
be deducted as cancellation fee.`}</Text>
      <Text style={[styles.supportingText5, styles.supportingFlexBox]}>
        30 / 02 / 2024
      </Text>
      <Text style={styles.supportingText6}>Acara Akademik</Text>
      <Image
        style={[styles.aprovedeventInner, styles.aprovedeventLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={styles.supportingText7}>Football</Text>
      <Text style={[styles.supportingText8, styles.supportingTypo]}>
        Senin, 2 - 03 -2024
      </Text>
      <Text style={[styles.supportingText9, styles.supportingTypo]}>
        05:00 PM - 06:00 PM
      </Text>
      <Text style={[styles.supportingText10, styles.supportingTypo]}>
        tegardm@gmail.com
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-59.png")}
      />
      <Image
        style={[styles.aprovedeventChild1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-16.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Saved")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
      </Pressable>
      <View style={[styles.continnueButton, styles.continnueFlexBox]}>
        <Text style={styles.aproved}>Aproved</Text>
      </View>
      <Pressable
        style={[styles.continnueButton1, styles.continnueFlexBox]}
        onPress={() => navigation.navigate("ChatNegotiation")}
      >
        <Text style={styles.aproved}>Chat Now!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aprovedeventLayout: {
    width: 305,
    borderRadius: Border.br_3xs,
    left: 44,
    position: "absolute",
  },
  supportingFlexBox: {
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
    letterSpacing: 1,
    position: "absolute",
  },
  supportingTypo: {
    left: "22.9%",
    textAlign: "left",
    fontFamily: FontFamily.textSRegular,
    fontSize: FontSize.textSRegular_size,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
    lineHeight: 21,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  continnueFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_77xl,
    flexDirection: "row",
    width: 272,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: 61,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  aprovedeventChild: {
    top: 240,
    backgroundColor: Color.colorLavenderblush,
    borderStyle: "dashed",
    borderColor: Color.colorMediumvioletred_100,
    borderWidth: 1,
    height: 477,
  },
  supportingText: {
    height: "4.69%",
    marginLeft: -119.5,
    top: "4.58%",
    left: "50%",
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
    lineHeight: 21,
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  aprovedeventItem: {
    top: 1227,
    left: 0,
    width: 393,
    height: 18,
    position: "absolute",
  },
  supportingText1: {
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    left: "14.25%",
    top: "44.48%",
    width: "27.74%",
    height: "2.46%",
    lineHeight: 21,
  },
  supportingText2: {
    top: "48.12%",
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    left: "14.25%",
    width: "27.74%",
    height: "2.46%",
    lineHeight: 21,
  },
  supportingText3: {
    width: "43.51%",
    top: "53.17%",
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    height: "2.46%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    left: "14.25%",
  },
  supportingText4: {
    height: "20.31%",
    width: "71.25%",
    top: "54.46%",
    lineHeight: 15,
    fontFamily: FontFamily.textSRegular,
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    left: "14.25%",
  },
  supportingText5: {
    width: "22.65%",
    left: "60.31%",
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    height: "2.46%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    top: "44.48%",
  },
  supportingText6: {
    width: "29.26%",
    top: "48.59%",
    left: "53.69%",
    height: "1.64%",
    textAlign: "left",
    fontSize: FontSize.textSRegular_size,
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 1,
    position: "absolute",
  },
  aprovedeventInner: {
    top: 102,
    height: 122,
  },
  supportingText7: {
    width: "36.64%",
    top: "30.63%",
    left: "17.3%",
    textAlign: "left",
    height: "2.46%",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  supportingText8: {
    height: "2.35%",
    width: "44.53%",
    top: "34.15%",
  },
  supportingText9: {
    width: "51.4%",
    top: "36.62%",
    height: "2.46%",
    left: "22.9%",
  },
  supportingText10: {
    width: "41.73%",
    top: "39.2%",
    height: "2.46%",
    left: "22.9%",
  },
  vectorIcon: {
    top: "34.51%",
    bottom: "63.85%",
    maxWidth: "100%",
    right: "79.64%",
    width: "3.05%",
    maxHeight: "100%",
    left: "17.3%",
    height: "1.64%",
    overflow: "hidden",
  },
  vectorIcon1: {
    top: "37.09%",
    bottom: "61.27%",
    maxWidth: "100%",
    right: "79.64%",
    width: "3.05%",
    maxHeight: "100%",
    left: "17.3%",
    height: "1.64%",
    overflow: "hidden",
  },
  groupIcon: {
    top: 340,
    left: 68,
    width: 12,
    height: 9,
    position: "absolute",
  },
  aprovedeventChild1: {
    top: 442,
    left: 56,
    width: 280,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 37,
    top: 50,
    width: 9,
    height: 17,
    position: "absolute",
  },
  aproved: {
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    color: Color.colorWhite1,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  continnueButton: {
    top: 736,
    backgroundColor: Color.colorPrimaryDefault,
    borderColor: "#9bffa0",
    height: 43,
  },
  continnueButton1: {
    top: 786,
    backgroundColor: Color.colorMediumvioletred_100,
    borderColor: "#7a1159",
    height: 44,
  },
  aprovedevent: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default AprovedEvent;
