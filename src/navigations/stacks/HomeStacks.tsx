import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import Home from '../../screens/main/home';

const Stack = createNativeStackNavigator();

const HomeStacks= () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStacks