import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo} from './store/action';
function App() {
  const counter =useSelector(state=>state.counter);
  const dispatch =useDispatch();
  return (
    <div className="App">
    counter:{counter}
    <button onClick={()=>{
      dispatch(addTodo(1))
    }}>Add 1</button>
    </div>
  );
}

export default App;
