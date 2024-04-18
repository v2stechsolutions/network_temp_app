import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../constants/Colors'
import { STANDARD_FONT_FAMILY } from '../constants/Fonts'
import { CENTER, ROW } from '../constants/Label'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale'

const Searchbar = (props) => {

  const { onChangeText, value, onPressSearch, placeholder } = props;

  return (
    <View style={style.mainView}>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={style.input}
        placeholderTextColor={COLORS.GREY}
      />

      <TouchableRipple
        onPress={onPressSearch}
        rippleColor="rgba(0, 0, 0, .32)"
        borderless
        style={{
          width: '13%',
          justifyContent: CENTER,
          alignItems: CENTER,
          backgroundColor: COLORS.PRIMARY,
          borderRadius: moderateScale(4)
        }}
      >
        <FontAwesome5Icon name="search" size={moderateScale(18)} color={COLORS.WHITE} />
      </TouchableRipple>

    </View>
  )
}

export default Searchbar;

const style = StyleSheet.create({
  mainView: {
    borderWidth: 1.5,
    borderRadius: moderateScale(5),
    height: verticalScale(42),
    borderColor: "#EEEEEE",
    fontSize: moderateScale(15),
    flexDirection: ROW
  },
  input: {
    width: '87%',
    paddingLeft: horizontalScale(15),
    color: COLORS.BLACK,
    fontSize: moderateScale(15),
    fontFamily: STANDARD_FONT_FAMILY,
  }
})