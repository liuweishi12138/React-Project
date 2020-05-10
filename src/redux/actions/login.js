import {SAVE_USERINFO} from '@/redux/action_types';
import {DELETE_USERINFO} from '@/redux/action_types';

//创建一个用于保存用户的action ---对象类型的action ---同步action
export const saveUserInfo = userObj => {
  const {user,token} = userObj
 //向localStorage中保存当前登录的用户信息
 localStorage.setItem('user',JSON.stringify(user))
 localStorage.setItem('token',token)
  return {type:SAVE_USERINFO,data:userObj}
}
//创建一个用于删除用户的action ---对象类型的action ---同步action
export const deleteUserInfo = ()=> {
 //清除用户信息
 localStorage.clear()
  return {type:DELETE_USERINFO}
}