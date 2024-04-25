import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Routes from './src/navigations/Routes';
import store from './src/redux/Store';


import PushNotification from 'react-native-push-notification'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  )
}

export default App  
