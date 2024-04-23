import {useNavigation} from '@react-navigation/native';
import {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {ENDPOINTS} from '../../../../services/EndPoint';
import axiosInstance from '../../../../services/Request';
import {isArrayLength} from '../../../../utils/Validations';

const useChapterMeeting = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    try {
      setLoader(true)
      const COMPLETE_ENDPOINT = `${ENDPOINTS.CHAPTER_MEETING}?past-meetings=false&page_number=1&page_size=1`;

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

export default useChapterMeeting;
