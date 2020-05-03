//该函数是为count组件服务的reducer
//action是动作对象，形如：{type:'??',data:'???'}
import {INCREMENT,DECREMENT} from './action_types'

let initState = 0 //定义初始状态
export default function countReducer(preStat=initState,action) {
  const {type,data} =action
  let newState
  switch (type) {
    case INCREMENT:
      //如果为加
      newState = preStat + data
      return newState

      case DECREMENT:
      //如果为减
      newState = preStat - data
      return newState
  
    default:
      //如果动作类型不是加也不是减，那么就是初始化的时。
    return preStat
  }


  return newState
  
}