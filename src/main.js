import React from 'react';
import ReactDOM from 'react-dom/client';

import style from '../style.css';
import AppBar from './components/Appbr';
import Body from './components/Body';



const Applayout = () => {
    return <div className="App">
        <AppBar />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);   