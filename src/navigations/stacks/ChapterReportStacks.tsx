import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH } from '../../constants/RouteName';
import ChapterReport from '../../screens/main/chapterreport';

const Stack = createNativeStackNavigator();

const ChapterReportStacks = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name={PATH.CHAPTER_REPORT} component={ChapterReport} />
    </Stack.Navigator>
  )
}

export default ChapterReportStacks