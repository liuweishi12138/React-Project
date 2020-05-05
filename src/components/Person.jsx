import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        <h1>当前总人数为:{this.props.person.length}</h1>
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

export default Person;