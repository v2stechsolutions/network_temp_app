import {combineReducers} from '@reduxjs/toolkit';
import loginReducer from '../../screens/login/reducer/loginReducer';


const rootReducer = combineReducers({
  auth: loginReducer,

});

export default rootReducer;
