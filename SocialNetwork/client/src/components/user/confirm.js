import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Avatar,Button,message  } from 'antd';

import store from '../store'
import {connect} from 'react-redux'
import {loadUser,loadFriends} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class confirm extends Component{
    componentDidMount(){
        this.props.loadUser()
        this.props.loadFriends()
    }
    
    render(){
        function consultAction(e) {
            e.preventDefault();
             console.log('participa'+e.target.name)
             //fazer o pedido para dar update dos friends de unconfirmed para confirmed
             axios.post('http://localhost:3011/api/user/confirm/'+store.getState().token.user.username+'/'+e.target.name) 
             .then(res=>{
             console.log("amizade confirmada"+res.data)
             message.success('Amizade confirmada');
         })
         .catch(err=>{console.log(err)})
        }

        const friends = this.props.friends.map((friend)=>(
            <div>
               <Avatar size={160} src={friend.photo} />
               <h1>{friend} </h1>
               <Button  style={{marginLeft:'10vh'}}key="list-vertical-like-o" name={friend} onClick={consultAction}>
                Confirmar
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
    friends: state.token.user.unconfirmed,
});

export default connect(mapStateToProps,{loadUser,loadFriends})(confirm);