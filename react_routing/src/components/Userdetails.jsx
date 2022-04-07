import React from 'react'
import {useParams} from "react-router-dom"
function Userdetails() {
    const {userid} =useParams();
  return (
    <div>
        fetch data of user {userid}
    </div>
  )
}

export default Userdetails