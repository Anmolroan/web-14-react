import {useState} from "react"
export const ToDoInput=()=>{
    const [text,setText] =useState("")
    return (<div>
        <input type="text" onChange={(e)=>{
// console.log(e.target.value);
setText(e.target.value);
        }}/>
        <button
        onClick={()=>{

        }}
        >
    Add Todo
   
        </button>
    </div>)
}