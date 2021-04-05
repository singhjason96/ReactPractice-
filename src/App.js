import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Section from "./Components/Section";
import AlertBox from "./Components/RadioB";
import RadioB from "./Components/RadioB";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/header" component={Header} />
          <Route exact path="/section" component={Section} />
          <Route exact path="/radio" component={RadioB} />
          <Route exact path="/form" component={Form}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
