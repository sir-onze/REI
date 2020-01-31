import React,{ Component } from 'react';
/** Imports para o antd */
import 'antd/dist/antd.css';
import { Card,Input,Button,Icon,Upload,message,Comment,Avatar,Tooltip,Form} from 'antd';
import axios from 'axios'

/** Imports para actions e reducers  */
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

import store from '../components/store'
import {loadUser,loadFriends,loadAllUsers} from '../actions/tokenAction'
import FormItem from 'antd/lib/form/FormItem';

const { Search } = Input;

const { Meta } = Card;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class feed extends Component{
    
     /**Antes de carregar o componente */
     componentWillMount(){
       this.props.fetchPosts();
       this.props.loadUser();
      sleep(200).then(() => this.props.loadAllUsers());
      sleep(2000).then(() =>this.props.loadFriends());
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            // se tiver um novo post mete o no inicio da lista
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    /** Estado do componente necessário para os likes e comments */
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            profileImg: '',
            title:'',
            owner:'',
            content:'',
            classification:'',
            hashlist:[],
            hashitem:''
        }
    }

    
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }
///:title/:owner/:content/:classification
    onSubmit = (e) => {
        e.preventDefault();
         // enviar o pedido para a rota de update do backend
         const formData = new FormData()
         formData.append('photo', this.state.profileImg)
         formData.append('title', this.state.title)
         formData.append('owner', store.getState().token.user.username)
         formData.append('content', this.state.content)
         formData.append('classification', this.state.classification)
         axios.post('http://localhost:3011/api/posts',formData) 
              .then(res=>{
                  console.log("carreguei o ficheiro")
              })
              .catch(err=>{console.log(err)})
         console.log(this.state);
         message.success('Post adicionado');
     }
    
     

   /** Ação que permite mostrar a caixa para comentários */
   handleComments(){
       if (this.state.comments) {
        this.setState({
            comments:false
        })
       }
       else{
        this.setState({
            comments:true
        })
       }
      }
      postHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
}
    taghandler=(e)=>{
        //console.log(e.target.name)
        this.state.hashlist.push(e.target.name)
        console.log(this.state.hashlist)
    }
      
render(){
    function handleConsult(e){
        console.log(e.target.name)
        localStorage.setItem('current_post',e.target.name)
        console.log(localStorage.getItem('current_post'))
        window.location = 'http://localhost:4000/#/consultpost'
    }
    function handleLike(e){
        console.log(e.target.name)
        axios.post('http://localhost:3011/api/posts/like/'+e.target.name) 
        .then(res=>{
            console.log("carreguei o ficheiro")
            message.success('Like adicionado');
        })
        .catch(err=>{console.log(err)})
        
     }
    
    const {title,
    owner,
    content,
    classification,
    hashlist,
    hashitem} =this.state;

    /** Definição dos posts*/
    const posts = this.props.posts.map(post =>(
        <div 
        style={{ position:"relative",
        align:"center",
        justifyContent: "center",
        alignItems: "center",
        display:"flex",}}>
            <table>
                <tr>
                    <Card
                        style={{ width: 400,position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop:"10vh"
                    }}
                        cover={
                        <img
                            src={post.image}
                        />
                        }
                        actions={[
                        <div style={{width:'25vh'}}><Button name={post._id}style={{marginLeft:'8vh'}}type="primary" icon="like" onClick={handleLike} /> {post.likes}</div>,
                        <div style={{width:'25vh'}}><Button name={post._id}type="primary" icon="link" onClick={handleConsult} /></div>,
                ,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src={post.ownerPhoto} style={{width: '64px', height: '61px'}} />}
                        title= {<div>
                                <p>{post.title}</p>
                                </div>}
                        description={<div>
                                        <p>{"#"+post.classification}</p>
                                        <p>{post.content}</p>
                                    </div>}
                        />
                    </Card>
                </tr>
                  
            </table> 
        </div>
    ))

    return(
        
        <div>
            <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
    />
            <div>
                <Form onSubmit={this.onSubmit} 
                encType="multipart/form-data" 
                className="login-form"
                style={{marginLeft:'23vw'}}>
                    <FormItem>
                    <div>
                        <Input name="title"
                        onChange={this.postHandler}
                        value={title} 
                        style={{ position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'5vh',
                        width:'60vh'
                        }} placeholder="Title" 
                         />
                    </div>
                    </FormItem>
                    <FormItem>
                    <div>
                        <Input 
                        name="content"
                        onChange={this.postHandler}
                        value={content}
                        style={{ position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'10vh',
                        width:'60vh',
                        
                        }} placeholder="Queres partilhar com a comunidade?" />
                    </div>
                    </FormItem>
                    <FormItem>
                    <div>
                        <Input name="classification"
                        onChange={this.postHandler}
                        value={classification} 
                        style={{ position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'5vh',
                        width:'60vh'
                        }} placeholder="Classificação" 
                         />
                    </div>
                    </FormItem>
                    <FormItem>
                    <div>
                        <Input name="hashitem"
                        onChange={this.postHandler}
                        value={hashitem} 
                        style={{ position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'5vh',
                        width:'60vh'
                        }} placeholder="Tag" 
                         />
                    </div>
                    </FormItem>
    
                    <Form.Item >
                        <Input
                    type="file"
                    name="file"
                    onChange={this.onFileChange}
                    required={true}
                    style={{marginLeft:'8vw'}}
                        />
                    </Form.Item>
                    <button type="submit" style={{marginLeft:'15vw'}}>Upload</button>
                </Form>
                <button name ={hashitem} onClick={this.taghandler} style={{marginLeft:'2vw'}}>Adicionar tag</button>
            </div>
                {posts}
            </div>
        )
    }
}


// Constante para ir buscar a store tudo o que eu quero para este componente
const mapStateToProps = state =>({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps,{fetchPosts,loadUser,loadFriends,loadAllUsers})(feed);

/**
 * {    
                this.state.comments?
                    post.comments.map((value)=>{
                    return (
                        <Card style={{width:'50vh'}}>
                        <Comment
                        author={<a>Han Solo</a>}
                        avatar={
                          <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                          />
                        }
                        content={
                          <p>
                            {value}
                          </p>
                        }
                        datetime={
                          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                          </Tooltip>
                        }
                      />
                      </Card>
                    )})
                :null   
                }
 */