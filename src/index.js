import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route, Redirect,Link} from 'react-router-dom';

ReactDOM.render((
  <Router>    
      <App>        
        <Route path = "/login" component = {Login} /> 
        <Route path = "/home" component = {Home} /> 
        <Route path = "/signUp" component = {SignUp} /> 
      </App>
  </Router>
), document.getElementById('root'))

serviceWorker.unregister();
