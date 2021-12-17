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

const navElement = document.querySelector(".navbar");
const contentElement = document.querySelector(".content");
const addTodoBtn = document.getElementById("addTodoBtn");

navElement.style.width = `${contentElement.offsetWidth}px`
contentElement.style.height = `${window.innerHeight - navElement.offsetHeight}px`
contentElement.style.marginTop = `${navElement.offsetHeight}px`

if (window.innerWidth >= 1440) {
  addTodoBtn.style.right = `${((window.innerWidth - contentElement.offsetWidth) / 2) + 20}px`
}