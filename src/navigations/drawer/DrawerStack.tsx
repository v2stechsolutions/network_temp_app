import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { COLORS } from '../../constants/Colors'
import { CENTER, LOGOUT } from '../../constants/Label'
import { setUserDetails, setValidUser } from '../../screens/login/actions'
import { moderateScale, verticalScale } from '../../utils/Scale'
import { KEY } from '../../utils/async/AsyncConstant'
import { removeAsync } from '../../utils/async/AsyncUtils'

import { DRAWER_NAME } from './Constants'
import ProfileCard from './ProfileCard'
import { Divider } from 'react-native-paper'

import HomeStacks from '../stacks/HomeStacks'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

const CustomDrawerLabel = (props) => {

  const {label, color} = props;
  return (
    <Text numberOfLines={2} style={{ color:color, fontWeight: '600', fontSize: moderateScale(15) }}>
      {label}
    </Text>
  );
};

const DrawerStack: React.FC = () => {

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const _onLogout = () => {
    navigation.dispatch(DrawerActions.closeDrawer());

    Alert.alert(LOGOUT.TITLE, LOGOUT.MSG, [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Logout', onPress: () => {
          dispatch(setValidUser(false));
          dispatch(setUserDetails(null));
          removeAsync(KEY.USER_DATA)
        }
      },
    ]);
  };

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
              <ProfileCard />
              <Divider style={{ backgroundColor: '#0174AF', marginHorizontal: '2%', marginVertical: verticalScale(4) }} />
              <DrawerItemList {...props} />
              <View style={{ position: 'absolute', bottom: 0, width: '100%', justifyContent: CENTER }}>
                <DrawerItem
                  icon={() => <MaterialIcons name={'logout'} size={20} color={COLORS.WHITE} />}
                  labelStyle={{
                    color: COLORS.WHITE,
                    fontSize: moderateScale(17),
                    alignItems: CENTER,
                  }}
                  label="Log out"
                  onPress={_onLogout}
                />
                <View style={{ marginVertical: verticalScale(10) }}>
                  <Text style={{ color: COLORS.WHITE, textAlign: CENTER }}>{`v ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}</Text>
                </View>
              </View>
            </DrawerContentScrollView>
          )
        }}
        defaultStatus="closed"

        screenOptions={{
          drawerType: "front",
          swipeEnabled: false,
          drawerStyle: {
            backgroundColor: COLORS.PRIMARY,
            width: '80%',
            height: '100%',
            borderTopRightRadius: moderateScale(16),
            borderBottomRightRadius: moderateScale(16)
          },
          headerShown: false,
          drawerActiveBackgroundColor: COLORS.WHITE,
          drawerLabelStyle: {
            fontWeight: '600',
            fontSize: moderateScale(15),
          },
          drawerActiveTintColor: COLORS.PRIMARY,
          drawerInactiveTintColor: '#9FB8C4',
          drawerItemStyle: {
            marginVertical: verticalScale(2)
          }
        }}

      initialRouteName={DRAWER_NAME.HOME}
      >
        <Drawer.Screen
          name={DRAWER_NAME.HOME}
          component={HomeStacks}
          options={{
            drawerIcon: ({ color }) => <Ionicons name={'home'} size={21} color={color} 
              style={{marginRight: moderateScale(4)}}
            />
          }}
        />
     

      
      </Drawer.Navigator >
    </>
  )
};

export default DrawerStack;