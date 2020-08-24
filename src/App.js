import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import * as yup from 'yup'
import formSchema from "./formSchema.js";

import Dashboard from './components/Dashboard'
import AddPage from './components/AddPage'
import LoginPage from './components/LoginPage'
import Form from './components/Form'
import DirtyLogin from './components/DirtyLogin.jsx';
import PrivateRoute from './components/PrivateRoute'


import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/protected" component={Dashboard} />
        <Route exact path="/login" component={LoginPage} /> 
        <Route exact path="/login/form" component={Form} /> 
        <Route exact path="/dirty-login" component={DirtyLogin} /> 
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddPage} />
      </Switch>
    </div>
  );
}

export default App;
