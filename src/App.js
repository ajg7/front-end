import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

import Dashboard from './components/Dashboard'
import AddPage from './components/AddPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute exact path="/protected" component={Dashboard} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddPage} />
      </Switch>
    </div>
  );
}

export default App;
