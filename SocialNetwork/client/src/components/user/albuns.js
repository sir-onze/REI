import React,{ Component } from 'react';
import {connect} from 'react-redux'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Avatar,Form,Input } from 'antd';

import axios from 'axios'

import store from '../../components/store'
import {loadUser} from '../../actions/tokenAction'
import {fetchPosts} from '../../actions/postActions'

class albuns extends Component{
    componentDidMount(){
        this.props.loadUser()
        this.props.fetchPosts()
    }
    
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            profileImg: ''
        }
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
        this.forceUpdate()
         console.log(this.state);
     }

     
    
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    render(){
        const username = this.props.user.username
        return(
            
            <div>
                <div style ={{marginBottom:'5vh'}}>
                <h1>{username}</h1>
                <Avatar size={160} src={this.props.user.photo} />
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user
});

export default connect(mapStateToProps,{fetchPosts,loadUser})(albuns);