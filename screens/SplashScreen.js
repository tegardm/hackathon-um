import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <TouchableOpacity style={styles.splashscreen} onPress={handlePress}>
      <LinearGradient
        style={[styles.blureffect, styles.image3IconPosition]}
        locations={[0, 1]}
        colors={["rgba(32, 41, 51, 0.03)", "rgba(32, 41, 51, 0.1)"]}
      />
      <View style={styles.image3IconPosition}>
        <LinearGradient
          style={[styles.blureffect, styles.image3IconPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 0, 0, 0.32)", "#191a1b"]}
        />
      </View>
      <View style={styles.item}>
        <Text style={[styles.tagline, styles.titlePosition]}>
          {`Untuk Kolaborasikan \nUMKM dan Acara`}
        </Text>
        <Text style={[styles.title, styles.titlePosition]}>
          {`Eventa\nStand`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image3IconPosition: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  titlePosition: {
    textAlign: "center",
    color: Color.colorWhite1,
  },
  blureffect: {
    backgroundColor: "transparent",
    ...StyleSheet.absoluteFillObject,
  },
  tagline: {
    top: 155,
    fontSize: FontSize.size_smi,
    letterSpacing: 2,
    fontFamily: FontFamily.textSRegular,
    color: Color.colorWhite1,
  },
  title: {
    fontSize: 48,
    lineHeight: 45,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite1,
    marginTop: 20,
  },
  item: {
    alignItems: "center",
    top: "40%",
    position: "absolute",
    width: "100%",
  },
  splashscreen: {
    backgroundColor: "#5f19f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
