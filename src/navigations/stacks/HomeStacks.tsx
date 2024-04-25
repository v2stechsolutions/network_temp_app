import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import Home from '../../screens/main/home';
import Notifications from '../../screens/main/notifications';

const Stack = createNativeStackNavigator();

const HomeStacks= () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true
    }}
    >
      <Stack.Screen name={PATH.HOME} options={{headerShown: false}} component={Home} />
      <Stack.Screen name={PATH.NOTIFICATION} component={Notifications} />
    </Stack.Navigator>
  )
}

export default HomeStacks