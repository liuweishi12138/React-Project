//引入UI组件
import Count from '../components/cont'
//2.引入connect方法
import { connect } from 'react-redux';
//3.引入action
import {increment,decrement,incrementAsync} from '../redux/actions/count'

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

