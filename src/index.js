import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot
import App from './App'; // Importe o App

// Crie uma root usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o App usando createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);