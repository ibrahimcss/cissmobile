import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import apiServices from "../api/ApiServices"

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  StatusBar.setHidden(false);

  useEffect(() => {

    async function loginWithToken() {
      let token = await global._retrieveData("token");
      if (token && token != null) {
        let loginStatus = await global.loginWithToken(token);
        if (loginStatus) navigation.navigate("MainScreen",{propUsername:token});
        else navigation.navigate("LoginScreen");
      }
    }

    loginWithToken().then();
  });

  async function loginMethod(u, p) {

    let body = {
      username: u,
      password: p,
      rememberMe: true,
    };
    let token = await global.postMethod(body);
    if (token.id_token) {
      navigation.navigate("MainScreen",{propUsername:username});//register
      let returnStore = await global._storeData("token", token.id_token);
      let retVal = await global._retrieveData("token");
    }

  }

  return (
    <View style={styles.container}>

      <TextInput
        style={[styles.inputText, styles.inputLogin]}
        placeholder="Email"
        onChangeText={text => setUsername(text)}
        placeholderTextColor="#003f5c" />

      <TextInput
        style={[styles.inputText, styles.inputPass]}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        placeholderTextColor="#003f5c" />

      <TouchableOpacity style={styles.logButton}
                        onPress={() => loginMethod(username,password)}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#61dafb",
    borderRadius: 100,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: "#ececec",

  },
  inputText: {
    height: 50,
    width: 250,
    color: "black",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#61dafb",
  },
  inputPass: {
    margin: 10,
  },
  inputLogin: {
    margin: 10,
  },
  logButton: {
    backgroundColor: "#61dafb",
    width: 105,
    height: 40,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,

  },
  text: {
    fontSize: 15,
    color: "white",
  },
});
export default LoginScreen;
