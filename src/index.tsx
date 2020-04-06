import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyName from "./MyName";
import Gender from "./Components/Gender";
import Age from "./Components/Age";
import Skills from "./Components/Skills";

ReactDOM.render(
    <React.StrictMode>
        {/*<MyName/>*/}
        <Gender/>
        <Age/>
        <Skills/>
        {/*<App/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
