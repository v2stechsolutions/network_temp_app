import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import Events from '../../screens/main/events';

const Stack = createNativeStackNavigator();

const EventStacks = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.EVENTS} component={Events} />
    </Stack.Navigator>
  )
}

export default EventStacks