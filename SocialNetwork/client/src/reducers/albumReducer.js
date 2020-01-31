/** Onde vamos decidir as alterações que vão ser feitas a store */

import {GET_ALBUNS, NEW_ALBUM,GET_ALBUM,GET_MY_ALBUM,GET_MY_IDENTIFICATIONS } from '../actions/types';


const initialState = {
    /** items -> onde vem a resposta da action*/
    albums : [],
    /** item -> vamos usar para o new post*/
    item:{},
    current_event_id:{},
    current:{},
    myalbums:{},
    myidentifications:{}
}

export default function(state=initialState,action){
    console.log("reducer event")
    switch(action.type){
            case GET_ALBUNS:
                return{
                    ...state,
                current_event_id:{},
                current:{},
                myalbums:{},
                albums: action.payload,
                };
            case GET_MY_ALBUM:
                    return{
                        ...state,
                    current_event_id:{},
                    current:{},
                    myalbums: action.payload
                    };
            case GET_MY_IDENTIFICATIONS:
                    return{
                        ...state,
                    current_event_id:{},
                    current:{},
                    myalbums: {},
                    myidentifications:action.payload
                    };
            case NEW_ALBUM : 
                return{
                    ...state,
                item: action.payload           
            };
            case GET_ALBUM:
                return {
                ...state,
                myalbums:{},
                myidentifications:{},
                current: action.payload 
                }
            default:
            return state;
    }
}

// a seguir componentes