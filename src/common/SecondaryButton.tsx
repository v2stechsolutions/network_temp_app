import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';
import { CENTER } from '../constants/Label';
import { horizontalScale, moderateScale } from '../utils/Scale';
import LinearGradientWrapper from './LinearGradientWrapper';

type Props = {
  text: string;
  onPress: () => void,
  backgroundColor?: string,
  textColour?: string,
  marginHorizontal?: number,
  activeOpacity?: number,
  borderWidth?: number,
  borderColor?: string,
  isLinear?: boolean,
  borderRadius?: number
}

const SecondaryButton = ({ text, onPress, backgroundColor = COLORS.GREY, textColour = COLORS.BLACK, marginHorizontal = 15, borderColor, activeOpacity = 0.5, borderWidth, isLinear, borderRadius = 4 }: Props) => {

  const InnerText = () =>
  (
    <Text style={[styles.textStyle, { color: textColour, marginHorizontal: moderateScale(marginHorizontal) }]}>
      {text}
    </Text>
  )


  if (isLinear) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <LinearGradientWrapper style={[styles.mainView, { borderRadius }]}>
          <InnerText />
        </LinearGradientWrapper>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={[styles.mainView, { backgroundColor, borderColor, borderWidth: borderWidth, borderRadius }]} onPress={onPress} activeOpacity={activeOpacity}>
      <InnerText />
    </TouchableOpacity>
  )
}

export default SecondaryButton;

const styles = StyleSheet.create({
  mainView: {
    borderRadius: moderateScale(4),
    justifyContent: CENTER,
    alignItems: CENTER
  },
  textStyle: {
    color: COLORS.WHITE,
    marginHorizontal: horizontalScale(15),
    marginVertical: horizontalScale(6),
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(13),
    fontWeight: '600'
  }
})