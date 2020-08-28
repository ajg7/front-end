/* TOOLS */
import React from 'react';
import { Route, Switch } from "react-router-dom";

/* COMPONENTS */
import LoginPage from './components/LoginPage'
import SignupForm from "./components/SignupForm"
import Form from './components/Form'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import AddPage from './components/AddPage'
import StudentPage from './components/StudentPage'
import MessagePage from './components/MessagePage'
import MessageEdit from './components/MessageEdit'
import ProjectEdit from './components/ProjectEdit'

/* STYLE */
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}/> 
        <Route exact path="/login" component={Form}/> 
        <Route exact path="/signup" component={SignupForm}/>
        <PrivateRoute exact path="/protected" component={Dashboard}/>
        <PrivateRoute exact path="/add" component={AddPage}/>
        <PrivateRoute exact path="/student-page/:id" component={StudentPage}/>
        <PrivateRoute exact path="/message-page/:id" component={MessagePage}/>
        <PrivateRoute exact path="/message-page/edit/:id" component={MessageEdit}/>
        <PrivateRoute exact path="/project-page/edit/:id" component={ProjectEdit}/>
      </Switch>
    </div>
  );
}

export default App
