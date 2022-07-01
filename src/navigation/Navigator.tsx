import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "@screens/SignIn";
import React from "react";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          getComponent={() => require("@screens/SignIn").default}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
