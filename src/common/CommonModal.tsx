import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants/Colors'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import CustomeButton from './CustomButton';
import { CENTER } from '../constants/Label';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';

function CommonModal({ children, text, title, onPressButton, onPressCross, disabled, loader }: any) {
  return (
    <View style={styles.mainView}>

      <View style={styles.subView}>

        <View>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={onPressCross}>
              <Ionicons name="close" color={COLORS.GREY} size={moderateScale(26)} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        {children}
        <View style={{ marginTop: verticalScale(5) }}>

          <CustomeButton
            text={text}
            onPress={onPressButton}
            disabled={disabled}
            loader={loader}
          />

        </View>
      </View>
    </View>
  )
}

export default CommonModal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "rgba(0, 24, 60, 0.8)",
    justifyContent: CENTER,
  },
  subView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    marginHorizontal: horizontalScale(12),
    maxHeight: '95%'
  },
  title: {
    textAlign: CENTER,
    color: COLORS.PRIMARY,
    fontSize: moderateScale(19),
    fontWeight: '700',
    fontFamily: STANDARD_FONT_FAMILY,
    marginBottom: verticalScale(14)
  }
})