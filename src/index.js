import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

//index.js  qui permet d’initialiser notre app React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
