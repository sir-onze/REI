import {GET_ALBUNS, NEW_ALBUM,GET_ALBUM,GET_MY_ALBUM,GET_MY_IDENTIFICATIONS } from './types';
import axios from "axios";
import store from '../components/store'

/** dispach é chamado smp que queremos enviar dados para onde queremos */
export function fetchAlbuns (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch events")
    return function(dispatch){
    axios.get("http://localhost:3011/api/album",{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(albuns=> dispatch({
        type : GET_ALBUNS,
        payload : albuns
    }));
}
}

export function fetchMyAlbuns (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch my events")
    return function(dispatch){
    axios.get("http://localhost:3011/api/album/created/"+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_MY_ALBUM,
        payload : events
    }));
}
}

export function fetchMyIdentifications (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch my participations")
    return function(dispatch){
    axios.get("http://localhost:3011/api/album/identification/"+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_MY_IDENTIFICATIONS,
        payload : events
    }));
}
}

export function fetchOneAlbum () {
    return function(dispatch){
    console.log("fetch one event")
    axios.get("http://localhost:3011/api/album/get/"+localStorage.getItem('event'),{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_ALBUM,
        payload : events
    }));
    }
}


 // A seguir reducers
