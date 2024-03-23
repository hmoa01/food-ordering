import { Link, Stack } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { useState } from "react";

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState("");

  const validateInput = () => {
    setErrors("");

    if (!email) {
      setErrors("Email is required");
      return false;
    }

    if (!password) {
      setErrors("Password is required");
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (!validateInput()) return;

    console.warn("You are signed up");

    //SAVE IN DATABASE LATER
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="jon@gmail.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={{ color: "red" }}>{errors}</Text>

      <Button onPress={onSubmit} text="Sign in" />

      <Link style={styles.textButton} href="/sign-in">
        Sign in
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});

export default SignUpScreen;
