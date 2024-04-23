import {call, put, takeEvery} from 'redux-saga/effects';
import {AnyAction, SagaIterator} from 'redux-saga';
import {AxiosResponse} from 'axios';
// eslint-disable-next-line
import {prepareUserDetails, start} from '../../../utils/Utils';
import {LOGIN, loginFail, loginSuccess, setUserDetails} from '../actions';
import {notNullUndefined} from '../../../utils/Validations';
import {setAsync} from '../../../utils/async/AsyncUtils';
import {KEY} from '../../../utils/async/AsyncConstant';
import {TOAST_MSG} from '../../../utils/toast/ToastConstant';
import loginService from '../api/Service';
import {showToast} from '../../../utils/toast/DisplayToast';
import {NETWORK_ERROR} from '../../../constants/Label';

function* loginAsync({payload}: AnyAction): SagaIterator {
  try {
    const res: AxiosResponse = yield call(loginService, payload);

    const data = res?.data?.data;
    if (notNullUndefined(data)) {
      setAsync(KEY.USER_DATA, data);
      const userData = prepareUserDetails(data);
      yield put(setUserDetails(userData));
      yield put(loginSuccess());
      return;
    }
    throw TOAST_MSG.INVALID_CREDENTIAL;
  } catch (error: any) {
    yield put(loginFail());
    if (error?.message === NETWORK_ERROR) {
      showToast(TOAST_MSG.ERROR, TOAST_MSG.NO_INTERNET);
      return;
    }
    if (error === TOAST_MSG.INVALID_CREDENTIAL) {
      showToast(TOAST_MSG.ERROR, TOAST_MSG.SERVER_ERROR);
      return;
    }
    showToast(TOAST_MSG.ERROR, TOAST_MSG.INVALID_CREDENTIAL);
  }
}

function* onLoginAsync() {
  yield takeEvery(start(LOGIN), loginAsync);
}

export default onLoginAsync;
