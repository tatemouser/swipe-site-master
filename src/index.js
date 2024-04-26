import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import mysql from 'mysql';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.unregister();
