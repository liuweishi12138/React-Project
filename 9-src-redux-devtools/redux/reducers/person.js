//该函数是为Person组件服务的reducer
//action是动作对象，形如：{type:'??',data:'???'}
import { ADD_PERSON } from "../action_types";

let initState = [
  {id:'001',name:'老刘-硅谷黄家驹',age:18},
	{id:'002',name:'帅气的海峰',age:19}
] //定义初始状态
export default function countReducer(preStat=initState,action) {
  const {type,data} =action
  let newState
  switch (type) {
    case ADD_PERSON:
      newState = [data,...preStat]
      return newState
    default:
    return preStat
  }
  
}