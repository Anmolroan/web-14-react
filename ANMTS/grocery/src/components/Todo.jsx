import React,{useReducer,useContext,useState} from 'react'
import {context} from './contexts/Create'
function Todo() {
    const {count,handleADD} =useContext(context)
    const init ={
        title:"",
        status:false,
       
    }
    const [title,setTitle] =useState("");
  
    const reducer =(action,state) => {
        switch(action.type){
            case "ADD_TODO":
                return {
                    ...state,title:title
                }
            case "TOGGLE_TODO":
                return {
                    ...state,status: action.status
                }

                default:
                    return state
        }
    }
    const [state,dispatch]=useReducer(reducer,init);
    console.log(state);
    
  return (
    <div>
    <input onChange={(e)=>setTitle(e.target.value)}></input>
    <button onClick={()=>dispatch({type:"ADD_TODO"})}>Add</button>
    <div>{state.title}</div>
    <div>{count}</div>
    <button onClick={()=>handleADD()}>add</button>
  
    </div>
  )
}

export default Todo