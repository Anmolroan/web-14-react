import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incCount,decCount} from '../features/Counter/actions'
function Counter() {
    const counter =useSelector(state=>state.counterState.counter);
    console.log(counter)
    const dispatch =useDispatch();
  return (
    <div>Counter
     counter:{counter}
    <button onClick={()=>{
      dispatch(incCount(1))
    }}>Add 1</button>
    </div>
  )
}

export default Counter