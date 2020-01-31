import react, { Component } from 'react';
import React from 'react';
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../view/register.css'; 
import { Redirect } from 'react-router-dom';

class userForm extends Component{
        constructor(props){
            super(props);

            this.state = {
                username:'',
                password:'',
                age:'',
                position:'',
                tipe:'',
                email:'',
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
    axios.post('http://localhost:3011/api/user/register',this.state)
         .then(res=>{
             console.log(res)
         })
         .catch(err=>{console.log(err)})
    console.log(this.state);
    this.setState({
        redirectTo: 'true'
      })
      
}

render(){
    const {username,password,age,position,tipe,email} =this.state;
    if (this.state.redirectTo) {
        return <Redirect to='/login' />
      }
    else{
    return(
        <div style={{heigth :'100%'}}>
            <h1>Registar Novo Utilizador</h1>
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
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    name="username"
                    value={username} 
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
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Cargo"
                    name="position"
                    value={position} 
                    onChange={this.postHandler}
                    required={true}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Tipo de utilizador"
                    name="tipe"
                    value={tipe} 
                    onChange={this.postHandler}
                    required={true}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Idade"
                    name="age"
                    value={age} 
                    onChange={this.postHandler}
                    required={true}
                />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="login-form-button">
                    Register
                </button>
            </Form.Item>
          </Form>
          </div>
        );
}
}
}

export default userForm; 