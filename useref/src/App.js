import React from 'react';
import './App.css';


function App() {
  const [data,setData]=React.useState({
    
      name:"",
      email:"",
      age:""
    
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})

  }
  const {email,name,age}=data;
  return (
    <div className="App">
     <h1>useref</h1>
     <input value={email} name="email" onChange={handleChange}/>
     <br/>
     <input value={name} name="name" onChange={handleChange}/>
     <br/>
     <input value={age} name="age" onChange={handleChange}/>
     <button onClick={()=>console.log(data)}> click</button>
    </div>
  );
}

export default App;
