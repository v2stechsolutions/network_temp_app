import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../../../services/EndPoint';
import axiosInstance from '../../../../services/Request';
import { notNullUndefined } from '../../../../utils/Validations';
import { showToast } from '../../../../utils/toast/DisplayToast';
import { NETWORK_ERROR } from '../../../../constants/Label';
import { TOAST_MSG } from '../../../../utils/toast/ToastConstant';


const useHome = () => {
    const [data, setData] = useState<any>([]);
    const navigation = useNavigation();

    const fetchData = async () => {
      try {
        
        const response: AxiosResponse & any = await axiosInstance().get(ENDPOINTS.HOME_DETAILS);

        const data = response?.data?.data;

        if (notNullUndefined(data)) {
            setData(data);
        }

      } catch (error) {
        if (error?.message == NETWORK_ERROR) {
          showToast(TOAST_MSG.ERROR, TOAST_MSG.NO_INTERNET);
          return;
        }
      }
    };
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchData();
      });
  
      return unsubscribe;
    }, []);

    return {
      data,
    };
};

export default useHome;
