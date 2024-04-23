import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CommonTextStyle, MeetingCardStyle } from '../style/Styles';
import { COLORS } from '../constants/Colors';

type Props = {
  title: string;
  text: string;
}

const textLength = 120

const ReadMoreText = ({ text, title }: Props) => {

  const [showFulltext, setShowFulltext] = useState(false);

  const toggletext = () => {
    setShowFulltext(!showFulltext);
  };


  const rendertext = () => {
    if (!showFulltext && text && text.length > textLength) {
      return text.substring(0, textLength) + '...';
    }
    return text;
  };


  return (
    <View>
      <Text style={[CommonTextStyle.keyStyle, { color: COLORS.DESCRIPTION_COLOR }]}>{title ?? ""}
        <Text style={CommonTextStyle.valueStyle}>{rendertext()}
        </Text>
      </Text>
      {text && text.length > textLength && (
        <TouchableOpacity onPress={toggletext} style={{ alignSelf: 'flex-end', borderWidth: 0 }}>
          <Text style={MeetingCardStyle.readMoreButtonStyle}>
            {showFulltext ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ReadMoreText;