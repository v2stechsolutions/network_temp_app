import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CENTER, NO_DATA_TO_DISPLAY } from '../constants/Label';
import { COLORS } from '../constants/Colors';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';
import { moderateScale, verticalScale } from '../utils/Scale';

type Props = {
  text?: string;
}

function NoDataFound({ text = NO_DATA_TO_DISPLAY }: Props) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  )
}

export default NoDataFound;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: CENTER,
    alignItems: CENTER,
    marginVertical: verticalScale(10)
  },
  textStyle: {
    textAlign: CENTER,
    fontWeight: '500',
    color: COLORS.GREY,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(17)
  }
})