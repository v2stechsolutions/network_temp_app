import React, { useEffect } from 'react'
import { Alert, Linking, View } from 'react-native'
import VersionCheck from 'react-native-version-check';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { RootState } from '../redux/Store';
import AuthHome from './AuthHome'
import { getAsync } from '../utils/async/AsyncUtils';
import { KEY } from '../utils/async/AsyncConstant';
import { notEmpty, notNullUndefined } from '../utils/Validations';
import { setUserDetails, setValidUser } from '../screens/login/actions';
import DrawerStack from './drawer/DrawerStack';
import { isIOS, prepareUserDetails } from '../utils/Utils';
import { UPDATE_MSG, UPDATE_TITLE } from '../constants/Label';

function Routes() {

  const { isValidUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {

    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)

    asyncCheck()
    checkUpdateNeeded()

  }, []);

  const checkUpdateNeeded = () => {

    VersionCheck.needUpdate({
      ignoreErrors: false,
      provider: isIOS() ? 'appStore' : 'playStore'
    })
      .then((res: any) => {
        if (res?.isNeeded) {
          Alert.alert(UPDATE_TITLE, UPDATE_MSG,
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'UPDATE',
                onPress: () => {
                  if (notEmpty(res?.storeUrl)) {
                    Linking.openURL(res?.storeUrl)
                    return
                  }
                }
              }
            ],
            { cancelable: false }
          );
        }
      }).catch((error) => {
      })
  }

  const asyncCheck = async () => {
    const user = await getAsync(KEY.USER_DATA);
    if (notNullUndefined(user)) {
      const userData = prepareUserDetails(user);
      dispatch(setUserDetails(userData));
      dispatch(setValidUser(true));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isValidUser ? <DrawerStack /> : <AuthHome />}
    </View>
  );
};

export default Routes;