import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../utils/Scale';
import {STANDARD_FONT_FAMILY} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import {CENTER} from '../constants/Label';

export const Styles = StyleSheet.create({
  headerView: {
    backgroundColor: COLORS.WHITE,
    height: verticalScale(50),
  },
  headerTilte: {
    fontSize: moderateScale(17),
    fontFamily: STANDARD_FONT_FAMILY,
    color: COLORS.BLACK,
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: 200,
  },
  modalText: {
    color: COLORS.GREY,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(15),
    marginVertical: verticalScale(15),
    textAlign: CENTER,
  },
});

export const MeetingCardStyle = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderRadius: moderateScale(14),
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    borderColor: '#E7E7E7',
    backgroundColor: COLORS.WHITE,
  },
  title: {
    color: COLORS.PRIMARY,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(16),
    fontWeight: '800',
    marginVertical: verticalScale(4),
  },
  dateStyle: {
    color: COLORS.AMBER_YELLOW,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  readMoreButtonStyle: {
    color: COLORS.BLUE,
    marginVertical: 5,
    textDecorationLine: 'underline',
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(11),
  },
});

export const CommonTextStyle = StyleSheet.create({
  mainView: {
    marginVertical: verticalScale(3),
  },
  keyStyle: {
    color: COLORS.BLACK,
    fontSize: moderateScale(14),
    fontFamily: STANDARD_FONT_FAMILY,
    fontWeight: '600',
  },
  valueStyle: {
    color: COLORS.DESCRIPTION_COLOR,
    fontSize: moderateScale(14),
    fontFamily: STANDARD_FONT_FAMILY,
  },
});
