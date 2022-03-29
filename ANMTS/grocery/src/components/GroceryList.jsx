import React from 'react'

function GroceryList({title,status}) {
  return (
    <div>
        <h3>{`${title} - ${status}`}</h3>
    </div>
  )
}

export default GroceryList