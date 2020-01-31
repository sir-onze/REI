import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import '../view/profile.css';
import { Avatar,Form,Input,message } from 'antd';

import axios from 'axios'


class register extends Component{
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            profileImg: ''
        }
    }
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }
    onSubmit = (e) => {
        e.preventDefault();
         // enviar o pedido para a rota de update do backend
         const formData = new FormData()
         formData.append('photo', this.state.profileImg)
         axios.post('http://localhost:3011/api/user/grammar',formData) 
              .then(res=>{
                  console.log("carreguei o ficheiro")
              })
              .catch(err=>{console.log(err)})
         console.log(this.state);
         message.success("Utilizador registado")
     }

    render(){
        return(
            <div>
                <div style ={{marginBottom:'5vh'}}>
                
                <Form onSubmit={this.onSubmit} encType="multipart/form-data" className="login-form">
                    <Form.Item>
                        <Input
                    type="file"
                    name="file"
                    onChange={this.onFileChange}
                    required={true}
                        />
                    </Form.Item>
                    <button type="submit">Upload</button>
                </Form>
                <h1>Exemplo de ficheiro</h1>
                import user:cenas email:xpath username:onze password:teste tipo:one.end import
                </div>
            </div>
        );
    }
}



export default register;