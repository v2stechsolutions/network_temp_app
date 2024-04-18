import axios from 'axios';
import {getAsync} from '../utils/async/AsyncUtils';
import {AUTHORIZATION, BEARER} from './EndPoint';
import {KEY} from '../utils/async/AsyncConstant';
import {notNullUndefined} from '../utils/Validations';
import {PROD_URL} from './BaseUrl';

const axiosInstance = () => {
  const request = axios.create({
    baseURL: PROD_URL,
    timeout: 90000,
    headers: {
      'Tenant-Identifier': 'rmbsobo',
    },
  });

  request.interceptors.request.use(
    async config => {
      let tempConfig = {...config};
      const user = await getAsync(KEY.USER_DATA);

      if (notNullUndefined(user?.access_token)) {
        tempConfig.headers[AUTHORIZATION] = BEARER + user?.access_token;
      }

      if (tempConfig.method === 'post' || tempConfig.method === 'patch') {
        tempConfig.headers['Content-Type'] = 'multipart/form-data';
      }

      return tempConfig;
      // eslint-disable-next-line
    },
    error => Promise.reject(error),
  );

  request.interceptors.response.use(
    response => {
      if (response?.status >= 200 && response?.status <= 299) {
        return {
          status: response?.status,
          data: response?.data,
        };
      }
      // eslint-disable-next-line
      return Promise.reject({
        status: response?.status,
      });
    },
    error => {
      const errorObject = error?.toJSON?.() ?? {};
      // eslint-disable-next-line
      return Promise.reject({
        status: errorObject?.status,
        message: errorObject?.message,
        responseMessage: error?.response?.data?.message,
      });
    },
  );

  return request;
};

export default axiosInstance;
