/** Onde vamos decidir as alterações que vão ser feitas a store */

import {GET_EVENTS,NEW_EVENT,GET_EVENT,GET_MY_EVENT,GET_MY_PARTICIPATIONS} from '../actions/types';


const initialState = {
    /** items -> onde vem a resposta da action*/
    events : [],
    /** item -> vamos usar para o new post*/
    item:{},
    current_event_id:{},
    current:{},
    myevents:{},
    myparticipations:{}
}

export default function(state=initialState,action){
    console.log("reducer event")
    switch(action.type){
            case GET_EVENTS:
                return{
                    ...state,
                current_event_id:{},
                current:{},
                myevents:{},
                events: action.payload,
                };
            case GET_MY_EVENT:
                    return{
                        ...state,
                    current_event_id:{},
                    current:{},
                    myevents: action.payload
                    };
            case GET_MY_PARTICIPATIONS:
                    return{
                        ...state,
                    current_event_id:{},
                    current:{},
                    myevents: {},
                    myparticipations:action.payload
                    };
            case NEW_EVENT : 
                return{
                    ...state,
                item: action.payload           
            };
            case GET_EVENT:
                return {
                ...state,
                myevents:{},
                myparticipations:{},
                current: action.payload 
                }
            default:
            return state;
    }
}

// a seguir componentes