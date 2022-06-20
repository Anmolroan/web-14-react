// const {createStore} =require("redux");
import {createStore} from 'redux';
import { reducer } from './reducer.js';
import {INC_COUNT,DEC_COUNT} from './actionTypes.js';
import {incCount} from './action.js';
const action ={type:INC_COUNT,payload:1}
const addToAction ={
    type:"ADD_TODO",
    payload:{id:1,title:"learn Redux",status:false}
}
// class Store{
//     constructor(reducer,init){
//         this.reducer=reducer;
//         this.state=init;
//     }
//     getState(){
//         return this.state
//     }
//     dispatch(action){     //dispatch recieves reducer
//        this.state= this.reducer(this.state,action);
//     }
// }



const init ={count:10,todo:[]};

// const store =new Store(reducer,init); same thing with reduxx
const store = createStore(reducer,init);
store.dispatch({type:INC_COUNT,payload:1});

console.log(store.getState());
store.dispatch({type:INC_COUNT,payload:-1});
store.dispatch(incCount(10));
store.dispatch({type:"ADD_TODO",payload:{title:"Learn redux",status:false}})
store.dispatch({type:"ADD_TODO",payload:{title:"Learn react",status:false}})
console.log(store.getState())