import React, { Component } from 'react'
import {connect} from 'react-redux'
import  Check  from '@/containers/HOC/Check'
import { Layout } from 'antd';
import Header from './Header/Header'

import './css/admin.less'
const { Footer, Sider, Content } = Layout;



  @connect( state =>({
    isLogin: state.userInfo.isLogin
  }),//.映射状态
  {} //映射操作状态的方法)
)
  @Check
 class Admin extends Component {
  render() {
    return (
      <Layout className="admin-container">
      <Sider>Sider</Sider>
      <Layout>
        <Header/>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}

export default Admin 