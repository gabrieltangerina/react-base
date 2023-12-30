import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Reduce (Variáveis Globais)
import { Provider } from "react-redux";

import store from "./store";
import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toastify-container" />
      </Router>
    </Provider>
  );
}

export default App;
