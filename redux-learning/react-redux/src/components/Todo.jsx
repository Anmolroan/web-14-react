import React ,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {addTodo,addTodoLoading,addTodoSuccess,addTodoError} from '../store/action';
function Todo() {
    const [text,setText] =React.useState("");
    const {loading, todos,error}=useSelector(state=>({loading:state.loading,todos:state.todos,error:state.error}));
    const dispatch =useDispatch();
    useEffect(()=>{
        fetch("http://localhost:3001/todos").then((res)=>res.json()).then((data)=>{})
    })
  return  loading ?<div>...loading</div>:error?<div>Something went wrong</div>:(
    <div>
        <input type="text"
         placeholder ="Enter Todo" 
         onChange={(e)=>{setText(e.target.value)}}
         />
         <button onClick={()=>{
            dispatch(addTodoLoading())
           fetch("http://localhost:3001/todos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({status:false,title:text})
           }).then((d)=>d.json()).then(res=>{
            dispatch(addTodoSuccess(res));
          
           }).catch((e)=>{
            dispatch(addTodoError(e))
           })
         }}>Add Todo</button>
          {todos.map((el,i)=>{
            return <div key={i} >{el.title}{el.status?"DONE":"Not Done"}</div>;
         })}
    </div>
  )
}

export default Todo