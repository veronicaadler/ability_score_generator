import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Create from "./components/Create";
import Auto from "./components/Auto";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const [name, setName] = useState('');

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create inputName={name => setName(name)}/>
            </Route>
            <Route path="/auto">
              <Auto charactername={name}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
