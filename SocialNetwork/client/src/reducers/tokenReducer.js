
import{
USER_LOADED,
AUTH_SUCCESS,
AUTH_ERROR,
LOGOUT_SUCCESS,
GET_FRIENDS,
ALL_USERS,
ALL_UNCONFIRMED
} from '../actions/types'

const initialState = {
    token : '',
    isAuthtenticated : {},
    user:{},
    email:{},
    friends:{},
    all_users:{},
    all_unconfirmed:{}
};

export default function(state=initialState,action){
    switch(action.type){
        /* caso o user esteja carregado e o token atribuido entao 
        usamos esta chamada em todos os pedidos para verificar que
        o utilizador está autenticado   */
        case USER_LOADED:
            return {
                ...state,
                isAuthtenticated:true,
                token : localStorage.getItem('token'),
                email: localStorage.getItem('mail'),
                user:action.payload
        };
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthtenticated:true,
                email:localStorage.getItem('mail'),
                ...action.payload
        };
        case GET_FRIENDS:
            return {
                ...state,
                friends:action.payload
        };
        case ALL_USERS:
            return {
                ...state,
                all_users:action.payload
        };
        case ALL_UNCONFIRMED:
            return {
                ...state,
                all_unconfirmed:action.payload
        };
        
        case AUTH_ERROR:
            localStorage.removeItem('mail')
            localStorage.removeItem('token')
            return {
                ...state,
                token:{},
                user:{},
                isAuthtenticated:{},
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            localStorage.removeItem('mail')
            return {
                state:null,
                token:null,
                user:null,
                isAuthtenticated:{},
            };

        default:
            return state;
    }
}
