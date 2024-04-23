import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/Colors';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';
import { CENTER } from '../constants/Label';
import { moderateScale, verticalScale } from '../utils/Scale';
import CommonModal from './CommonModal';

type Props = {
  title: string;
  textMessage: string;
  buttonText: string;
  loader: boolean;
  onRequestClose: () => void;
  onPressButton: () => void;
}

const ConfirmationModal = (props: Props) => {

  const {
    title,
    textMessage,
    buttonText,
    loader,
    onRequestClose,
    onPressButton
  } = props;

  return (
    <CommonModal
      title={title}
      text={buttonText}
      disabled={loader}
      loader={loader}
      onPressButton={onPressButton}
      onPressCross={onRequestClose}
    >
      <Text style={styles.modalText}>{textMessage}</Text>
    </CommonModal>
  )
}

export default ConfirmationModal;

const styles = StyleSheet.create({
  modalText: {
    color: COLORS.GREY,
    fontFamily: STANDARD_FONT_FAMILY,
    fontSize: moderateScale(15),
    marginVertical: verticalScale(10),
    textAlign: CENTER
  }
});