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
import {fetchMyParticipations} from '../../actions/eventAction'
import {loadUser} from '../../actions/tokenAction'


class feedParticipate extends Component{
     /**Antes de carregar o componente */
     componentWillMount(){
        this.props.loadUser()
        this.props.fetchMyParticipations()
        console.log("feed")
    }
    
  // tenho de criar uma action so para ir buscar os posts do user que está loggado
render(){
    function deleteAction(e) {
       e.preventDefault();
        console.log(+e.target.name)
        /** Eliminar da base de dados o evento 
         */
      axios.delete("http://localhost:3011/api/events/participate/"+e.target.name+"/"+store.getState().token.user.username)
        .then(console.log("particiope"))
        .catch(e);

     }
    
    const listData = [];
    /** Vamos mostrar o numero de paginas necessário tendo em conta o 
     * número de eventos registados na base de dados
     */
    
    for (let i = 0; i < this.props.participations.length; i++) {
      listData.push({
        title: this.props.participations[i].tittle,
        avatar: this.props.participations[i].owner,
        description: this.props.participations[i].tipe,
        content: this.props.participations[i].description,
        photo: this.props.participations[i].photo,
        id:this.props.participations[i]._id
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
  participations: state.events.myparticipations
});

export default connect(mapStateToProps,{fetchEvents,loadUser,fetchMyParticipations})(feedParticipate);


