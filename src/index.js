import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from "./containers/chat";
import CodeCollab from "./containers/codeCollab";
import Weather from "./containers/weather";
import Users from "./containers/users";
import UserProfile from "./containers/userProfile";
import Login from "./containers/login";

import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers";
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(reducer,  applyMiddleware(thunk));


const app = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={"/home"} component={App} />
        <Route exact path={"/chat"} component={Chat} />
        <Route exact path={"/codecollab"} component={CodeCollab} />
        <Route exact path={"/user"} component={Users} />
        <Route exact path={"/user/:id"} component={UserProfile} />
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/weather"} component={Weather} />




        
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
