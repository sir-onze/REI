import React,{ Component } from 'react';
import {connect} from 'react-redux'

import moment from 'react-moment';

import 'antd/dist/antd.css';
import '../view/profile.css';
import axios from 'axios'

import { List, Avatar,Card,Comment,Tooltip,Form,Input,message} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

import store from './store'
import {fetchOnePost,loadComments} from '../actions/postActions'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
/** Falta adicionar os links !!!! para os diferentes feeds */
class consult extends Component{
    componentWillMount(){
       this.props.fetchOnePost()
       this.props.loadComments()
    }
    constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          profileImg: '',
          description:''
         
      }
    }
    postHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})}

    onFileChange(e) {
      this.setState({ profileImg: e.target.files[0] })
  }
  onSubmit = (e) => {
    e.preventDefault();
     // enviar o pedido para a rota de update do backend
     const formData = new FormData()
     formData.append('id', localStorage.getItem('current_post'))
     formData.append('owner', store.getState().token.user.username)
     formData.append('description', this.state.description)
     this.state.description=''
     axios.post('http://localhost:3011/api/posts/'+store.getState().posts.current_post._id+'/'+'coment',formData) 
          .then(res=>{
              console.log("carreguei o ficheiro")
          })
          .catch(err=>{console.log(err)})
     console.log(this.state);
     message.success('Comentário criado')
     
 }
    render(){
        

        const data = [
             {
                title: 'Título',
                field: this.props.post.title
            },
            {
              title: 'Criador:',
              field: this.props.post.owner
            },
            {
              title: 'Conteúdo:',
              field: this.props.post.content
            },
            {
              title: 'Data:',
              field: this.props.post.data
            },
            {
              title: 'Likes',
              field: this.props.post.likes
            },
            {
                title: 'Classificação',
                field: this.props.post.classificacao
            },
            {
                title: 'Local',
                field: this.props.post.local
            }

          ];
          if(this.props.comments){
          var comments=this.props.comments.map((value)=>{
            return (
                <Card style={{width: '81vw',marginLeft: '0vh'}}>
                <Comment
                author={<a>{}</a>}
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Utilizador"
                  />
                }
              content={<p>{value.description} || efetuado por {value.owner}</p>}
                datetime={
                  
                    <moment>{value.date}</moment>

                }
              />
              </Card>
            )})
              }
              const {description} =this.state;
        return(
            <div>
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
          {comments}
          <a href={this.props.post.file} download>Descarregar Anexo</a>
          <div>
            <h1 style= {{marginTop:'10vh'}}>Adicionar comentário</h1>
          <Form onSubmit={this.onSubmit} 
                encType="multipart/form-data" 
                className="login-form"
                style={{marginLeft:'23vw'}}>
                    <Form.Item>

                        <Input name="description"
                        onChange={this.postHandler}
                        value={description}
                        style={{ position:"relative",
                        align:"center",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'5vh',
                        width:'60vh'
                        }} placeholder="Escreve um comentário" 
                         />
                      </Form.Item >
                      <Form.Item>
                        <Input
                        type="file"
                        name="file"
                        onChange={this.onFileChange}
                        required={false}
                        style={{marginLeft:'8vw'}}
                            />
                    </Form.Item>
                  
                    <Form.Item>
                    <button type="submit" style={{marginLeft:'15vw'}}>Upload</button>
                    </Form.Item>
                </Form>
          </div>
         
          </div>
        );
            
    }
}

// Constante para ir buscar a store tudo o que eu quero para este componente
const mapStateToProps = state =>({
  comments: state.posts.current_post.comments,
  post: state.posts.current_post,
  comments: state.posts.post_comment
    
  });
  
export default connect(mapStateToProps,{fetchOnePost,loadComments})(consult);