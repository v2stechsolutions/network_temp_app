import {useNavigation} from '@react-navigation/native';
import {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {ENDPOINTS} from '../../../../services/EndPoint';
import axiosInstance from '../../../../services/Request';
import {isArrayLength} from '../../../../utils/Validations';

const useHomeScheduled = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true)
      const COMPLETE_ENDPOINT = `${ENDPOINTS.ONE_TO_ONE_SCHEDULES}/list/?type=upcoming&page_size=1&page_number=1`;

      const response: AxiosResponse & any = await axiosInstance().get(
        COMPLETE_ENDPOINT,
      );

      const data = response?.data?.data;

      if (isArrayLength(data)) {
        setData(data);
      }
    } catch (error) {
      if (error?.status === 404) {
        setData(null);
      }
    } finally{
      setLoader(false)
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
    loader
  };
};

export default useHomeScheduled;
