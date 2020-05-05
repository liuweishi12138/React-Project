//引入UI组件
import Person from '../components/Person'
//2.引入connect方法
import { connect } from 'react-redux';
import {addPerson} from '../redux/actions/person'


export default connect(
	state =>({
		person:state.persons,
		count:state.number
	}),//映射状态

	//精简写法
	{addPerson}//映射操作状态的方法
)(Person)
