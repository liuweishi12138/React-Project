import React, { Component } from 'react'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png';
import './css/login.less';
import {reqLogin} from '@/api';

export default class Login extends Component {
  //表单提交且验证通过的回调
    onFinish = async values => {
      let result = await reqLogin(values) //获取请求结果
      const {status,data,msg }= result//获取请求结果中的：status,data,msg
      if (status ===0) {
        message.success('登陆成功!',1)//提示
        this.props.history.replace('/admin')//跳转页面

      }else{
        message.error(msg)
      }
    };
    //密码的验证器（自定义校验）
    pwdValidator = (_,value='')=>{
      let errMessage = []
      if (!value.trim()) return Promise.reject('密码必须输入！')
      if (value.length < 4) errMessage.push('密码必须大于等于4位！')
      if (value.length > 12) errMessage.push('密码必须小于等于12位')
      if (!(/^\w+$/).test(value)) errMessage.push('密码必须是英文、数字、下划线组成')
      if(errMessage.length !==0) return Promise.reject(errMessage)
      else return Promise.resolve()
    }
    render() {
      return (
        <div className="login">
          <header>
            <img src={logo} alt="logo"/>
            <h1>商品管理系统</h1>
          </header>
          <section>
            <span className='title'>用户登录</span>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}//表单提交的回调
            >
              <Form.Item
              name='username'
              rules={[
                {required:true,message:"用户名必须输入"},
                {min:4,message:"用户名必须大于4位"},//必填
                {max:12,message:"用户名必须小于12位"},
                {pattern:/^\w+$/,message:'用户名必须是英文、数字、下划线组成！'},
                
  
              ]}
              >
                <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="用户名"
               />
              </Form.Item>
              <Form.Item 
              name="password"
              rules={[
                {validator:this.pwdValidator}
              ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>                 
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
  
  
          </section>
        </div>
      )
    }
  }



