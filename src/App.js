
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './Components/Header';
import Intro from './Components/Intro';
import Home from './Pages/Home';
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Router>
            <div className="container-fluid">
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        </Router> 
      <Home />
    </div>
  );
}

export default App;
