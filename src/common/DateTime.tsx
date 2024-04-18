import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants/Colors';
import { STANDARD_FONT_FAMILY } from '../constants/Fonts';
import { CENTER, ROW } from '../constants/Label';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import { convertDateAndTime } from '../utils/Utils';
import { notEmpty } from '../utils/Validations';
import { inputStyles } from './CustomInput';

type Props = {
  value: string;
  placeholder: string;
  onConfirm: (value: string) => void;
  label: string;
  required?: boolean;
  error: boolean;
  errorMsg: string;
}


const DateTime = ({ value, placeholder, onConfirm, label, error, errorMsg, required }: Props) => {

  const [date, setDate] = useState<string>(value ?? '');

  const [isDatePicker, setIsDatePicker] = useState(false)

  const onDateTimeConfirm = (dateTime: Date) => {
    const modifiedVal = moment(dateTime).format("DD/MM/YYYY HH:mm");
    setDate(modifiedVal);
    onConfirm(modifiedVal)
    setIsDatePicker(false)
  }

  const showDateTinePicker = () => {
    setIsDatePicker(true)
  }

  const onCancel = () => {
    setIsDatePicker(false)
  }

  return (
    <View>

      <DateTimePickerModal
        isVisible={isDatePicker}
        mode="datetime"
        onConfirm={(date) => onDateTimeConfirm(date)}
        onCancel={onCancel}
        minimumDate={new Date()}
        date={notEmpty(date) ? convertDateAndTime(date) : new Date()}
      />

      <View>

        <Text style={inputStyles.label}>{label}{required && " *"}</Text>
        <TouchableOpacity style={dateStyle.dateView} activeOpacity={0.4} onPress={showDateTinePicker}>
          <Text
            style={[dateStyle.date, { color: notEmpty(date) ? COLORS.BLACK : COLORS.GREY }]}>
            {notEmpty(date) ? date : placeholder}
          </Text>
          <FontAwesome
            name='calendar'
            size={moderateScale(25)}
            color={COLORS.GREY}
          />
        </TouchableOpacity>
        {error && !notEmpty(value) && <Text style={inputStyles.errorStyle}>{errorMsg}</Text>}
      </View>

    </View>
  )
}

export default DateTime;

const dateStyle = StyleSheet.create({
  date: {
    color: COLORS.BLACK,
    fontSize: moderateScale(15),
    fontFamily: STANDARD_FONT_FAMILY
  },
  dateView: {
    borderWidth: 1.5,
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(15),
    color: COLORS.GREY,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: moderateScale(5),
    flexDirection: ROW,
    justifyContent: 'space-between',
    alignItems: CENTER
  }
})