import {useState ,useEffect} from "react"
export const Todo =()=>{
    useEffect(()=>{
getTodo();
    },[]);
    
    const [todos,setTodos] =useState([])
    const [text,setText] = useState("");
    const getTodo = ()=>{
        fetch("http://localhost:8000/todos").then((d)=>d.json()).then(res=>{
             setTodos(res)
            console.log(res)
        })
    }
    return <div>
        <input value = {text} type ="text" placeholder ='enter todo' onChange={(e)=>setText(e.target.value) }/>
        <button onClick={()=>{
            
            const payload ={
                title:text,
                status :false
            };
            fetch ("http://localhost:8000/todos",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type": "application/json"
                }
            }).then(()=>{
                getTodo();
                setText("")
            })
            }}>add todo </button>
        {todos.map((e) =>(
            <div>{e.title} </div>
        )
            
        )}
    </div>
}