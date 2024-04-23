import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Routes from './src/navigations/Routes';
import store from './src/redux/Store';
import PushNotification from 'react-native-push-notification'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { fcmService } from './src/notifications/FCMService';
// import { localNotificationService } from './src/notifications/LocalNotificationService';
import {
  NotificationListener,
  requestUserPermission,
} from './src/notifications/PushNotification';

const MAX_NOTIFICATIONS = 30; // Maximum number of notifications to keep

const App = () => {
  useEffect(() => {
    // Initialize PushNotification
    PushNotification.configure({
      onNotification: async function (notification) {
        // Save the notification data to AsyncStorage
        const notificationsData = await AsyncStorage.getItem('notificationsData');
        let parsedNotifications = JSON.parse(notificationsData) || [];

        // Remove older notifications if exceeding the limit
        if (parsedNotifications.length >= MAX_NOTIFICATIONS) {
          parsedNotifications = parsedNotifications.slice(-MAX_NOTIFICATIONS + 1);
        }

        const newNotification = {
          title: notification.title,
          body: {
            message: notification.message,
            type: notification.data.type, // Assuming the notification includes a type
          },
        };

        const updatedNotifications = [...parsedNotifications, newNotification];

        await AsyncStorage.setItem('notificationsData', JSON.stringify(updatedNotifications));
      },
    });

    return () => {
      // Clean up any resources if needed
    };
  }, []);


  // useEffect(() => {
  //   fcmService.registerAppWithFCM()
  //   fcmService.register(onRegister, onNotification, onOpenNotification)
  //   localNotificationService.configure(onOpenNotification)

  //   function onRegister(token) {
  //     console.log(`[App] onRegister:`, token)
  //     // AsyncStorage.setItem(Constant.FCM_TOKEN, token);
  //   }

  //   function onNotification(notify) {
  //     console.log(`[App] onNotification:`, notify)
  //     const option = {
  //       soundName: 'default',
  //       playSound: true
  //     }
  //     localNotificationService.showNotification(
  //       0,
  //       notify.title,
  //       notify.body,
  //       notify,
  //       option
  //     )
  //   }

  //   function onOpenNotification(notify) {
  //     console.log(`[App] onOpenNotification:`, notify)
  //     // alert("Open Notification: " + notify.body)
  //   }

  //   return () => {
  //     console.log(`[App] unRegister`)
  //     fcmService.unRegister()
  //     localNotificationService.unRegister()
  //   }
  // }, [])

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <>
      <PaperProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <Toast />
        </Provider>
      </PaperProvider>
    </>
  );
};

export default App;
