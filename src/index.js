import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from "./theme/index.js";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { professorReducer } from "./store";

import App from "./App";

const store = createStore( professorReducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
  </Provider>,
  document.getElementById('root')
);