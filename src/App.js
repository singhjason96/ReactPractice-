import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
<<<<<<< HEAD
import TextBox from "./Components/TextBox";
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Section from "./Components/Section";
>>>>>>> cc5f57065cef50c828a57dc9de8c1cdeb5abac2f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <TextBox />
=======
      <Router>
        <Switch>
          <Route exact path="/header" component={Header} />
          <Route exact path="/section" component={Section} />
        </Switch>
      </Router>
>>>>>>> cc5f57065cef50c828a57dc9de8c1cdeb5abac2f
    </div>
  );
}

export default App;
