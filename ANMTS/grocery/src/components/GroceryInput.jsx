import React from 'react'
import {useState} from "react"
import GroceryList from "./GroceryList";

function GroceryInput() {
    const [query,setQuery]=useState("");
    const [task,setTasks]=useState([]);
    const handleChange=(e)=>{
setQuery(e.target.value);

    }
    const handleAdd =()=>{
        const payload ={
            title:query,
            status:false
        }
        const newTasks=[...task,payload];
        setTasks(newTasks);
        console.log(task);
    }
  
  return (
    <div>GroceryInput
    <input  onChange={handleChange} value={query}/>
    <button onClick={handleAdd}>ADD</button>
    <div>{
     task.map((item) =>{
         return <div>
        <GroceryList {...item}/>
         </div>;
     })
    }</div>
    </div>
  )
}

export default GroceryInput