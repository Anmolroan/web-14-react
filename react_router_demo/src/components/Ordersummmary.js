import React from 'react'
import {useNavigate} from "react-router-dom"
function Ordersummmary() {
  const navigate =useNavigate();
  return (
    <>
    <div>Ordersummmary</div>
    <button onClick={()=>navigate(-1)}>go back</button>
    </>
  )
}

export default Ordersummmary