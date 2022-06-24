import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import { reducer as TodoReducer} from "../features/Todos/reducer";
import {reducer as CounterReducer} from "../features/Counter/reducer";
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    counterState:CounterReducer,
    todoState:TodoReducer
})
// middleware
// function logger1(store){
//     return function(next){
//         return function(actions){

//         }
//     }
// }
// function logger2(store){
//     return function(next){
//         return function(actions){

//         }
//     }
// }
const logger1 =(store) => (next) => (action)=>{
if(typeof action === "function"){
   return action(store.dispatch)
}
next(action);
}
// const logger2 =(store) => (next) => (action)=>{
//     console.log("inside logger2",action);
// console.log("inside logger1",action);
// console.time("p1")

// console.log("Exiting logger1");
// console.timeEnd("p1")
//     next(action);
//     console.log("Exiting logger2")
// }
export const store = createStore(rootReducer,
    compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__())
   
    // 
    );

console.log("Entire store ",store.getState());