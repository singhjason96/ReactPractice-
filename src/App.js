import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/header' component={Header}/> 
        <Route path='/button' component={Button}/>
      </Switch>
    </Router>
  );
}

export default App;
