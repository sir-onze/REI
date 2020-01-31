import react, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import React from 'react';
import axios from "axios";

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../../view/register.css'; 

import store from '../store'
import {loadUser} from '../../actions/tokenAction'


class editProfile extends Component{
    componentWillMount(){
            store.dispatch(loadUser())
        }
        constructor(props){
            super(props);

            this.state = {
                
                email:store.getState().token.user.email,
                password:store.getState().token.user.password,
                username:store.getState().token.user.username,
                age: store.getState().token.user.age,
                position: store.getState().token.user.position,
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
    // enviar o pedido para a rota de update do backend
    axios.post('http://localhost:3011/api/user/edit/'+store.getState().token.user.email,this.state) 
         .then(res=>{
             console.log("tou no inicio do login"+res.body)
             if(res.data){
              console.log("Login com sucesso")
              console.log("token" + res.data)
              this.setState({
                redirectTo: true
              })
             }
             else{
               console.log('Erro')
             }
         })
         .catch(err=>{console.log(err)})
    console.log(this.state);
    store.dispatch(loadUser())
    
}

render(){
    
    if (localStorage.getItem('mail')==null) {
        return <Redirect to='/' />
      }
    else{
        const {email,password,age,position,username} =this.state;
    return(
        <div style={{heigth :'100%'}}>
            <h1>Editar o perfil</h1>
            <br/>
            <Form onSubmit={this.submitHandler} className="login-form">
            <Form.Item>
                <label>Email</label>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="email"
                    name="email"
                    value={email} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Password</label>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    name="password" 
                    value={password} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Username</label>
                <Input
                    placeholder="username"
                    name="username" 
                    value={username} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Idade</label>
                <Input
                    placeholder="idade"
                    name="age" 
                    value={age} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Cargo</label>
                <Input
                    placeholder="cargo"
                    name="position" 
                    value={position} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="login-form-button">
                    Efetuar alterações
                </button>
            </Form.Item>
          </Form>
          </div>
        );
}
}
}

export default editProfile; 