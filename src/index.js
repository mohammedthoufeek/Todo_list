import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import LifeCycle from './LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    {/* <LifeCycle/> */}
  </React.StrictMode>
);
