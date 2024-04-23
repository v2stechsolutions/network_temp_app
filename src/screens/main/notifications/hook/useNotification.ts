import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../../../services/EndPoint';
import axiosInstance from '../../../../services/Request';
import { notNullUndefined } from '../../../../utils/Validations';
import { showToast } from '../../../../utils/toast/DisplayToast';
import { NETWORK_ERROR } from '../../../../constants/Label';
import { TOAST_MSG } from '../../../../utils/toast/ToastConstant';
import { Notification, NotificationType } from '../models';


const initialData: Notification[] = [
  {
    title: 'New Event Alert',
    body: {
      message: 'You have an upcoming event for inauguration scheduled at 12 April 2024.',
      type: 'Event',
    },
  },
  // Add more notifications here with different types
  {
    title: 'One to One Meeting Reminder',
    body: {
      message: 'You have a one to one meeting scheduled for tomorrow.',
      type: 'One to One Meeting',
    },
  },
  {
    title: 'Chapter Meeting Reminder',
    body: {
      message: 'Chapter meeting scheduled for next week.',
      type: 'Chapter Meeting',
    },
  },
  {
    title: 'Reference Notification',
    body: {
      message: 'You received a new reference.',
      type: 'Reference',
    },
  },
  {
    title: 'Deal Confirmation',
    body: {
      message: 'Congratulations! The deal has been successfully closed.',
      type: 'Done Deal',
    },
  },
];


// TODO: Storage call for fetching notifications
const useNotification = () => {
  const [data, setData] = useState<Notification[]>(initialData);
    // const navigation = useNavigation();

    // const fetchData = async () => {
    //   try {
        
    //     const response: AxiosResponse & any = await axiosInstance().get(ENDPOINTS.HOME_DETAILS);

    //     const data = response?.data?.data;

    //     if (notNullUndefined(data)) {
    //         setData(data);
    //     }

    //   } catch (error) {
    //     if (error?.message == NETWORK_ERROR) {
    //       showToast(TOAST_MSG.ERROR, TOAST_MSG.NO_INTERNET);
    //       return;
    //     }
    //   }
    // };
  
    // useEffect(() => {
    //   const unsubscribe = navigation.addListener('focus', () => {
    //     fetchData();
    //   });
  // 
    //   return unsubscribe;
    // }, []);

    return {
      data,
    };
};

export default useNotification;
