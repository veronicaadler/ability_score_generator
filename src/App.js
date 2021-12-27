import { useState } from 'react';
import './App.css';
import Home from "./components/home/Home";
import Header from "./components/shared/Header";
import CreateCharacterProfile from './components/characterprofile/CreateCharacterProfile';
import GenerateScores from "./components/generatescore/GenerateScores";
import AllScores from './components/allscores/AllScores'
import About from './components/about/About';
import AllScoreDetails from './components/allscores/AllScoreDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
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
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateCharacterProfile 
                inputName={name => setName(name)} 
                inputClass={classTitle => setClassTitle(classTitle)} 
                inputRace={race => setRace(race)}
                name={name}
                classname={classTitle}
                race={race}/>
            </Route>
            <Route path="/generatescore">
              <GenerateScores charactername={name} characterclass={classTitle} characterrace={race} />
            </Route>
            <Route exact path="/allscores">
              <AllScores />
            </Route>
            <Route exact path='/allscores/:id'>
              <AllScoreDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
