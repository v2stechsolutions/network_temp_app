import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/Colors';
import { CENTER, ROW } from '../constants/Label';
import { moderateScale, verticalScale } from '../utils/Scale';

const HomeActivity = ({ title, onPress }) => {
  return (
    <View style={style.mainView}>
      <Text style={style.title}>{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={style.showMoreStyle}>Show more</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeActivity;

const style = StyleSheet.create({
  mainView: {
    flexDirection: ROW,
    justifyContent: "space-between",
    alignItems: CENTER
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginVertical: verticalScale(10)
  },
  showMoreStyle: {
    color: COLORS.AMBER_YELLOW,
    textDecorationLine: 'underline',
    fontSize: moderateScale(14)
  }
})