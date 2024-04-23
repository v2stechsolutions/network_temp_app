import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PATH } from '../../constants/RouteName';
import ScheduledMeeting from '../../screens/main/scheduledmeeting';

const Stack = createNativeStackNavigator();

const ScheduledMeetingStacks = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.SCHEDULED_MEETING} component={ScheduledMeeting} />
    </Stack.Navigator>
  )
}

export default ScheduledMeetingStacks;