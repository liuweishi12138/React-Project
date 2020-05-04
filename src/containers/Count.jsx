//该文件是Count的容器组件
/* 
	特别注意：容器组件，肯定是组件，但是容器组件不是你亲自去定义的，是靠方法生成的。
*/


//引入UI组件
import Count from '../components/cont'
//2.引入connect方法
import { connect } from 'react-redux';
//3.引入action
import {increment,decrement} from '../redux/actions/count'




/* 
		mapStateToProps方法专门用于给UI组件传递redux中的状态，以props形式传递。
 */
function mapStateToProps(state) {
	return {count:state}
}


function mapDispatchToProps(dispatch) {
	
	return{
		increment:(value)=>{dispatch(increment(value))},
		decrement:(value)=>{dispatch(decrement(value))},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Count);

