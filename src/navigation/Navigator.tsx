import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "@screens/SignIn";
import React from "react";
import { navigationRef } from "./NavigationService";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen
          name="SignIn"
          getComponent={() => require("@screens/SignIn").default}
        />
        <Stack.Screen
          name="Menu"
          getComponent={() =>
            require("@modules/menu/containers/MenuScreen").default
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
