import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Avatar,Button,message } from 'antd';

import store from '../store'
import {connect} from 'react-redux'
import {loadUser,loadFriends,loadAllUsers} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class add extends Component{
    componentWillMount(){
        this.props.loadUser()
        this.props.loadFriends()
        this.props.loadAllUsers()
    }
    
    render(){
        function consultAction(e) {
            e.preventDefault();
            console.log(e.target.name)
             //fazer um post para a rota
             axios.post('http://localhost:3011/api/user/request/'+store.getState().token.user.username+'/'+e.target.name) 
             .then(res=>{
             console.log("amizade confirmada"+res.data)
             message.success("Pedido enviado")
         })
          }
        const friends = this.props.users.map((friend)=>(
            <div>
               <Avatar size={160} src={friend.photo} />
               <h1>{friend.username}</h1>
               <Button  style={{marginLeft:'10vh'}}key="list-vertical-like-o" name={friend.username} onClick={consultAction}>
                Adicionar
              </Button>
            </div>
        ))

        return(
            <div >
           {friends}
          </div>
        );
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user,
    friends: state.token.friends,
    users:state.token.all_users
});

export default connect(mapStateToProps,{loadUser,loadFriends,loadAllUsers})(add);