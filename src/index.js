import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Favourite from './pages/favourite'
import AppBar from './components/appBar';

ReactDOM.render(
    <Router>
    <AppBar></AppBar>
        <Route path="/" exact component={App} />
        <Route path="/api/favourite/movies" exact component={Favourite} />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
