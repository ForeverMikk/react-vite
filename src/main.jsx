import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Michael soy yo'/>
        {/* <CounterApp value={10}/> */}
    </React.StrictMode>
)