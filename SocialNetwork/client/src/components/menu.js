import React, { Component } from 'react';
import '../../node_modules/antd/dist/antd.css';
import '../view/register.css';
import { Layout, Menu, Icon } from 'antd';

import UserForm from './userForm';
import Login from './login';
import Feed from './feed';
import Logout from './logout';

import {Provider} from 'react-redux'
import store from './store'
import {Link, Switch,Route,NavLink} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
class menu extends Component() {
  render(){
      return (
     /** Criaçao da store que tem a arvore com todos os estados,
      *  tem de abarcar toda a route da store 
      * */
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Link to="/">
          <Icon type="user" />
          <span className="nav-text">Registo</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" >
          <Link to="/login">
          <Icon type="login" />
          <span className="nav-text">Login</span>
          </Link>
          </Menu.Item>
        {    
                localStorage.getItem('isAuthtenticated')?
                    ['a'].map((value)=>{
                    return (<Menu.Item key="3"><Link to="/perfil"><Icon type="profile" /><span className="nav-text">Perfil</span></Link></Menu.Item>)})
                :null   
        }
        {    
                localStorage.getItem('isAuthtenticated')?
                    ['a'].map((value)=>{
                    return (<Menu.Item key="4"><Link to="/logout"><Icon type="logout" /><span className="nav-text">Logout</span></Link></Menu.Item>)})
                :null   
        }
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200,minHeight:'100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}> 
            <Switch>
                <Route exact path="/" component={UserForm}>
                <UserForm />
                </Route>
                <Route path="/login" component={Login}>
                </Route>
                <Route exact path="/feed" component={Feed}>

                </Route>
                <Route exact path="/logout" component={Logout}>
                </Route>
              </Switch>
          </div>
      </Content>
      <Footer style={{ textAlign: 'center',alignSelf:'bottom',position:"flex" }}>REI ©2020 - A Rede de Engenharia Informática  </Footer>
    </Layout>
  </Layout>
     </header>
    </div>
    </Provider>
  );
}
}

export default menu;
