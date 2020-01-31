import { applyMiddleware ,createStore,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const initialState ={};

const middleware = [thunk];

/* Funções necessárias para a persistência da store quando é feito um refresh à
  página, para isso é necessário utilizar a local store do browser como uma 
  espécie de cache
*/

function saveToLocal (state) {
    try{
        const stateserialized =  JSON.stringify(state)
        localStorage.setItem('state',stateserialized)
    }
    catch(e){
        console.log("erro a guardar na localstore"+e)
    }
}

function loadFromLocal () {
    try{
        const stateserialized = localStorage.getItem('state')
        if(stateserialized == null) return undefined
        return JSON.parse(stateserialized)
    }
    catch(e){
        console.log("erro a carregar da localstore"+e)
        return undefined
    }
}

const statepersisted = loadFromLocal();

/** Criação da store */
const store = createStore(
    rootReducer,
    statepersisted,
    compose( // para permitir utilizar a extensao do firefox para ver a store
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

/** Garantir que o estado da store é efetivamente guardado para local storage */

store.subscribe(() => saveToLocal(store.getState()))

export default store;