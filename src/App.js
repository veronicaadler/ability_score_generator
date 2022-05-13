import './App.css';
import Home from '../src/pages/home/Home';
import Header from './components/shared/Header';
import Create from '../src/pages/create/Create';
import Generate from "../src/pages/generate/Generate";
import AllScores from '../src/pages/allscores/AllScores';
import About from '../src/pages/about/About';
import SingleScore from '../src/pages/singlescore/SingleScore';
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
              <Create />
            </Route>
            <Route path="/generatescore">
              <Generate />
            </Route>
            <Route exact path="/allscores">
              <AllScores />
            </Route>
            <Route exact path='/allscores/:id'>
              <SingleScore />
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
