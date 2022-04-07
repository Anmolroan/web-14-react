
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx'
import {Route ,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element ={ <Home/>}>
   
    </Route>
    <Route path="/about" element ={ <About/>}>
   
    </Route>
    <Route path="/Contact" element ={ <Contact/>}>
   
   </Route>
    
    </Routes>

    </div>
  );
}

export default App;
