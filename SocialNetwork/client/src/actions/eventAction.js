import {GET_EVENTS, NEW_EVENT,GET_EVENT,GET_MY_EVENT,GET_MY_PARTICIPATIONS } from './types';
import axios from "axios";
import store from '../components/store'

/** dispach é chamado smp que queremos enviar dados para onde queremos */
export function  fetchEvents (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch events")
    return function(dispatch){
    axios.get("http://localhost:3011/api/events",{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_EVENTS,
        payload : events
    }));
}
}

export function fetchMyEvents (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch my events")
    return function(dispatch){
    axios.get("http://localhost:3011/api/events/organization/"+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_MY_EVENT,
        payload : events
    }));
}
}

export function fetchMyParticipations (){
    localStorage.setItem('token',store.getState().token.token)
    console.log("fetch my participations")
    return function(dispatch){
    axios.get("http://localhost:3011/api/events/participation/"+store.getState().token.user.username,{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_MY_PARTICIPATIONS,
        payload : events
    }));
}
}

export function fetchOneEvent () {
    return function(dispatch){
    console.log("fetch one event")
    axios.get("http://localhost:3011/api/events/get/"+localStorage.getItem('event'),{headers: {
        "token" : localStorage.getItem('token')
      }})
    .then(res => res.data )
    .then(events => dispatch({
        type : GET_EVENT,
        payload : events
    }));
    }
}

export function createEvents(postData){
    return function(dispatch){
        axios.post("http://localhost:3011/api/user/events",postData)
        .then(res=>res.json())
        .then(event => dispatch({
            type : NEW_EVENT,
            payload : event
        }));
}
 // A seguir reducers
}