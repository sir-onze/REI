/** Onde vamos decidir as alterações que vão ser feitas a store */

import {GET_POSTS,NEW_POST,GET_ONE_POST,GET_MY_POST,GET_COMMENTS} from '../actions/types';

const initialState = {
    /** items -> onde vem a resposta da action*/
    items : [],
    /** item -> vamos usar para o new post*/
    item:{},
    current_post_id:{},
    current_post:{},
    my_posts:{},
    post_comment:{}
}

export default function(state=initialState,action){
    switch(action.type){
            case GET_POSTS:
                return{
                    ...state,
                current_post_id:{},
                current_post:{},
                items: action.payload
                };
            case NEW_POST : 
                return{
                    ...state,
                item: action.payload
            };
            case GET_MY_POST  : 
                return{
                    ...state,
                my_post: action.payload
            };
            case  GET_COMMENTS  : 
                return{
                    ...state,
                post_comment: action.payload
            };
           
            case GET_ONE_POST : 
                return{
                    ...state,
                current_post: action.payload
            };
            default:
            return state;
    }
}

// a seguir componentes