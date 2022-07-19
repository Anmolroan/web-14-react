import React ,{createContext,useState}from 'react'
export const context=createContext();
function Create({children}) {
    const [count,setCount]=useState(0);
    const handleADD =() => {
        setCount(count+1);
    }
  return (
    <context.Provider value={{count,handleADD}}>
        {children}
    </context.Provider>
  )
}

export default Create