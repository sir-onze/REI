import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from "axios";

/** Imports para o antd */
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Button } from 'antd';

/** Imports para actions e reducers  */

import {fetchAlbuns} from '../../actions/albumAction'

import store from '../../components/store'


class feed extends Component{
     /**Antes de carregar o componente */
     componentDidMount(){
        this.props.fetchAlbuns()

    }
    
  
render(){
     function consultAction  (e) {
        e.preventDefault();
        console.log('consulta')
        console.log(e.target.name)
        // guardar o id do evento na local storage para depois ser usado no reducer
        localStorage.setItem('event',e.target.name)
        window.location = 'http://localhost:4000/#/consultalbum'
        
     }

     function createAction (e) {
       e.preventDefault();
       window.location = 'http://localhost:4000/#/eventCreate'
     }
    const listData = [];
    /** Vamos mostrar o numero de paginas necessário tendo em conta o 
     * número de eventos registados na base de dados
     */
    
    for (let i = 0; i < this.props.albuns.length; i++) {
      listData.push({
        title: store.getState().albuns.albums[i].tittle,
        avatar: store.getState().albuns.albums[i].owner,
        description: 'Tipo:'+store.getState().albuns.albums[i].tipe,
        content: store.getState().albuns.albums[i].description,
        photo: store.getState().albuns.albums[i].photo,
        id:store.getState().albuns.albums[i]._id
      });
    }
    

    return(
    <div>
      <Button onClick={createAction} style={{marginBottom:'5vh'}}>
      Criar Album
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
  albuns: state.albuns.albums,
  user: state.token.token.user
});

export default connect(mapStateToProps,{fetchAlbuns})(feed);


