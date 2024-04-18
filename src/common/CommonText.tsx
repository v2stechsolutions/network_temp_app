import React from 'react';
import { Text, View } from 'react-native';
import { CommonTextStyle } from '../style/Styles';

type Props = {
  value: string;
  title: string;
}

const CommonText = ({ title, value }: Props) => {
  return (
    <View style={CommonTextStyle.mainView}>
      <Text style={CommonTextStyle.keyStyle}>{title ?? ""}
        <Text style={CommonTextStyle.valueStyle}>{value ?? ""}</Text>
      </Text>
    </View>
  )
}

export default CommonText;

