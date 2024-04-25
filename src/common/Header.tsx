import { View, Text, Keyboard, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { Styles } from '../style/Styles'
import { COLORS } from '../constants/Colors'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { notification_icon } from '../../assets/images'
import { PATH } from '../constants/RouteName'

type Props = {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();

  const onMenuIcon = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.openDrawer())
  }

  const onNotificationPress = () => {
    navigation.navigate(PATH.NOTIFICATION)
  }

  return (
    <Appbar.Header style={Styles.headerView} mode="center-aligned">
      <TouchableOpacity onPress={onMenuIcon}>
        <Image source={notification_icon} style={Styles.icon} />
      </TouchableOpacity>
      <Appbar.Content titleStyle={Styles.headerTilte} title={title} />
      <TouchableOpacity onPress={onNotificationPress}>
        <Image source={notification_icon} style={Styles.icon} />
      </TouchableOpacity>
    </Appbar.Header>
  )
}

export default Header