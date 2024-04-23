import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';
import { COLORS } from '../constants/Colors';
import { CENTER } from '../constants/Label';
import { MESSAGES } from '../screens/main/scheduledmeeting/constant/Constants';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

type Props = {
  data: [] | null;
  pageData: number;
  isLoading: boolean;
  onLoadMore: () => void;
}

const LoadMore = ({ data, pageData, isLoading, onLoadMore }: Props) => {
  return (
    <View>
      <>
        {data && data?.length >= pageData && <View style={{ height: verticalScale(50), justifyContent: CENTER, alignItems: CENTER }}>
          {isLoading ? <ActivityIndicator size="large" color={COLORS.PRIMARY} />
            :
            <TouchableOpacity style={styles.loadButton} onPress={onLoadMore} activeOpacity={0.5}>
              <Text style={styles.loadText}>{MESSAGES.LOAD_MORE}</Text>
              <AntDesign name="plus" color={COLORS.BLACK} size={moderateScale(20)} />
            </TouchableOpacity>
          }
        </View>}
      </>
    </View>
  )
}

export default LoadMore;

const styles = StyleSheet.create({
  loadButton: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: CENTER,
    justifyContent: 'space-between',
    height: verticalScale(35),
    paddingHorizontal: horizontalScale(14),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    elevation: 3
  },
  loadText: {
    color: COLORS.BLACK,
    fontWeight: '400',
  },
});