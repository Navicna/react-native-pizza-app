import SignIn from "./src/screens/SignIn";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { StyledView, StyledText } from "react-native-dev-ui";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SignIn />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
