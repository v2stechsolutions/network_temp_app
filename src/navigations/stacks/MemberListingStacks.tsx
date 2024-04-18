import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import MemberListing from '../../screens/main/memberlisting';
import MemberDetails from '../../screens/main/memberlisting/screens/MemberDetails';

const Stack = createNativeStackNavigator();

const MemberListingStacks = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.MEMBER_LISTING} component={MemberListing} />
      <Stack.Screen name={PATH.MEMBER_DETAILS} component={MemberDetails} />
    </Stack.Navigator>
  )
}

export default MemberListingStacks