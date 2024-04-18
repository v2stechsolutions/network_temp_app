import {AxiosResponse} from 'axios';
import {ENDPOINTS} from '../../../services/EndPoint';
import axiosInstance from '../../../services/Request';
import {LoginData} from '../actions';

const loginService = async (loginObj: LoginData): Promise<AxiosResponse> => {
  const {email, password} = loginObj;

  const formData = new FormData();

  formData.append('USERNAME', `${email}`);
  formData.append('PASSWORD', `${password}`);

  const result = await axiosInstance().post(`${ENDPOINTS.LOGIN}`, formData);

  return result;
};

export default loginService;
