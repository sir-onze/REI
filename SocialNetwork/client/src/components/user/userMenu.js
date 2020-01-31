import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Button } from 'antd';

import {connect} from 'react-redux'
import {loadUser} from '../../actions/tokenAction'

/** Falta adicionar os links !!!! para os diferentes feeds */
class userMenu extends Component{
    componentDidMount(){
        this.props.loadUser()
    }
    render(){
        return(
            <div style={{ background: '#002147', padding: '26px 16px 16px',borderRadius: '30px' }}>
                <Link to="/myposts">
                <Button ghost>
                Posts
                </Button>
                </Link>
                <Link to="/myevents">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Eventos
                </Button>
                </Link>
                <Link to="/myalbuns">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Albuns
                </Button>
                </Link>
                <Link to="/myparticipations">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Participações
                </Button>
                </Link>
                <Link to="/editprofile">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Editar Perfil
                </Button>
                </Link>
                <Link to="/friends">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Amigos
                </Button>
                </Link>
                <Link to="/confirm">
                <Button style ={{marginLeft:'5vh'}} ghost>
                Pedidos de amizade
                </Button>
                </Link>
          </div>
        );
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user
});

export default connect(mapStateToProps,{loadUser})(userMenu);