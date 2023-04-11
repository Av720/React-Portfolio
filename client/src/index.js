import React from "react";
import reactDom from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/index.css';


const el = document.getElementById('root')
const root = reactDom.createRoot(el)

root.render(<App />)