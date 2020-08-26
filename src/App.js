/* TOOLS */
import React from 'react';
import { Route, Switch } from "react-router-dom";

/* COMPONENTS */
import Dashboard from './components/Dashboard'
import AddPage from './components/AddPage'
import LoginPage from './components/LoginPage'
import Form from './components/Form'
import PrivateRoute from './components/PrivateRoute'
import StudentPage from './components/StudentPage';
import MessagePage from './components/MessagePage';
import SignupForm from "./components/SignupForm"

/* STYLE */
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/protected" component={Dashboard} />
        <Route exact path="/" component={LoginPage} /> 
        <Route path="/login" component={Form} /> 
        <Route path="/signup" component={SignupForm} />
        <Route path="/add" component={AddPage} />
        <Route path="/student-page/:id" component={StudentPage}/>

        <Route path="/message-page" component={MessagePage} />
      </Switch>
    </div>
  );
}

export default App
