import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import Index from "views/index.js";
import Contacts from "views/contacts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={(props) => <Index {...props} />} />        
            <Route
        path="/contacts"
        render={(props) => <Contacts {...props} />}
      />
      <Redirect to="/index" />    
        </Switch>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
