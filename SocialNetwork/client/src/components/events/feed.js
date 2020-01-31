import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from "axios";

/** Imports para o antd */
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Button,message } from 'antd';

/** Imports para actions e reducers  */

import {fetchEvents} from '../../actions/eventAction'

import store from '../../components/store'
import {loadUser} from '../../actions/tokenAction'


class feed extends Component{
     /**Antes de carregar o componente */
     componentWillMount(){
        store.dispatch(fetchEvents())
        store.dispatch(loadUser())

    }
    
  
render(){
    function participateAction(e) {
       e.preventDefault();
        console.log('participa'+e.target.name)
        /** Fazer update na base de dados do evento, adicionando o username
         * aos participantes
         */
      axios.post("http://localhost:3011/api/events/"+e.target.name+"/participate/"+store.getState().token.user.username)
        .then(console.log("particiope"))
        .catch(e);
        message.success("Participação adicionada")
     }
     function consultAction  (e) {
        e.preventDefault();
        console.log('consulta')
        console.log(e.target.name)
        // guardar o id do evento na local storage para depois ser usado no reducer
        localStorage.setItem('event',e.target.name)
        window.location = 'http://localhost:4000/#/eventConsult'
        
     }

     function atacheAction  (e) {
        e.preventDefault();
        console.log('anexo'+e.target.name)
     }

     function createAction (e) {
       e.preventDefault();
       window.location = 'http://localhost:4000/#/eventCreate'
     }
    const listData = [];
    /** Vamos mostrar o numero de paginas necessário tendo em conta o 
     * número de eventos registados na base de dados
     */
    
    for (let i = 0; i < this.props.events.length; i++) {
        console.log("Listaa"+i+" "+store.getState().events.events[i].tittle)
      listData.push({
        title: store.getState().events.events[i].tittle,
        avatar: store.getState().events.events[i].owner,
        description: 'Tipo:'+store.getState().events.events[i].tipe,
        content: store.getState().events.events[i].description,
        photo: store.getState().events.events[i].photo,
        id:store.getState().events.events[i]._id
      });
    }
    

    return(
    <div>
      <Button onClick={createAction} style={{marginBottom:'5vh'}}>
      Criar Evento
      </Button>
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
              <Button  key="list-vertical-like-o" name={item.id} onClick={participateAction}>
                Participar
              </Button>
              </Link>,
              /** cada botao vai ter no seu nome o id do post para podermos
               * saber que post estamos a tratar
              */
              <Button  name={item.id} onClick={consultAction}>
              Consultar
             </Button>
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
              avatar={item.owner}
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
  user: state.token.token.user
});

export default connect(mapStateToProps,{fetchEvents,loadUser})(feed);


