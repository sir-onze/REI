import React,{ Component } from 'react';
/** Imports para o antd */
import 'antd/dist/antd.css';
import { Card,Input,Button,Icon,Upload,message,Comment,Avatar,Tooltip,Form} from 'antd';
import axios from 'axios'

/** Imports para actions e reducers  */
import {connect} from 'react-redux'
import {fetchMyPosts} from '../../actions/postActions'

import store from '../../components/store'
import {loadUser,loadFriends,loadAllUsers} from '../../actions/tokenAction'
import FormItem from 'antd/lib/form/FormItem';



const { Meta } = Card;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class feedPosts extends Component{
    
     /**Antes de carregar o componente */
     componentWillMount(){
       this.props.fetchMyPosts();
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
            classification:''
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
         axios.post('http://localhost:3011/api/posts/'+this.state.title+'/'+store.getState().token.user.username+'/'+this.state.content+'/'+this.state.classification,formData) 
              .then(res=>{
                  console.log("carreguei o ficheiro")
              })
              .catch(err=>{console.log(err)})
         console.log(this.state);
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
      
render(){
    function handleConsult(e){
        console.log(e.target.name)
        localStorage.setItem('current_post',e.target.name)
        console.log(localStorage.getItem('current_post'))
        window.location = 'http://localhost:4000/#/consultpost'
    }
    function handleDelete(e){
        console.log("target"+e.target.name)
        axios.delete('http://localhost:3011/api/posts/'+e.target.name) 
        .then(res=>{
            console.log("carreguei o ficheiro")
        })
        .catch(err=>{console.log(err)})
        message.success("Post apagado")
    }
    
    const {title,
    owner,
    content,
    classification} =this.state;
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
                            alt="photo"
                            src={post.image}
                        />
                        }
                        actions={[
                        <div style={{width:'25vh'}}><Button name={post._id}style={{marginLeft:'15vh'}}type="primary"   onClick={handleDelete} /> Apagar</div>,
                        <div style={{width:'25vh'}}><Button name={post._id}type="primary" icon="link" onClick={handleConsult} /></div>,
                ,
                        ]}
                    >
                        <Meta
                        avatar={post.owner}
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
           <Avatar size={160} src={store.getState().token.user.photo} />
        <div>
        </div>
                {posts}
        </div>
        )
    }
}


// Constante para ir buscar a store tudo o que eu quero para este componente
const mapStateToProps = state =>({
    posts: state.posts.my_post,
    newPost: state.posts.item
});

export default connect(mapStateToProps,{fetchMyPosts,loadUser,loadFriends,loadAllUsers})(feedPosts);

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