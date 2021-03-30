import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Form from "./Components/Form";
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
        <Route path='/form' component={Form}/>
      </Switch>
    </Router>
  );
}

export default App;
