import React,{useState,useEffect} from 'react'

function useTimeOut(delay) {
    const [show,setShow]=useState(false);
    useEffect(()=>{
        let id =setTimeout(()=>{
            setShow(true)
        },delay);
        return ()=>{clearTimeout(id)}
    },[])
  return (
   show
  )
}

export default useTimeOut