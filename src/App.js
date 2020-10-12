import React from "react";
import "./App.css";
import "../src/sass/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login">
            <h1>
              login
            </h1>
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
