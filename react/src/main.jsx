import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Utilisez BrowserRouter à la place de createBrowserRouter
import App from './App.jsx'; // Assurez-vous que App.jsx est correctement importé

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>
  </React.StrictMode>
);


