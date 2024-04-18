import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { Styles } from '../style/Styles'
import { COLORS } from '../constants/Colors'
import { DrawerActions, useNavigation } from '@react-navigation/native'

type Props = {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();

  const onMenuIcon = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <Appbar.Header style={Styles.headerView} mode="center-aligned">
      <Appbar.Action size={30} icon="menu" color={COLORS.PRIMARY} onPress={onMenuIcon} />
      <Appbar.Content titleStyle={Styles.headerTilte} title={title} />
    </Appbar.Header>
  )
}

export default Header