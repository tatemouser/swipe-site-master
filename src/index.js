import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/App.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';
// import mysql from 'mysql';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.unregister();
