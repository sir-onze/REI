import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import '../../view/profile.css';
import { List, Avatar} from 'antd';

import store from '../store'
import {loadUser} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class list extends Component{
    componentDidMount(){
        store.dispatch(loadUser())
    }
    render(){
        const data = [
            {
              title: 'Email:',
              field: store.getState().token.user.email
            },
            {
              title: 'Password:',
              field: store.getState().token.user.password
            },
            {
              title: 'Username:',
              field: store.getState().token.user.username
            },
            {
              title: 'Idade:',
              field: store.getState().token.user.age
            },
            {
                title: 'Cargo:',
                field: store.getState().token.user.position
            },
            {
                title: 'Tipo de utilizador: (1 - Docente | 0 - Aluno)',
                field: store.getState().token.user.tipe
            },
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

export default list