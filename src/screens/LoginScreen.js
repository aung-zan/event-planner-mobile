import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import InputBox from "../components/InputBox";
import { Colors } from "../constants/Constants";
import { useGlobal } from "../providers/GlobalProvider";
import * as Device from "expo-device";
import { authLogin } from "../api/Login";
import { setToken } from "../helper/Storage";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { setAuthenticated } = useGlobal();

  // login function
  const login = async () => {
    setMessage("");

    try {
      const result = await authLogin(email, password, Device.deviceName);

      await setToken(result.data);
      setAuthenticated(true);
    } catch ({ message }) {
      setMessage(message);
    }
  };

  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Logo</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.error}>
            <Text style={styles.errorMessage}>{message}</Text>
          </View>

          <View style={styles.loginForm}>
            <InputBox type="email" value={email} onChange={setEmail} />
            <InputBox type="password" value={password} onChange={setPassword} />

            <Pressable style={styles.button} onPress={login}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.version}>
            <Text style={styles.versionText}>v0.1</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "SF",
    fontSize: 65,
    color: Colors.white,
  },
  body: {
    flex: 4,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Colors.primary,
    marginTop: "-3%",
  },
  title: {
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "SF",
    fontSize: 25,
  },
  error: {
    marginTop: "10%",
    marginHorizontal: "5%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontFamily: "SF",
    fontSize: 18,
    color: Colors.danger,
  },
  loginForm: {
    marginTop: "5%",
  },
  button: {
    borderRadius: 10,
    marginTop: "5%",
    marginHorizontal: "21%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    fontFamily: "SF",
    fontSize: 20,
    color: Colors.white,
  },
  version: {
    marginTop: "25%",
    marginHorizontal: "5%",
    alignItems: "flex-end",
  },
  versionText: {
    fontFamily: "SF",
    fontSize: 18,
    color: Colors.light,
  },
});
