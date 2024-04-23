import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login/screens";
import { PATH } from "../constants/RouteName";

const Stack = createNativeStackNavigator();

export default function AuthHome() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}