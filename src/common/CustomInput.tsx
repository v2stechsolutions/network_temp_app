import React, { memo } from 'react'
import { KeyboardType, StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS } from '../constants/Colors'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale'
import { ROW } from '../constants/Label'
import { STANDARD_FONT_FAMILY } from '../constants/Fonts'


type Props = {
  value: string,
  onChangeText: (value: string) => void,
  placeholder: string,
  label?: string,
  maxLength?: number,
  errorMsg?: string
  error?: boolean
  keyboardType?: KeyboardType
  validation?: (value: string) => boolean,
  secureTextEntry?: boolean,
  borderColor?: string
  borderRadius?: number
  height?: number
  multiline?: boolean
  textAlignVertical?: string
  required?: boolean
}

const CustomInput = (props: Props) => {

  const {
    value,
    onChangeText,
    placeholder,
    label,
    maxLength,
    errorMsg,
    error,
    keyboardType = "default",
    validation,
    secureTextEntry = false,
    borderColor = COLORS.BORDER_COLOR,
    borderRadius = moderateScale(5),
    height = moderateScale(40),
    multiline = false,
    required = true,
    textAlignVertical = "auto"
  } = props


  const errorSchema = () => validation ? !validation(value) : true

  return (
    <View style={{ marginVertical: verticalScale(0) }}>

      {label && <Text style={inputStyles.label}>{label}{required && " *"}</Text>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[inputStyles.input, { borderColor, borderRadius, height: verticalScale(height) }]}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.GREY}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
      />
      {error && errorSchema() && <Text style={inputStyles.errorStyle}>{errorMsg}</Text>}
    </View>
  )
}

export default memo(CustomInput);


export const inputStyles = StyleSheet.create({
  mainView: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(4),
    flexDirection: ROW,
    height: '100%'
  },
  label: {
    color: COLORS.BLACK,
    paddingHorizontal: horizontalScale(4),
    fontSize: moderateScale(15),
    fontFamily: STANDARD_FONT_FAMILY,
    marginVertical: verticalScale(4),
    fontWeight: '700',
  },
  errorStyle: {
    color: COLORS.RED,
    fontSize: moderateScale(12),
    marginLeft: horizontalScale(8),
    // fontFamily: FontRegular
  },
  input: {
    borderWidth: 1.5,
    borderRadius: moderateScale(15),
    height: verticalScale(50),
    paddingLeft: horizontalScale(15),
    color: COLORS.BLACK,
    fontSize: moderateScale(15),
    fontFamily: STANDARD_FONT_FAMILY
  }
})
