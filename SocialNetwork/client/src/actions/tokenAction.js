
import{
    USER_LOADED,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    GET_FRIENDS,
    ALL_USERS,
    ALL_UNCONFIRMED,
    } from '../actions/types'
import axios from 'axios';
import store from '../components/store'
    /* o dispatch é necessário porque estamos a fazer um pedido
       assíncrono
       passamos a getState porque da-nos jeito ir buscar os valores 
       guardados no estado
    */
export const loadUser = () => (dispatch,getState) =>{
    //ir buscar o valor do token armazenado

    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/user/auth/'+localStorage.getItem('mail'),{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type:USER_LOADED,
            payload:user
        }))
        .catch(err => {
            console.log("erro"+err)
            dispatch({
                type:AUTH_ERROR,
            })
        })
}



export const logOut = () => (dispatch,getState) =>{
    //ir buscar o valor do token armazenado

    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/user/auth/'+getState.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type:LOGOUT_SUCCESS,
            payload:user
        }))
        .catch(err => {
            console.log("erro"+err)
            dispatch({
                type:AUTH_ERROR,
            })
        })
}

export const loadFriends = () => (dispatch,getState) =>{
    //ir buscar o valor do token armazenado

    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/user/friends/'+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type:GET_FRIENDS,
            payload:user
        }))
        .catch(err => {
            console.log("erro"+err)
            dispatch({
                type:AUTH_ERROR,
            })
        })
}

export const loadAllUsers = () => (dispatch,getState) =>{
    //ir buscar o valor do token armazenado

    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/user/add/'+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type: ALL_USERS,
            payload:user
        }))
        .catch(err => {
            console.log("erro"+err)
            dispatch({
                type:AUTH_ERROR,
            })
        })
}

export const loadAllUnconfirmed = () => (dispatch,getState) =>{
    //ir buscar o valor do token armazenado

    const token = localStorage.getItem('token');
    console.log("Dentro da action" +token)

    axios.get('/api/user/add/'+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
        .then(res => res.data )
        .then(user=>dispatch({
            type: ALL_UNCONFIRMED,
            payload:user
        }))
        .catch(err => {
            console.log("erro"+err)
            dispatch({
                type:AUTH_ERROR,
            })
        })
}

 

