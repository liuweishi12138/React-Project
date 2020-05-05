//引入react核心库
import React, { Component } from 'react'
//1.引入connect方法
import { connect } from 'react-redux';
//2.引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'

//import store from '../redux/store'


class Count extends Component {

	//加
	increment = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.“通知”redux 加 value
		this.props.increment(value*1)
	}

	//减
	decrement = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		//2.“通知”redux 加 value
		this.props.decrement(value*1)
	}

	//当前的和是奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
			//获取当前的和
		const {count} = this.props
		if(count %2 === 1){
			this.props.increment(value*1)
		}
	}

	//等500毫秒再加
	incrementAsync = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		this.props.incrementAsync(value*1,500)
	}

	render() {
		return (
			<div>
				<h1>当前求和为:{this.props.count},下方组件的总人数为:{this.props.personCount}</h1>
				<select ref="user_selected">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
	}


export default connect(
	state =>({
		count:state.number,
		personCount:state.persons.length
	}),//映射状态


	//原始的写法：
	/* dispatch => (
		{
			increment:(value)=>{dispatch(increment(value))},
			decrement:(value)=>{dispatch(decrement(value))},
		}
	) */

	//精简写法
	{increment,decrement,incrementAsync}
)(Count)

