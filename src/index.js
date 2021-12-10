import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const navElementHeight = document.querySelector(".navbar").offsetHeight;
const contentElement = document.querySelector(".content");

contentElement.style.height = `${window.innerHeight - navElementHeight}px`
contentElement.style.marginTop = `${navElementHeight}px`