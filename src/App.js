import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Create from "./components/Create";
import Auto from "./components/Generate";
import Scores from './components/Scores';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const [name, setName] = useState('');
  const [classTitle, setClassTitle] = useState('');
  const [race, setRace] = useState('')


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
              <Create 
                inputName={name => setName(name)} 
                inputClass={classTitle => setClassTitle(classTitle)} 
                inputRace={race => setRace(race)}
                name={name}
                classname={classTitle}
                race={race}/>
            </Route>
            <Route path="/generate">
              <Auto charactername={name} characterclass={classTitle} characterrace={race} />
            </Route>
            <Route path="/scores">
              <Scores />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
