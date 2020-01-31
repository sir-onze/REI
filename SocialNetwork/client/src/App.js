import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/antd/dist/antd.css';
import './view/register.css';
import { Layout, Menu, Icon } from 'antd';

import Register from './components/register';
import UserForm from './components/userForm';
import Login from './components/login';
import Feed from './components/feed';
import Album from './components/album/album';
import FeedAlbum from './components/album/feed';
import Logout from './components/logout';
import Consultpost from './components/consult';

import Event from './components/events/feed';
import ConsultEvent from './components/events/consult';
import CreateEvent from './components/events/create';

import MyEvent from './components/user/events';
import MyPosts from './components/user/feedPosts';
import MyParticipates from './components/user/participate';
import MyAlbuns from './components/user/albuns';
import Profile from './components/user/profile';
import ediProfile from './components/user/editProfile';
import Myfriends from  './components/user/friends';
import Consultfriends from  './components/user/consult';
import Addfriends from  './components/user/add';
import Confirmfriends from  './components/user/confirm';

import Consultalbum from  './components/album/album';
import {Link, Switch,Route} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  
render(){

  /** Caso o utilizador esteja autenticado */
  if(localStorage.getItem('mail')!=null){
    return (
     /** Criaçao da store que tem a arvore com todos os estados,
      *  tem de abarcar toda a route da store 
      * */
  
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
       <Menu.Item key="1" disabled='true'>
         <Link to="/">
         <Icon type="user" />
         <span className="nav-text">Registo</span>
         </Link>
       </Menu.Item>
       <Menu.Item key="2" disabled='true'>
         <Link to="/login">
         <Icon type="login" />
         <span className="nav-text">Login</span>
         </Link>
         </Menu.Item>
       <Menu.Item key="3">
         <Link to="/profile">
           <Icon type="profile" />
           <span className="nav-text">Perfil</span>
           </Link>
       </Menu.Item>
       <Menu.Item key="8">
         <Link to="/add">
           <Icon type="profile" />
           <span className="nav-text">Amigos</span>
        </Link>
        </Menu.Item>
       <Menu.Item key="4">
         <Link to="/feed">
           <Icon type="layout" />
           <span className="nav-text">Feed</span>
        </Link>
        </Menu.Item>
        <Menu.Item key="5">
         <Link to="/events">
           <Icon type="layout" />
           <span className="nav-text">Eventos</span>
        </Link>
        </Menu.Item>
        <Menu.Item key="6">
         <Link to="/albuns">
           <Icon type="layout" />
           <span className="nav-text">Albuns</span>
        </Link>
        </Menu.Item>
       <Menu.Item key="7">
         <Link to="/logout">
           <Icon type="logout" />
           <span className="nav-text">Logout</span>
        </Link>
        </Menu.Item>
               
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
               <Route path="/login"  component={Login}>
               </Route>
               <Route exact path="/feed" component={Feed}>
               </Route>
               <Route exact path="/logout" component={Logout}>
               </Route>
               <Route exact path="/profile" component={Profile}>
               </Route>
               <Route exact path="/editprofile" component={ediProfile}>
               </Route>
               <Route exact path="/events" component={Event}>
               </Route>
               <Route exact path="/eventConsult" component={ConsultEvent}>
               </Route>
               <Route exact path="/eventCreate" component={CreateEvent}>
               </Route>
               <Route exact path="/myevents" component={MyEvent}>
               </Route>
               <Route exact path="/myposts" component={MyPosts}>
               </Route>
               <Route exact path="/myparticipations" component={MyParticipates}>
               </Route>
               <Route exact path="/myalbuns" component={MyAlbuns}>
               </Route>
               <Route exact path="/consultalbuns" component={Album}>
               </Route>
               <Route exact path="/albuns" component={FeedAlbum}>
               </Route>
               <Route exact path="/friends" component={Myfriends}>
               </Route>
               <Route exact path="/consultfriend" component={Consultfriends}>
               </Route>
               <Route exact path="/add" component={Addfriends}>
               </Route>
               <Route exact path="/confirm" component={Confirmfriends}>
               </Route>
               <Route exact path="/consultpost" component={Consultpost}>
               </Route>
               <Route exact path="/consultalbum" component={Consultalbum}>
               </Route>
             </Switch>
         </div>
     </Content>
     <Footer style={{ textAlign: 'center',alignSelf:'bottom',position:"flex" }}>REI ©2020 - A Rede de Engenharia Informática  </Footer>
   </Layout>
 </Layout>
    </header>
   </div> 

  );
}
else{
  return(
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
        <Menu.Item key="3">
          <Link to="/register">
          <Icon type="user" />
          <span className="nav-text">Registo por ficheiro</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={this.handleClick} >
          <Link to="/login">
          <Icon type="login" />
          <span className="nav-text">Login</span>
          </Link>
          </Menu.Item>
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
                <Route path="/login"  component={Login}>
                </Route>
                <Route exact path="/register" component={Register}>
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
    </div> )
}}
}

export default App;
