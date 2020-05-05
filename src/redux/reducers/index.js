//该文件是汇总所有的reducer 最终生成一个总reducer
import countReducer from './count';
//引入Person服务的reducer
import personReducer from './person';
//引入汇总的reducer
import {combineReducers} from 'redux';

//进行汇总
/* 
  	1.combineReducers是函数
    2.combineReducers调用时要传入一个对象，这个对象就是redux中的总状态--state！！！
    3.combineReducers的返回值是一个总reducer
*/
 export default combineReducers(
  {
    number:countReducer,
    persons:personReducer
  }
)