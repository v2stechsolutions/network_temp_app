import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PATH } from '../../constants/RouteName';
import ManageReference from '../../screens/main/managereference';

const Stack = createNativeStackNavigator();

const ManageReferenceStacks = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.MANAGE_REFERENCE} component={ManageReference} />
    </Stack.Navigator>
  )
}

export default ManageReferenceStacks;