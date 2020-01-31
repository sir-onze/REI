import react, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import React from 'react';
import axios from "axios";
import {connect} from 'react-redux'

import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import 'antd/dist/antd.css';
import '../../view/register.css'; 

import store from '../store'
import {loadUser} from '../../actions/tokenAction'


class create extends Component{
    componentWillMount(){
            store.dispatch(loadUser())
        }

        constructor(props){
            super(props);
            this.onFileChange = this.onFileChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                profileImg: '',
                participation:[],
                tipe:'',
                owner: '',
                description: '',
                photo: '',
                UC:'',
                file:'',
                tittle:'',
                redirectTo:null  
            }
        }

        
/* Permite construir o user em json de maneira a ser 
 * aceite pelo server
 */

onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
}

postHandler = (e) => {
            this.setState({[e.target.name]:e.target.value})
}

// :tipe/:tittle/:owner/:date/:description/:uc 
onSubmit = (e) => {
   e.preventDefault();
    // enviar o pedido para a rota de update do backend
    const formData = new FormData()
    formData.append('photo', this.state.profileImg)
    axios.post('http://localhost:3011/api/events/'+this.state.tipe+'/'+this.state.tittle+'/'+store.getState().token.user.username+'/'+this.state.description+'/'+this.state.UC,formData) 
    .then(res=>{
        console.log("carreguei o ficheiro")
    })
    .catch(err=>{console.log(err)})
    console.log(this.state);
    message.success("Evento adicionado")
    window.location = 'http://localhost:4000/#/events'
    
}

render(){
    
    if (!this.props.user.username) {
        return <Redirect to='/login' />
      }
    else{
        this.state.owner=this.props.user.username
        const {tittle,UC,description,tipe} =this.state;
    return(
        <div style={{heigth :'100%'}}>
            <h1>Criar Evento</h1>
            <br/>
            <Form onSubmit={this.onSubmit} encType="multipart/form-data" className="login-form">
            <Form.Item>
                <label>Título</label>
                <Input
                    placeholder="Título"
                    name="tittle"
                    value={tittle} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Descrição</label>
                <Input
                    placeholder="Descrição"
                    name="description" 
                    value={description} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Unidade curricular</label>
                <Input
                    placeholder="UC"
                    name="UC" 
                    value={UC} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            <Form.Item>
                <label>Tipo</label>
                <Input
                    placeholder="Tipo"
                    name="tipe" 
                    value={tipe} 
                    onChange={this.postHandler}
                    required={false}
                />
            </Form.Item>
            
            <Form.Item>
                    <Input
                    type="file"
                    name="file"
                    onChange={this.onFileChange}
                    required={true}
                        />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="login-form-button">
                    Criar Evento
                </button>
            </Form.Item>
          </Form>
        </div>
        );
}
}
}
const mapStateToProps = state =>({
    user: state.token.user
  });
  
export default connect(mapStateToProps,{loadUser})(create);

