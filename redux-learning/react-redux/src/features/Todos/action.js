import {ADD_TODO,REMOVE_TODO,ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR} from './actionTypes'
export const addTodo = (data) =>({
type: ADD_TODO,
payload: data
})
export const addTodoLoading =() => {
    return ({
        type:ADD_TODO_LOADING,
    })
}
export const addTodoSuccess =(data) => {
    return ({
        type:ADD_TODO_SUCCESS,
        payload:data
    })
}
export const addTodoError =(err) => {
    return ({
        type:ADD_TODO_ERROR,
        payload:err
    })
}
export const getTodoSuccess=(data)=>{
return {
    type:GET_TODO_SUCCESS,
    payload:data
}
}
export const getTodoLoading=() => {
    return {
        type:GET_TODO_LOADING,
    }
}
export const getTodoError=(err) => {
return {
    type:GET_TODO_ERROR,
    payload:err
}
}
export const removeTodo = (id) =>({
    type: REMOVE_TODO,
    payload: id
})
export const getData =()=>(dispatch)=>{
   
        dispatch(getTodoLoading())
        fetch("http://localhost:3001/todos").
        then((d)=>d.json()).
        then((data)=>{dispatch(getTodoSuccess(data))})
        .catch((err)=>{dispatch(getTodoError(err))});
       
       
}