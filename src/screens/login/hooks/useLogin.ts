import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import validator from 'validator';
import {RootState} from '../../../redux/Store';
import {notEmpty} from '../../../utils/Validations';
import {showToast} from '../../../utils/toast/DisplayToast';
import {TOAST_MSG} from '../../../utils/toast/ToastConstant';
import {loginStart} from '../actions';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {loader} = useSelector(({auth}: RootState) => auth);

  const dispatch = useDispatch();

  const onPressLogin = () => {
    if (!notEmpty(email) || !notEmpty(password) || !validator.isEmail(email)) {
      showToast(TOAST_MSG.ERROR, TOAST_MSG.FIELD_ERROR);
      return;
    }
    const fcmToken = '';

    const loginObj = {
      email,
      password,
      fcmToken,
    };
    dispatch(loginStart(loginObj));
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onPressLogin,
    loader,
  };
};

export default useLogin;
