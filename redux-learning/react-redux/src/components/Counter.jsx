import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {addTodo} from './store/action';
function Counter() {
    const counter =useSelector(state=>state.counter);
    const dispatch =useDispatch();
  return (
    <div>Counter
     counter:{counter}
    <button onClick={()=>{
      dispatch(addTodo(1))
    }}>Add 1</button>
    </div>
  )
}

export default Counter