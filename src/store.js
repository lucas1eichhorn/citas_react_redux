import { createStore } from 'redux';
import { obtenerStateStorage, guardarStateStorage } from './localStorage';
//el reducer es una funcion que actualiza el store
import reducer from './reducers';

//definir state inicial
//const initialState = [];

//obtenemos las citas guardadas en el local storage
const storageState = obtenerStateStorage();

//creamos y exportamos un store para que esté disponible en otros componentes
//params: 1:reducer es una funcion o conjunto de funciones que actualizan el store --- 2:initial state: no es necesario ya que cada reducer tiene su initial state
const store = createStore(reducer,
    storageState, //initial state: no es necesario ya que cada reducer tiene su initial state, pero aca leemos el guardado en localStorage
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log("algo cambio");
    //guardamos en el local storage el state (solo las citas)
    guardarStateStorage({citas:store.getState().citas})
});

export default store;