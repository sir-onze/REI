import react, { Component } from 'react';
import React from 'react';
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../view/register.css'; 
import store from '../components/store'
import {loadUser} from '../actions/tokenAction'
import { Redirect } from 'react-router-dom';

class login extends Component{
        constructor(props){
            super(props);

            this.state = {
                
                email:'',
                password:'',
                redirectTo:null
                
            }
        }


/* Permite construir o user em json de maneira a ser 
 * aceite pelo server
 */


postHandler = (e) => {
            this.setState({[e.target.name]:e.target.value})
}

submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3011/api/user/login',this.state) 
         .then(res=>{
             console.log("tou no inicio do login"+res.body)
             if(res.data!='email ou password errada'){
              console.log("Login com sucesso")
              console.log("token" + res.data)
              localStorage.setItem('token',res.data)
              localStorage.setItem('mail',this.state.email)
              this.setState({
                redirectTo: true
              })
             }
             else{
               console.log('Erro')
               window.location = 'http://localhost:4000/#/login'
             }
         })
         .catch(err=>{console.log(err)})
    console.log(this.state);
    
}

render(){
    const {email,password} =this.state;
    if (this.state.redirectTo) {
        return <Redirect to='/feed' />
      }
    else{
    return(
        <div style={{heigth :'100%'}}>
            <h1>Login de Utilizador</h1>
            <br/>
            <Form onSubmit={this.submitHandler} className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                    name="email"
                    value={email} 
                    onChange={this.postHandler}
                    required={true}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    name="password" 
                    value={password} 
                    onChange={this.postHandler}
                    required={true}
                />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="login-form-button" onClick="location.reload()">
                    Login
                </button>
            </Form.Item>
          </Form>
          </div>
        );
}
}
}

export default login; 