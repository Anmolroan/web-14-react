
import {ADD_TODO,REMOVE_TODO} from './actionTypes'
export const reducer =(state={counter:0},{type,payload}) =>{
switch(type){
    case ADD_TODO:
        return {...state,
        counter:state.counter+payload
        };
        default:
            return state;
}
}