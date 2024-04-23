import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale, verticalScale } from '../../utils/Scale';
import { CENTER, ROW } from '../../constants/Label';
import { COLORS } from '../../constants/Colors';
import { notEmpty } from '../../utils/Validations';
import { STANDARD_FONT_FAMILY } from '../../constants/Fonts';
import { useSelector } from 'react-redux';
import { CIRCLE_NO_IMAGE } from '../../constants/ImageConstant';
import { RootState } from '../../redux/Store';

const ProfileCard = () => {

  const {
    profile_picture,
    full_name,
    seller_email,
    mobile_number
  } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <View style={styles.container}>

        <View style={{ width: '30%', justifyContent: CENTER, alignItems: CENTER, borderWidth: 0 }}>

          <Image
            style={styles.image}
            source={{
              uri: notEmpty(profile_picture) ? profile_picture : CIRCLE_NO_IMAGE,
            }}
          />
        </View>

        <View style={styles.textContainer}>
          {full_name && <Text style={[styles.text, { fontSize: moderateScale(22), fontWeight: '900' }]} numberOfLines={4}>Hello, {full_name ?? ''}</Text>}
          {/* {mobile_number && <Text style={styles.text}>{mobile_number ?? ''}</Text>}
          {seller_email && <Text style={styles.text}>{seller_email ?? ''}</Text>} */}
        </View>
      </View >
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: ROW,
    paddingVertical: verticalScale(10),
    borderWidth: 0,
  },
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: 200
  },
  textContainer: {
    width: '70%',
    // paddingVertical: verticalScale(10),
    justifyContent: CENTER

  },
  text: {
    fontSize: moderateScale(14),
    color: COLORS.WHITE,
    fontFamily: STANDARD_FONT_FAMILY
  }
})

export default ProfileCard;