import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navlinkStyles=({isActive})=>{ 
        return { 
            fontWeight:isActive ? 'bold' : 'normal', 
            textDecoration: isActive?'none':" underline"
        }
    }
  return (
   <nav>
       <NavLink style={navlinkStyles} to ='/'>Home</NavLink>
       <NavLink style={navlinkStyles} to ='/about'>About</NavLink>
   </nav>
  )
}

export default Navbar