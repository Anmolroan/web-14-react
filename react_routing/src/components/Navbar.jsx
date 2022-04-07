import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/about" style={{margin:"10px"} }>About</Link>
        <Link to="/contact" >Contact</Link>
    </div>
  )
}

export default Navbar