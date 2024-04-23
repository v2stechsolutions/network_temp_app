import { View, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import useLogin from '../hooks/useLogin';
import { MESSAGES } from '../constant/Constants';
import { CENTER } from '../../../constants/Label';
import { COLORS } from '../../../constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../../../utils/Scale';
import { STANDARD_FONT_FAMILY } from '../../../constants/Fonts';
import CustomButton from '../../../common/CustomButton';
import CustomInput from '../../../common/CustomInput';


const Login = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    onPressLogin,
    loader
  } = useLogin();

  return (
    <ScrollView contentContainerStyle={styles.mainView} keyboardShouldPersistTaps='handled'>

      <View style={styles.brandView}>
        <View style={styles.logoView}>
          <Image
            source={require('../../../../resource/images/rotary-logo-new.png')}
            style={{
              width: '100%',
              height: '100%'
            }}
            resizeMode='center'
          />
        </View>
      </View>

      <View style={styles.formView}>

        <CustomInput
          label={MESSAGES.EMAIL}
          placeholder={MESSAGES.EMAIL_PLACEHOLDER}
          value={email}
          onChangeText={text => setEmail(text)}
          height={50}
          borderRadius={15}
          required={false}
        />
        <CustomInput
          label={MESSAGES.PASSWORD}
          placeholder={MESSAGES.PASSWORD_PLACEHOLDER}
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          height={50}
          borderRadius={15}
          required={false}
        />

        <View style={styles.buttonView}>
          <CustomButton
            text="Login"
            onPress={onPressLogin}
            borderRadius={30}
            loader={loader}
            disabled={loader}
            nonLinear
          />
        </View>
      </View>

    </ScrollView >
  )
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: horizontalScale(15)
  },
  brandView: {
    flex: 0.4,
    justifyContent: CENTER,
    alignItems: CENTER
  },
  logoView: {
    flex: 1,
    marginTop: verticalScale(10), 
    marginBottom: verticalScale(10),
    width: '100%'
  },
  brandText: {
    color: COLORS.BLACK,
    fontSize: moderateScale(20),
    fontFamily: STANDARD_FONT_FAMILY,
  },
  formView: {
    flex: 0.6,
  },
  buttonView: {
    marginBottom: verticalScale(12),
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
})