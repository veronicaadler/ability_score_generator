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
              <CreateCharacterProfile />
            </Route>
            <Route path="/generatescore">
              <GenerateScores />
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
