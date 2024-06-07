import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignUpForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupForm}>
      <LinearGradient
        style={styles.background}
        locations={[0, 1]}
        colors={["rgba(32, 41, 51, 0.32)", "#202933"]}
      />
      <LinearGradient
        style={[styles.background, styles.overlay]}
        locations={[0, 1]}
        colors={["#9c20a0", "#191a1b"]}
      />

      <Text style={styles.title}>Daftar Untuk Lanjut</Text>

      <InputField
        label="Full name"
        value="Aayush Kriti"
        containerStyle={styles.inputContainer}
      />
      <InputField
        label="Email address"
        value="aayush.kriti3@gmail.com"
        containerStyle={styles.inputContainer}
      />
      <InputField
        label="Password"
        value="..................."
        containerStyle={styles.inputContainer}
        secureTextEntry
      />

      <Pressable
        style={styles.createButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.createButtonText}>Create account</Text>
      </Pressable>
      
      <Pressable
        style={styles.signInContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signInText}>
          <Text style={styles.signInPrompt}>You have an account? </Text>
          <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const InputField = ({ label, value, containerStyle, secureTextEntry }) => (
  <View style={[styles.inputField, containerStyle]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      defaultValue={value}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  signupForm: {
    flex: 1,
    backgroundColor: "#202936",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    opacity: 0.8,
  },
  title: {
    fontSize: 42,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputField: {
    width: 328,
    backgroundColor: "#2C3E50",
    borderRadius: 5,
    padding: 15,
  },
  label: {
    color: "#A0A0A0",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createButton: {
    backgroundColor: "#9c20a0",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: "center",
    marginBottom: 20,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signInText: {
    color: "#FFFFFF",
  },
  signInPrompt: {
    color: "#FFFFFF",
  },
  signInLink: {
    color: "#9c20a0",
    fontWeight: "bold",
  },
});

export default SignUpForm;
