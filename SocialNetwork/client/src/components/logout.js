import React,{ Component } from 'react';

import store from '../components/store'
import {logOut} from '../actions/tokenAction'

class logout extends Component{

componentDidMount(){
    store.dispatch(logOut())
  }
render(){
    return(
<h1>logout</h1>
    )}
}

export default logout;