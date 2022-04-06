import React from 'react'
import Cart from './Cart'
import {useContext} from 'react';
// import {ThemeContext} from "../contexts/ThemeContext"
function Navbar() {
    // const {theme} =useContext(ThemeContext)
  return (
    <div>
    <div>Navbar theme is </div>
        <Cart/>
    </div>
  )
}

export default Navbar