import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import OurCars from './Pages/OurCars/OurCars/OurCars';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <OurCars></OurCars>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
