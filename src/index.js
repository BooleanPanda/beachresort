import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import {RoomProvider} from './Context';

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>
    </RoomProvider>
, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
    }
serviceWorker.unregister();
