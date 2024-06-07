import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const UploadUMKM = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.uploadumkm, styles.icon2Layout]}>
      <View style={[styles.uploadField, styles.headerSpaceBlock]}>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.uploadProposal, styles.uploadTypo]}>
              Upload Berkas Identitas
            </Text>
            <Text style={[styles.text, styles.uploadTypo]}>*</Text>
          </View>
          <View style={styles.inputField}>
            <Text style={[styles.dragDropContainer, styles.uploadFileTypo]}>
              <Text style={styles.dragDrop}>{`Drag & drop or `}</Text>
              <Text style={styles.browse}>browse</Text>
            </Text>
          </View>
        </View>
        <View style={styles.input1}>
          <View style={styles.label}>
            <Text style={[styles.uploadProposal, styles.uploadTypo]}>
              Upload Berkas Usaha
            </Text>
            <Text style={[styles.text, styles.uploadTypo]}>*</Text>
          </View>
          <View style={styles.inputField}>
            <Text style={[styles.dragDropContainer, styles.uploadFileTypo]}>
              <Text style={styles.dragDrop}>{`Drag & drop or `}</Text>
              <Text style={styles.browse}>browse</Text>
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon14.png")}
          />
          <Text style={[styles.downloadFormat, styles.uploadFileTypo]}>
            Download Surat Pernyataan
          </Text>
        </View>
        <View style={styles.input1}>
          <View style={styles.label}>
            <Text
              style={[styles.uploadProposal2, styles.uploadTypo]}
            >{`Upload Surat Pernyataan Dengan Tanda Tangan & Materai `}</Text>
            <Text style={[styles.text, styles.uploadTypo]}>*</Text>
          </View>
          <View style={styles.inputField}>
            <Text style={[styles.dragDropContainer, styles.uploadFileTypo]}>
              <Text style={styles.dragDrop}>{`Drag & drop or `}</Text>
              <Text style={styles.browse}>browse</Text>
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.uploadFile, styles.uploadFileTypo]}>
        Upload File
      </Text>
      <Image
        style={[styles.uploadumkmChild, styles.uploadPosition]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon2, styles.icon2Layout]}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
        </Pressable>
        <Text style={styles.daftarSebagaiPelaku}>
          Daftar Sebagai Pelaku UMKM
        </Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon5.png")}
        />
      </View>
      <View style={[styles.buttonCta, styles.headerPosition]}>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.negotiate, styles.cancelTypo]}>Confirm</Text>
        </View>
        <View style={[styles.button2, styles.buttonFlexBox]}>
          <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon2Layout: {
    width: "100%",
    overflow: "hidden",
  },
  headerSpaceBlock: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
  },
  uploadTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
  },
  uploadFileTypo: {
    textAlign: "center",
    fontSize: FontSize.textMMedium_size,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  uploadPosition: {
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    width: 393,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xl,
    width: 160,
    borderRadius: Border.br_10xs,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  cancelTypo: {
    letterSpacing: 0.7,
    fontSize: FontSize.headingSemibold_size,
    fontFamily: FontFamily.textLSemiBold,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  uploadProposal: {
    color: Color.colorDark,
    fontSize: FontSize.textMMedium_size,
    textAlign: "left",
  },
  text: {
    color: Color.colorAlert,
    marginLeft: 4,
    fontSize: FontSize.textMMedium_size,
    textAlign: "left",
    flex: 1,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dragDrop: {
    color: Color.colorDark,
  },
  browse: {
    textDecoration: "underline",
    color: Color.colorMediumvioletred_100,
  },
  dragDropContainer: {
    fontFamily: FontFamily.textSRegular,
  },
  inputField: {
    backgroundColor: Color.colorLavenderblush,
    borderStyle: "dashed",
    paddingHorizontal: Padding.p_79xl,
    paddingVertical: Padding.p_21xl,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorMediumvioletred_100,
    borderRadius: Border.br_7xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    justifyContent: "center",
    width: 354,
  },
  input1: {
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  icon: {
    overflow: "hidden",
  },
  downloadFormat: {
    marginLeft: 10,
    color: Color.colorDark,
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    borderColor: Color.colorDark,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    borderStyle: "solid",
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
    width: 354,
  },
  uploadProposal2: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDark,
  },
  uploadField: {
    marginLeft: -207.5,
    top: 153,
    left: "50%",
    position: "absolute",
  },
  uploadFile: {
    marginLeft: -38.5,
    top: 90,
    color: Color.colorDark,
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  uploadumkmChild: {
    marginLeft: -99.5,
    top: 115,
    maxHeight: "100%",
    width: 199,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
  },
  daftarSebagaiPelaku: {
    fontSize: FontSize.textLSemiBold_size,
    fontFamily: FontFamily.textLSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorDark,
  },
  header: {
    top: 0,
    justifyContent: "space-between",
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
  },
  negotiate: {
    color: Color.colorWhite1,
  },
  button1: {
    backgroundColor: Color.colorMediumvioletred_100,
  },
  cancel: {
    color: Color.colorMediumvioletred_100,
  },
  button2: {
    marginLeft: 16,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xl,
    width: 160,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderColor: Color.colorMediumvioletred_100,
  },
  buttonCta: {
    top: 697,
    padding: Padding.p_11xl,
    justifyContent: "center",
  },
  uploadumkm: {
    backgroundColor: Color.colorWhite1,
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadUMKM;
