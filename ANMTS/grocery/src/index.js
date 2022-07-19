import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './components/contexts/Create';


ReactDOM.render(
  <React.StrictMode>
  <Create>
  <App />
  </Create>
   
  </React.StrictMode>,
  document.getElementById('root')
);


