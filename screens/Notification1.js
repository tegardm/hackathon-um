import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={[styles.notificationitem, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem1, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem2, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem3, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem4, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem5, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem6, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem7, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem8, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View style={[styles.notificationitem9, styles.notificationitemPosition]}>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View
        style={[styles.notificationitem10, styles.notificationitemPosition]}
      >
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View
        style={[styles.notificationitem11, styles.notificationitemPosition]}
      >
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View
        style={[styles.notificationitem12, styles.notificationitemPosition]}
      >
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </View>
      <View
        style={[styles.notificationitem13, styles.notificationitemPosition]}
      >
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsFlexBox]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
        <Image
          style={styles.notificationitemChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
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
      <Text style={[styles.supportingText, styles.loremIpsumIsFlexBox]}>
        Notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationitemPosition: {
    height: 109,
    width: 319,
    left: 37,
    top: "50%",
    position: "absolute",
  },
  loremIpsumIsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  loremIpsumIs: {
    marginTop: -54.5,
    left: 86,
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontFamily: FontFamily.textSRegular,
    color: Color.colorGray_100,
    width: 233,
    height: 44,
    top: "50%",
    textAlign: "left",
  },
  notificationitemChild: {
    top: 55,
    left: 0,
    width: 54,
    height: 54,
    position: "absolute",
  },
  notificationitem: {
    marginTop: -330,
  },
  notificationitem1: {
    marginTop: -246,
  },
  notificationitem2: {
    marginTop: -162,
  },
  notificationitem3: {
    marginTop: -78,
  },
  notificationitem4: {
    marginTop: 6,
  },
  notificationitem5: {
    marginTop: 90,
  },
  notificationitem6: {
    marginTop: 174,
  },
  notificationitem7: {
    marginTop: 258,
  },
  notificationitem8: {
    marginTop: 342,
  },
  notificationitem9: {
    marginTop: 426,
  },
  notificationitem10: {
    marginTop: 510,
  },
  notificationitem11: {
    marginTop: 594,
  },
  notificationitem12: {
    marginTop: 678,
  },
  notificationitem13: {
    marginTop: 762,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 73,
    width: 9,
    height: 17,
    left: 37,
    position: "absolute",
  },
  supportingText: {
    height: "2.82%",
    width: "35.37%",
    top: "7.86%",
    left: "34.1%",
    fontSize: FontSize.size_xl,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_100,
    display: "flex",
    alignItems: "center",
  },
  notification: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default Notification1;
