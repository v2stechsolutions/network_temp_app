import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper';
import { moderateScale, verticalScale } from '../utils/Scale';
import { COLORS } from '../constants/Colors';
import { CENTER } from '../constants/Label';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';
import LinearGradientWrapper from './LinearGradientWrapper';


type Props = {
  text: string,
  onPress: () => void;
  borderRadius?: number;
  backgroundColor?: string;
  disabled?: boolean;
  loader?: boolean;
  nonLinear?: boolean;
}

const CustomeButton = ({ onPress, text, borderRadius = 5, backgroundColor = COLORS.PRIMARY, disabled, loader, nonLinear }: Props) => {


  if (nonLinear) {
    return (
      <View style={[styles.mainView, { borderRadius: moderateScale(borderRadius), backgroundColor }]}>
        <TouchableRipple
          onPress={onPress}
          rippleColor="rgba(0, 0, 0, .32)"
          style={[styles.mainView, { backgroundColor }]}
          borderless
          disabled={disabled}
        >
          {loader ? <ActivityIndicator size="small" color={COLORS.WHITE} /> : <Text style={styles.buttonText}>{text}</Text>}
        </TouchableRipple>
      </View >
    )
  }

  return (
    <LinearGradientWrapper style={[styles.mainView, { borderRadius: moderateScale(borderRadius), backgroundColor }]}>
      <TouchableRipple
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .32)"
        style={styles.mainView}
        borderless
        disabled={disabled}
      >
        {loader ? <ActivityIndicator size="small" color={COLORS.WHITE} /> : <Text style={styles.buttonText}>{text}</Text>}
      </TouchableRipple>
    </LinearGradientWrapper>
  )
};

export default CustomeButton;

const styles = StyleSheet.create({
  mainView: {
    height: verticalScale(40),
    justifyContent: CENTER,
    alignItems: CENTER,
    width: '100%',
    // borderWidth: 2,
    overflow: 'hidden'
  },
  buttonText: {
    color: COLORS.WHITE,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(16),
    // fontWeight: '800',
    // letterSpacing: 0.8
  }
})