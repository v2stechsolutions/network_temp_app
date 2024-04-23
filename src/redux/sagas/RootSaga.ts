import {all, fork} from 'redux-saga/effects';
// eslint-disable-next-line
import onLoginAsync from '../../screens/login/saga/login';


const allSagas = [
  fork(onLoginAsync),
 
];

export default function* rootSaga() {
  yield all([...allSagas]);
}
