import React, { Component } from 'react'
import Admin from './containers/Admin/admin'
import Login from '@/containers/Login/login'
import {Switch,Route,Redirect} from 'react-router-dom'







export default class App extends Component {
  render() {
    return (
     
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Redirect to="login"/>
        </Switch>
   
      
    )
  }
}
