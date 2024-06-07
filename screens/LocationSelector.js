import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LocationSelector = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.mapImage}
        contentFit="cover"
        source={require("../assets/mapcontainer.png")}
      />
      <View style={styles.selectorMenu}>
        <View style={styles.selectorMenuBackground} />
        <View style={styles.stateLayer}>
          <Image
            style={styles.layerIcon}
            contentFit="cover"
            source={require("../assets/layer-2.png")}
          />
          <View style={styles.content}>
            <Text style={styles.locationText}>Lapangan Rampal, Malang</Text>
          </View>
          <View style={styles.trailingElements}>
            <View style={styles.trailingIcon}>
              <View style={styles.iconContainer}>
                <View style={styles.iconStateLayer}>
                  <Image
                    style={styles.iconImage}
                    contentFit="cover"
                    source={require("../assets/iconssearch-24px.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.trailingIcon, styles.hidden]}>
              <View style={styles.iconContainer}>
                <View style={styles.iconStateLayer}>
                  <Image
                    style={styles.iconImage}
                    contentFit="cover"
                    source={require("../assets/iconsmore-vert-24px.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.confirmButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.confirmButtonText}>Confirm location</Text>
        </Pressable>
        <Text style={styles.selectorTitle}>Select your location</Text>
      </View>
      <Image
        style={styles.locationPin}
        contentFit="cover"
        source={require("../assets/locationpin.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
  mapImage: {
    height: 859,
    width: 393,
    position: "absolute",
    top: 0,
    left: 0,
  },
  selectorMenu: {
    position: "absolute",
    top: 580,
    height: 232,
    width: 393,
    left: 0,
  },
  selectorMenuBackground: {
    backgroundColor: Color.colorWhite1,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  stateLayer: {
    position: "absolute",
    top: 69,
    left: 33,
    height: 54,
    width: 328,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  layerIcon: {
    width: 12,
    height: 15,
  },
  content: {
    flex: 1,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.textSRegular,
    color: "#989ea7",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  trailingElements: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  trailingIcon: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  iconStateLayer: {
    padding: Padding.p_5xs,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  hidden: {
    display: "none",
  },
  confirmButton: {
    position: "absolute",
    top: 148,
    left: 33,
    width: 328,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumvioletred_100,
    paddingHorizontal: Padding.p_77xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  confirmButtonText: {
    lineHeight: 20,
    color: Color.colorWhite1,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  selectorTitle: {
    position: "absolute",
    top: 15,
    left: 37,
    width: 256,
    fontSize: 24,
    lineHeight: 42,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  locationPin: {
    position: "absolute",
    top: 251,
    left: 209,
    width: 67,
    height: 67,
  },
});

export default LocationSelector;
