import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../src/formSchema";

import Dashboard from './components/Dashboard'
import AddPage from './components/AddPage'
import LoginPage from './components/LoginPage'
import Form from './components/Form'
import SignupForm from "./components/SignupForm"

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute exact path="/protected" component={Dashboard} /> */}
        <Route exact path="/" component={LoginPage} /> 
        <Route exact path="/login" component={Form} /> 
        <Route exact path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddPage} />
      </Switch>
    </div>
  );
}

export default App;
