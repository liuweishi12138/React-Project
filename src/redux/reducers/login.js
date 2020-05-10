import {SAVE_USERINFO} from '@/redux/action_types';

//用于从localStorage中读取 user和token
let _user 
try {
  _user = JSON.parse(localStorage.getItem('user'))
} catch (error) {
  _user = null
}
let _token = localStorage.getItem('token')

//定义一个初始化状态
let initState = {
  user: _user || {},//用户信息
  token:_token || '',//用户token
  isLogin: _user || _token ? true : false //用户是否已经登录的标识
}
//initState的值，可能有两种情况：(1).空 (2).如果local里有，就以local中的为准




export default function (preState=initState,action) {
  const {type,data } = action
  let newState
  switch (type) {
    case SAVE_USERINFO:
      newState ={...data ,isLogin:true}
      return newState
  
    default:
      return preState
  }
  
}