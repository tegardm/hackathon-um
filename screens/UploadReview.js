import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const UploadReview = () => {
  return (
    <View style={styles.uploadreview}>
      <View style={[styles.info, styles.infoSpaceBlock]}>
        <Text style={styles.thankYouWe}>
          Thank you, we have received your data. Please wait for our team to
          validate.
        </Text>
        <Text style={[styles.pengajuanAndaDalam, styles.tambahEventTypo]}>
          Pengajuan Anda Dalam Proses
        </Text>
      </View>
      <View style={[styles.image, styles.imagePosition]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
      <View style={[styles.button, styles.imagePosition]}>
        <Text style={[styles.tambahEvent, styles.tambahEventTypo]}>
          Back to Home
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSpaceBlock: {
    padding: Padding.p_11xl,
    width: 393,
    marginLeft: -196.5,
  },
  tambahEventTypo: {
    fontFamily: FontFamily.textLSemiBold,
    fontWeight: "600",
    letterSpacing: 0.7,
    fontSize: FontSize.headingSemibold_size,
    textAlign: "center",
  },
  imagePosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  thankYouWe: {
    fontSize: FontSize.textMMedium_size,
    fontFamily: FontFamily.textSRegular,
    width: 354,
    textAlign: "center",
    color: Color.colorDark,
  },
  pengajuanAndaDalam: {
    marginTop: 14,
    color: Color.colorDark,
    fontWeight: "600",
    letterSpacing: 0.7,
    fontSize: FontSize.headingSemibold_size,
  },
  info: {
    top: 515,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    padding: Padding.p_11xl,
    width: 393,
    marginLeft: -196.5,
  },
  icon: {
    height: 355,
    width: 354,
  },
  image: {
    top: 100,
    padding: Padding.p_11xl,
    width: 393,
    marginLeft: -196.5,
    flexDirection: "row",
  },
  tambahEvent: {
    color: Color.colorWhite1,
    flex: 1,
  },
  button: {
    marginLeft: -177.5,
    top: 733,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorMediumvioletred_100,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    width: 354,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadreview: {
    backgroundColor: Color.colorWhite1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadReview;
