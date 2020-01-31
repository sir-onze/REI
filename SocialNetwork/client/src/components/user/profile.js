import React,{ Component } from 'react';

import Avatar from './avatar'
import Menu from './userMenu'
import Infos from './userInfo'

import {connect} from 'react-redux'
import store from '../store'
import {loadUser} from '../../actions/tokenAction'

class profile extends Component{
    componentWillMount(){
        this.props.loadUser()
    }
    render(){
        if(store.getState().token.email!=null){
        const username = store.getState().token.user.username
        
            return(
                <div>
                    <h1>{username}</h1>
                    <Avatar></Avatar>
                    <Menu></Menu>
                    <Infos></Infos>
                </div>
            );
        }
        else{
            return(
            <h1>Efetue login</h1>)
        }
        
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user
});

export default connect(mapStateToProps,{loadUser})(profile);