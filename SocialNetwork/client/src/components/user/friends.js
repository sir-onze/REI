import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Avatar,Button } from 'antd';

import store from '../store'
import {connect} from 'react-redux'
import {loadUser,loadFriends} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class userMenu extends Component{
    componentDidMount(){
        this.props.loadUser()
        this.props.loadFriends()
    }
    
    render(){
        function consultAction(e) {
            e.preventDefault();
             console.log('participa'+e.target.name)
             localStorage.setItem('current_friend',e.target.name)
             window.location = 'http://localhost:4000/#/consultfriend'
          }
        const friends = this.props.friends.map((friend)=>(
            <div>
               <Avatar size={160} src={friend.photo} />
               <h1>{friend.username}</h1>
               <Button  style={{marginLeft:'0',marginTop:'5vh'}}key="list-vertical-like-o" name={friend.username} onClick={consultAction}>
                Consultar
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
});

export default connect(mapStateToProps,{loadUser,loadFriends})(userMenu);