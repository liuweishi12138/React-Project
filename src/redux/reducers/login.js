import {SAVE_USERINFO} from '@/redux/action_types';

let initState = {user:{},token:''}//定义一个初始化状态
export default function (preState=initState,action) {
  const {type,data } = action
  let newState
  switch (type) {
    case SAVE_USERINFO:
      newState ={...data}
      return newState
  
    default:
      return preState
  }
  
}