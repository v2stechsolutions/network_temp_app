import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import MemberDeals from '../../screens/main/memberdeals';

const Stack = createNativeStackNavigator();

const MemberDealsStacks= () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.MEMBER_DEALS} component={MemberDeals} />
    </Stack.Navigator>
  )
}

export default MemberDealsStacks