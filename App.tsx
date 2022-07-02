import React from "react";
import { StatusBar } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@context/auth";
import Navigator from "@navigation/Navigator";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
