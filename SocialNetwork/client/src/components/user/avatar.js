import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Avatar,Form,Input,message  } from 'antd';

import axios from 'axios'

import {connect} from 'react-redux'
import store from '../../components/store'
import {loadUser} from '../../actions/tokenAction'

class avatar extends Component{
    componentDidMount(){
        this.props.loadUser()
    }
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
         axios.post('http://localhost:3011/api/user/pictures/'+store.getState().token.email,formData) 
              .then(res=>{
                  console.log("carreguei o ficheiro")
              })
              .catch(err=>{console.log(err)})
         console.log(this.state);
         message.success('Foto alterada');
        
     }

     
    
    

    render(){
        return(
            <div>
                <div style ={{marginBottom:'5vh'}}>
                
                <Avatar size={160} src={store.getState().token.user.photo} />
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
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user
});

export default connect(mapStateToProps,{loadUser})(avatar);