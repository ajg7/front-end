import React, { useState, useEffect } from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import formSchema from "../formSchema.js";
import LoginPage from "./LoginPage.js";
import Form from "./Form.js";




function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <LoginPage path="/login"/>
        </Route>

        <Route>
          <Form path="/form" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
