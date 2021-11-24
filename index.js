import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Modulo3.R2.css'
// import './Modulo3.R1.css';
import MostrarUsuarios from './Modulo3.R1';
import App from './Modulo3.R2'
ReactDOM.render(
  <React.StrictMode>
    {/* <MostrarUsuarios/> */}
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

