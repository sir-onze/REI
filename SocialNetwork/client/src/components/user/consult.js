import React,{ Component } from 'react';
import {connect} from 'react-redux'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { List, Avatar} from 'antd';

import store from '../store'
import {loadFriends} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class consult extends Component{
    componentWillMount(){
        //store.dispatch(fetchOneEvent())
        //console.log("store"+localStorage.getItem('current_friend'))
    }
    
    render(){
        var friends = this.props.friends.filter(element => element.username ==localStorage.getItem('current_friend'))
        var friend= friends[0]
        console.log(friend)
        const data = [
             {
                title: 'Email',
                field: friend.email
            },
            {
              title: 'Username:',
              field: friend.username
            },
            {
              title: 'Idade:',
              field: friend.age
            },
            {
              title: 'Posição:',
              field: friend.position
            },
            {
              title: 'CV:',
              field: friend.cv
            },
            {
                title: 'Telemóvel:',
                field: friend.phone
            },
            {
                title: 'Sobre',
                field: friend.about
            },
            {
                title: 'Tipo',
                field: friend.tipe
            }

          ];
        return(
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.field}    
                />
              </List.Item>
            )}
          />
            
        );
            
    }
}

// Constante para ir buscar a store tudo o que eu quero para este componente
const mapStateToProps = state =>({
    events: state.events.current,
    friends: state.token.friends
  });
  
export default connect(mapStateToProps,{loadFriends})(consult);