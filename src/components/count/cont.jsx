import React, { Component } from 'react';
import store from '../../redux/store';


export default  class Cont extends Component {
  //加
  increment = () =>{
    //1.获取用户的输入
    const {value} = this.refs.user_selected
    //2.通知redux 加 value
    store.dispatch({type:'increment',data:value*1})
  }
  //减
  decrement = () =>{
      //1.获取用户的输入
      const {value} = this.refs.user_selected
          //2.通知redux 加 value
       store.dispatch({type:'decrement',data:value*1})
  }
  //奇数加
  incrementIfodd = () =>{
    //1.获取用户的输入
    const {value} = this.refs.user_selected
        //2.获取现在的和
    let count = store.getState()
    if(count %2 === 1){
			store.dispatch({type:'increment',data:value*1})
		}

  }
  //等500ms再加
	incrementAsync = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}
render() {
  return (
    <div>
      <h1>当前求和为:{store.getState()}</h1>
      <select ref='user_selected'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.incrementIfodd}>increment if odd</button>
      <button onClick={this.incrementAsync}>increment async</button>
    </div>
  )
}
}

