import React from "react";
import {ToDoInput} from "./ToDoInput"
import {ToDoItem} from "./ToDoItem"
function Todo(){
    const [todos,setTodos]=React.useState([])
 return <div>
  
     <ToDoInput/>
     {todos.map((e)=><ToDoItem todo ={e}/>)}
 </div>
}
export default Todo;