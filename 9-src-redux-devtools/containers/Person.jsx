//引入核心react裤
import React, { Component } from 'react';
//引入connect方法
import { connect } from 'react-redux';
//引入person的action
import {addPerson} from '../redux/actions/person'
//引入uuid
import { v4 as uuidv4 } from 'uuid';
//Person的UI组件
class Person extends Component {
  add = ()=>{
    //1.获取用户的输入
    const {nameNode,ageNode} = this.refs

    if (!nameNode.value || !ageNode.value) {
      alert('输入不能为空')
      return
    }
    //2.加ren
    this.props.addPerson(
      {
       id:uuidv4(),
       name:nameNode.value,
       age:ageNode.value 
      }
    )
    //3.清空输入
    nameNode.value = '';
    ageNode.value = ''

  }

  render() {
    return (
      <div>
        <h1>当前总人数为:{this.props.person.length},上方组件的求和为:{this.props.count}</h1>
        <input type="text" placeholder='输入名字' ref='nameNode'/>
        <input type="text" placeholder='输入年龄' ref='ageNode'/>
        <button onClick={this.add}>添加</button>
        <ul>
          {
            this.props.person.map((personObj)=>{
            return <li key={personObj.id}>姓名:{personObj.name},年龄:{personObj.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

//暴露了Person的容器组件
export default connect(
	state =>({
		person:state.persons,
		count:state.number
	}),//映射状态

	//精简写法
	{addPerson}//映射操作状态的方法
)(Person)
