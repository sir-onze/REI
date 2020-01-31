import {GET_POSTS, NEW_POST, GET_ONE_POST,GET_MY_POST,GET_COMMENTS } from './types';
import axios from "axios";
import store from '../components/store'
/** dispach é chamado smp que queremos enviar dados para onde queremos */
export function fetchPosts(){
    return function(dispatch){
    axios.get("http://localhost:3011/api/posts/",{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(posts => dispatch({
        type : GET_POSTS,
        payload : posts
    }));
    }
}

export function fetchOnePost(){
    return function(dispatch){
    axios.get("http://localhost:3011/api/posts/"+localStorage.getItem('current_post'),{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(posts => dispatch({
        type : GET_ONE_POST,
        payload : posts
    }));
    }
}

export function fetchMyPosts(){
    return function(dispatch){
    axios.get("http://localhost:3011/api/posts/user/"+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(posts => dispatch({
        type : GET_MY_POST,
        payload : posts
    }));
    }
}

export function loadComments (){
    //ir buscar o valor do token armazenado
    return function(dispatch){
    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/coment/parent/'+localStorage.getItem('current_post'),{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type:GET_COMMENTS,
            payload:user
        }))
    }
}

export function createPost(postData){
    return function(dispatch){
        axios.post("http://localhost:3011/api/user/posts",postData)
        .then(res=>res.json())
        .then(post => dispatch({
            type : NEW_POST,
            payload : post
        }));
}
 // A seguir reducers
}