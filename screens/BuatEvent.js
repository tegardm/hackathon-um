import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BuatEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buatEvent}>
      <View style={[styles.form, styles.formSpaceBlock]}>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>
              Event Name
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField, styles.inputSpaceBlock]}>
            <Text
              style={[styles.text1, styles.text1Typo]}
            >{`Tips & Trick UI/UX Design System`}</Text>
          </View>
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>
              Deskripsi Event
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField, styles.inputSpaceBlock]}>
            <Text style={[styles.text1, styles.text1Typo]}>
              Masukan Deskripsi
            </Text>
          </View>
        </View>
        <View style={[styles.input2, styles.inputLayout]}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>Kategori</Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.dropdown, styles.inputSpaceBlock]}>
            <Text style={[styles.label3, styles.text1Typo]} numberOfLines={1}>
              Masukan Deskripsi
            </Text>
            <Image
              style={[styles.chevronDownIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
        <View style={styles.input3}>
          <View style={styles.label}>
            <Text
              style={[styles.namaLengkap, styles.textTypo]}
            >{`Tanggal & Lokasi`}</Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField, styles.inputSpaceBlock]}>
            <Text style={[styles.text1, styles.text1Typo]}>12/11/2021</Text>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon15.png")}
            />
          </View>
        </View>
        <View style={[styles.inputField3, styles.inputBorder]}>
          <Text style={[styles.text1, styles.text1Typo]}>
            Jln. Tukad Batang Hari No. 80, Denpasar, Bali
          </Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon15.png")}
          />
        </View>
        <View style={styles.input4}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>Waktu</Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.timeInput, styles.inputSpaceBlock]}>
            <View style={[styles.inputField4, styles.inputBorder]}>
              <Text style={[styles.text1, styles.text1Typo]}>13:00</Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon16.png")}
              />
            </View>
            <View style={[styles.inputField5, styles.inputBorder]}>
              <Text style={[styles.text1, styles.text1Typo]}>15:00</Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon16.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.input5}>
          <View style={styles.label6}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>
              Registration End
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField6, styles.inputSpaceBlock]}>
            <Text style={[styles.text1, styles.text1Typo]}>9/11/2021</Text>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon15.png")}
            />
          </View>
        </View>
        <View style={styles.input6}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>
              Upload Thumbnail
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField7, styles.inputSpaceBlock]}>
            <Text style={[styles.dragDropContainer, styles.downloadFormatTypo]}>
              <Text style={styles.dragDrop}>{`Drag & drop or `}</Text>
              <Text style={styles.browse}>browse</Text>
            </Text>
          </View>
        </View>
        <View style={styles.input7}>
          <View style={styles.label}>
            <Text style={[styles.namaLengkap, styles.textTypo]}>
              Upload Proposal
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputField7, styles.inputSpaceBlock]}>
            <Text style={[styles.dragDropContainer, styles.downloadFormatTypo]}>
              <Text style={styles.dragDrop}>{`Drag & drop or `}</Text>
              <Text style={styles.browse}>browse</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={[styles.icon5, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon17.png")}
          />
          <Text style={[styles.downloadFormat, styles.downloadFormatTypo]}>
            Download Format
          </Text>
        </View>
        <View style={styles.checkbox}>
          <Image
            style={[styles.icon5, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon18.png")}
          />
          <Text style={[styles.iAgreeToContainer, styles.textTypo]}>
            <Text style={styles.iAgreeTo}>{`I agree to the `}</Text>
            <Text style={styles.termsAndConditions}>terms and conditions</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.buttonCta, styles.headerLayout]}>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.tambahEvent, styles.eventTypo]}>
            Register Event
          </Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon8}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
        </Pressable>
        <Text style={[styles.createEvent, styles.eventTypo]}>Create Event</Text>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formSpaceBlock: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.textMMedium_size,
  },
  inputSpaceBlock: {
    marginTop: 10,
    alignItems: "center",
  },
  text1Typo: {
    fontFamily: FontFamily.textMRegular,
    textAlign: "left",
    flex: 1,
  },
  inputLayout: {
    height: 63,
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  inputBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorSilver,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite1,
  },
  downloadFormatTypo: {
    textAlign: "center",
    fontSize: FontSize.textMMedium_size,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 354,
  },
  headerLayout: {
    width: 393,
    position: "absolute",
  },
  eventTypo: {
    fontFamily: FontFamily.textLSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  namaLengkap: {
    color: Color.colorDark,
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
  },
  text: {
    color: Color.colorAlert,
    marginLeft: 4,
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
    flex: 1,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text1: {
    letterSpacing: -0.1,
    lineHeight: 20,
    color: Color.colorDark,
    fontSize: FontSize.textMMedium_size,
    fontFamily: FontFamily.textMRegular,
  },
  inputField: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorSilver,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite1,
    alignSelf: "stretch",
  },
  input: {
    zIndex: 0,
    justifyContent: "center",
    width: 354,
  },
  input1: {
    zIndex: 1,
    marginTop: 20,
  },
  label3: {
    lineHeight: 24,
    color: Color.colorGray_200,
    overflow: "hidden",
    fontSize: FontSize.textLSemiBold_size,
  },
  chevronDownIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  dropdown: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorGainsboro_200,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite1,
  },
  input2: {
    zIndex: 2,
    marginTop: 20,
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 4,
  },
  input3: {
    zIndex: 3,
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  inputField3: {
    zIndex: 4,
    marginTop: 20,
    alignItems: "center",
    width: 354,
  },
  inputField4: {
    alignItems: "center",
    flex: 1,
  },
  inputField5: {
    marginLeft: 10,
    alignItems: "center",
    flex: 1,
  },
  timeInput: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input4: {
    zIndex: 5,
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  label6: {
    flexDirection: "row",
    width: 354,
  },
  inputField6: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorSilver,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite1,
    width: 354,
  },
  input5: {
    zIndex: 6,
    marginTop: 20,
    justifyContent: "center",
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
  inputField7: {
    backgroundColor: Color.colorLavenderblush,
    borderStyle: "dashed",
    borderColor: Color.colorPrimaryDefault,
    paddingHorizontal: Padding.p_79xl,
    paddingVertical: Padding.p_21xl,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input6: {
    zIndex: 7,
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  input7: {
    zIndex: 8,
    marginTop: 20,
    justifyContent: "center",
    width: 354,
  },
  icon5: {
    overflow: "hidden",
  },
  downloadFormat: {
    marginLeft: 10,
    color: Color.colorDark,
    fontFamily: FontFamily.textMMedium,
    fontWeight: "500",
  },
  button: {
    borderColor: Color.colorDark,
    paddingHorizontal: Padding.p_3xs,
    zIndex: 9,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  iAgreeTo: {
    color: Color.colorBlack,
  },
  termsAndConditions: {
    color: Color.colorMediumvioletred_100,
  },
  iAgreeToContainer: {
    marginLeft: 9,
    fontFamily: FontFamily.textSRegular,
  },
  checkbox: {
    top: 942,
    left: 18,
    padding: Padding.p_3xs,
    zIndex: 10,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  form: {
    marginLeft: -202.5,
    top: 64,
    width: 405,
    height: 986,
    left: "50%",
    position: "absolute",
  },
  tambahEvent: {
    fontSize: FontSize.headingSemibold_size,
    letterSpacing: 0.7,
    color: Color.colorWhite1,
    flex: 1,
  },
  button1: {
    marginLeft: -176.5,
    top: 30,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorMediumvioletred_100,
    paddingHorizontal: Padding.p_xl,
    zIndex: 0,
    left: "50%",
    position: "absolute",
  },
  buttonCta: {
    marginLeft: -196.5,
    top: 1028,
    height: 102,
    padding: Padding.p_11xl,
    left: "50%",
  },
  icon8: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  createEvent: {
    fontSize: FontSize.textLSemiBold_size,
    color: Color.colorDark,
  },
  header: {
    top: 0,
    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
  },
  buatEvent: {
    height: 852,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite1,
  },
});

export default BuatEvent;
