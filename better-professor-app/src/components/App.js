import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <LoginPage path="/login"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
