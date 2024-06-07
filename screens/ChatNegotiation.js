import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChatNegotiation = () => {
  return (
    <View style={styles.chatnegotiation}>
      <View style={styles.tabBar}>
        <View style={[styles.tabinactive, styles.tabactiveFlexBox]}>
          <Text style={[styles.tanggal, styles.tanggalFlexBox]}>Tanggal</Text>
          <Image
            style={styles.tabinactiveChild}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
        </View>
        <View style={styles.tabactiveFlexBox} />
      </View>
      <View style={styles.chatSection}>
        <View style={[styles.chat, styles.chatFlexBox]}>
          <Image
            style={styles.unsplashz5g6tls6hoIcon}
            contentFit="cover"
            source={require("../assets/unsplashz5g-6tls6ho.png")}
          />
          <View style={[styles.chatField, styles.chatBorder]}>
            <Text
              style={[
                styles.helloDarwisSepertinya,
                styles.untukVenuenyaDirubahTypo,
              ]}
            >
              Hello Darwis, sepertinya venue dan waktu tidak tersedia. Oleh
              sebab itu apabila anda ingin mengganti lokasi venue dan waktu anda
              bisa tapi button “Negotiate” untuk melakukan negosiasi ulang.
            </Text>
          </View>
        </View>
        <View style={[styles.chat1, styles.chatFlexBox]}>
          <View style={[styles.chatField1, styles.chatPosition]}>
            <Text
              style={[
                styles.untukVenuenyaDirubah,
                styles.untukVenuenyaDirubahTypo,
              ]}
            >
              Untuk venuenya dirubah menjadi online via zoom dan untuk waktunya
              tetap. Bagaimana kak?
            </Text>
          </View>
        </View>
        <View style={[styles.chat, styles.chatFlexBox]}>
          <Image
            style={styles.unsplashz5g6tls6hoIcon}
            contentFit="cover"
            source={require("../assets/unsplashz5g-6tls6ho.png")}
          />
          <View style={[styles.chatField, styles.chatBorder]}>
            <Text
              style={[
                styles.helloDarwisSepertinya,
                styles.untukVenuenyaDirubahTypo,
              ]}
            >{`Bisa kak. Jadi untuk biaya lengkapnya akan dijelaskan pada kontrak. Berarti kakak langsung upload ulang proposal yang telah direvisi, surat legalitas event dan kontrak melalui tab “Upload File” diatas apabila telah menyetujui kontrak. Apabila ingin melakukan negosiasi kontrak bisa langsung dibahas pada chat ini.
Terima kasih kak`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/icon4.png")}
        />
        <Text style={[styles.username, styles.tanggalFlexBox]}>username</Text>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/icon5.png")}
        />
      </View>
      <View style={[styles.chatInput, styles.headerSpaceBlock]}>
        <Text style={styles.message}>Message....</Text>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabactiveFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 41,
    width: 98,
  },
  tanggalFlexBox: {
    textAlign: "center",
    color: Color.colorDark,
  },
  chatFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
  },
  chatBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  untukVenuenyaDirubahTypo: {
    width: 214,
    textAlign: "left",
    fontFamily: FontFamily.textSRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.textSRegular_size,
  },
  chatPosition: {
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  headerSpaceBlock: {
    paddingHorizontal: Padding.p_11xl,
    alignItems: "center",
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  tanggal: {
    fontSize: FontSize.textMMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.textMMedium,
  },
  tabinactiveChild: {
    height: 0,
    width: 98,
  },
  tabinactive: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    display: "none",
  },
  tabBar: {
    marginLeft: -196.5,
    top: 64,
    left: "50%",
    paddingHorizontal: 109,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
    width: 393,
    position: "absolute",
  },
  unsplashz5g6tls6hoIcon: {
    width: 26,
    height: 26,
  },
  helloDarwisSepertinya: {
    color: Color.colorDark,
    width: 214,
  },
  chatField: {
    borderBottomRightRadius: Border.br_3xs,
    borderColor: Color.colorDarkgray_300,
    marginLeft: 8,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite1,
    borderWidth: 1,
    borderStyle: "solid",
  },
  chat: {
    width: 414,
  },
  untukVenuenyaDirubah: {
    color: Color.colorWhite1,
  },
  chatField1: {
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumvioletred_100,
  },
  chat1: {
    justifyContent: "flex-end",
    width: 393,
    padding: Padding.p_3xs,
    alignItems: "flex-end",
  },
  chatSection: {
    top: 145,
    left: 0,
    position: "absolute",
  },
  username: {
    fontSize: FontSize.textLSemiBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.textLSemiBold,
  },
  header: {
    top: 0,
    justifyContent: "space-between",
    width: 414,
    left: 0,
  },
  message: {
    textAlign: "left",
    fontFamily: FontFamily.textSRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.textSRegular_size,
    color: Color.colorDark,
    flex: 1,
  },
  icon2: {
    marginLeft: 10,
  },
  chatInput: {
    top: 831,
    left: -1,
    borderColor: Color.colorDark,
    width: 395,
    opacity: 0.6,
    borderWidth: 1,
    borderStyle: "solid",
  },
  chatnegotiation: {
    width: "100%",
    height: 896,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite1,
  },
});

export default ChatNegotiation;
