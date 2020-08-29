import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {createBrowserHistory} from 'history'

import Home from './sections/Home.js'


class App extends Component {

   
    render() {
        return (
            <Router history={createBrowserHistory()}>
            <Home/>
        </Router>
        );
    }
}

export default App;
