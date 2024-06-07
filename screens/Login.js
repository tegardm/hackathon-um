import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleLogin = () => {
    navigation.navigate("LocationSelector")
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      // Proceed with login logic
      navigation.navigate("LocationSelector");
    }
  };

  return (
    <View style={styles.login}>
      <View style={[styles.albumBackground, styles.image2IconLayout]}>
        <Image
          style={[styles.image2Icon, styles.inputTextPosition]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <LinearGradient
          style={styles.albumBackgroundChild}
          locations={[0, 1]}
          colors={["rgba(32, 41, 51, 0.32)", "#93118a"]}
        />
      </View>
      <View style={[styles.inputContainer, styles.inputTextLayout]}>
        <TextInput
          style={styles.inputText}
          placeholder="Email address"
          placeholderTextColor={Color.colorGray_400}
          onChangeText={setEmail}
          value={email}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          accessibilityLabel="Email address input"
        />
      </View>
      <View style={[styles.inputContainer, styles.inputTextLayout,styles.inputPassword]}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Password"
          placeholderTextColor={Color.colorGray_400}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          textContentType="password"
          accessibilityLabel="Password input"
        />
      </View>
      {errorMessage !== "" && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={[styles.buttonText, styles.text1Typo]}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.signUpContainer}
        onPress={() => navigation.navigate("SignUpForm")}
      >
        <Text style={[styles.text2, styles.text2Typo]}>
          <Text style={styles.youDontHaveAccount}>
            {`You don’t have an account? `}
          </Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.forgotPasswordContainer}
        onPress={() => {
          // Add forgot password functionality
        }}
      >
        <Text style={[styles.forgotPassword, styles.text2Typo]}>
          Forgot password?
        </Text>
      </Pressable>
      <Text style={[styles.title, styles.text1Typo]}>{`Silahkan Login
Untuk Lanjut.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image2IconLayout: {
    height: 934,
    width: 958,
    position: "absolute",
  },
  inputTextPosition: {
    left: 0,
    top: 0,
  },
  inputPassword: {
    top:420
  },
  inputTextLayout: {
    height: 58,
    top:350,
    width: 328,
    position: "absolute",
    zIndex: 2,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    marginBottom: Padding.p_base,
  },
  text1Typo: {
    textAlign: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text2Typo: {
    height: 19,
    letterSpacing: 0.3,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  image2Icon: {
    height: 934,
    width: 958,
    position: "absolute",
  },
  albumBackgroundChild: {
    top: 82,
    left: 466,
    width: 393,
    backgroundColor: "transparent",
    position: "absolute",
    height: 852,
  },
  albumBackground: {
    top: -82,
    left: -466,
  },
  inputContainer: {
    marginTop: 15,
    marginHorizontal: 33,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslategray_200,
    padding: Padding.p_base,
  },
  inputText: {
    height: 28,
    width: '100%',
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.textSRegular_size,
  },
  errorText: {
    color: 'red',
    marginBottom: Padding.p_base,
    textAlign: "center",
  },
  loginButton: {
    top: 565,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumvioletred_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_77xl,
    paddingVertical: Padding.p_base,
    width: 328,
    left: 33,
    position: "absolute",
  },
  buttonText: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    lineHeight: 20,
  },
  youDontHaveAccount: {
    color: Color.colorWhite1,
  },
  signUp: {
    color: Color.colorMediumpurple,
  },
  text2: {
    marginLeft: -126.5,
    width: 253,
  },
  signUpContainer: {
    left: "50%",
    top: 649,
    position: "absolute",
  },
  forgotPasswordContainer: {
    position: "absolute",
    top: 518,
    left: 227,
  },
  forgotPassword: {
    width: 134,
    color: Color.colorWhite1,
  },
  title: {
    top: 219,
    textAlign:'center',

    fontSize: FontSize.size_9xl,
    lineHeight: 42,
    // position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default Login;
