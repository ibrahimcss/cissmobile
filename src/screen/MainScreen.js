import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";


const MainScreen = ({route, navigation}) => {

  const {propUsername, propPassword} =route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text style={styles.text}>K: {JSON.stringify(propUsername)}</Text>
      <Button title={"Go To Login"}
              onPress={() => navigation.navigate("LoginScreen")
              } />
    </View>

  );
};
const styles = StyleSheet.create({
  text: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
    color: "white",
  },
});
export default MainScreen;
