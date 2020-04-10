import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import HomeContainer from "./containers/HomeContainer";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route, Redirect,Link} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router>    
          <App>        
            <Route path = "/login" component = {Login} /> 
            <Route path = "/home" component = {HomeContainer} /> 
        <Route path = "/signUp" component = {SignUp} /> 
      </App>
    </Router>
  </Provider>
  
), document.getElementById('root'))

serviceWorker.unregister();
