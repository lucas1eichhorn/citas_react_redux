import { combineReducers } from "redux";
import citasReducer from './citasReducer';
import validacionReducer from './validacionReducer';

//import productosReducer from './productosReducer'
export default combineReducers({
    citas: citasReducer,
    error:validacionReducer
    //productos:productosReducer
})