
import './App.css';
import styled from 'styled-components'
const Wrapper =styled.div`
padding:5 px;
border:1px solid ;
border-radius:30%;
h1 {
  color:blue;
}
h3{

}
`
function App() {
  return (
    <Wrapper color="green">
    <div className="App">
 <h1>Styled components</h1>
 <h3>Color Green</h3>
    </div>
    </Wrapper>
  );
}

export default App;
