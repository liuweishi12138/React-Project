//引入combineReducers 用于合并多个reducer
import { combineReducers} from 'redux';
import loginReducer from './login';

export default combineReducers({
  userInfo:loginReducer
})