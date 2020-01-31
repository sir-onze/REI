import{combineReducers} from 'redux'

import postReducer  from '../reducers/postReducer'
import tokenReducer from '../reducers/tokenReducer'
import eventReducer from '../reducers/eventReducer'
import albumReducer from '../reducers/albumReducer'

export default combineReducers({
    posts:postReducer,
    token:tokenReducer,
    events:eventReducer,
    albuns:albumReducer
});