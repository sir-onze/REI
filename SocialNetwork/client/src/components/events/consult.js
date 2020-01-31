import React,{ Component } from 'react';
import {connect} from 'react-redux'

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { List, Avatar} from 'antd';

import store from '../store'
import {fetchOneEvent} from '../../actions/eventAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class consult extends Component{
    componentWillMount(){
        store.dispatch(fetchOneEvent())
    }
   
    render(){
        
        const data = [
             {
                title: 'Título',
                field: this.props.events.tittle
            },
            {
              title: 'Criador:',
              field: this.props.events.owner
            },
            {
              title: 'Tipo:',
              field: this.props.events.tipe
            },
            {
              title: 'Descrição:',
              field: this.props.events.description
            },
            {
              title: 'Unidade Curricular associada:',
              field: this.props.events.UC
            },
            {
                title: 'Data:',
                field: this.props.events.date
            },
            {
                title: 'Participantes',
                field: this.props.events.participation+','
            },
            {
              title: 'Anexo',
              field:  <a href={this.props.events.file} download>Descarregar Anexo</a>
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
    events: state.events.current
  });
  
export default connect(mapStateToProps,{fetchOneEvent})(consult);