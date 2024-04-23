import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Header from '../../../common/Header'
import { COLORS } from '../../../constants/Colors'
import { moderateScale, verticalScale } from '../../../utils/Scale'

import { MESSAGES } from './constant/Constants'

import { Divider } from 'react-native-paper'
import NotificationsView from './screens/NotificationsDetailedScreen'
import useNotification from './hook/useNotification'

const Notifications = () => {

  // custom hook call for fetching all the notification
  // this data will be passed to NotifiactionView

  const {
    data
  } = useNotification()

  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1}}>
      <NotificationsView notificationData={data}/>
    </View>
  )
}

export default Notifications;