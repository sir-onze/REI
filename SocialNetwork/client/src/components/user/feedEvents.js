import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from "axios";

/** Imports para o antd */
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Button } from 'antd';

/** Imports para actions e reducers  */

import store from '../../components/store'
import {fetchEvents} from '../../actions/eventAction'
import {loadUser} from '../../actions/tokenAction'
import {fetchMyEvents} from '../../actions/eventAction'


class feedEvents extends Component{
     /**Antes de carregar o componente */
     componentWillMount(){
        this.props.fetchEvents()
        this.props.loadUser()
        this.props.fetchMyEvents()
    }
    
  
render(){
    function deleteAction(e) {
       e.preventDefault();
        console.log('participa'+e.target.name)
        /** Eliminar da base de dados o evento 
         */
      axios.delete("http://localhost:3011/api/events/"+e.target.name)
        .then(console.log("particiope"))
        .catch(e);

     }
    
    const listData = [];
    /** Vamos mostrar o numero de paginas necessário tendo em conta o 
     * número de eventos registados na base de dados
     */
    
    for (let i = 0; i < this.props.myevents.length; i++) {

      listData.push({
        title: store.getState().events.myevents[i].tittle,
        avatar: store.getState().events.myevents[i].owner,
        description: 'Tipo:'+store.getState().events.myevents[i].tipe,
        content: store.getState().events.myevents[i].description,
        photo: store.getState().events.myevents[i].photo,
        id:store.getState().events.myevents[i]._id
      });
    }
    

    return(
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
        <List.Item
            key={item.title}
            actions={[
              <Link to="/feed">
              <Button  style={{marginLeft:'10vh'}}key="list-vertical-like-o" name={item.id} onClick={deleteAction}>
                Eliminar
              </Button>
              </Link>
            ]}
            extra={
              <img
                width={272}
                alt="photo"
                src={item.photo}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            
        </List.Item>
        )}
      />
  </div>
        )
    }
}

// Constante para ir buscar a store tudo o que eu quero para este componente
const mapStateToProps = state =>({
  events: state.events.events,
  user: state.token.token.user,
  myevents: state.events.myevents
});

export default connect(mapStateToProps,{fetchEvents,loadUser,fetchMyEvents})(feedEvents);


