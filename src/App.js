
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Intro from './Components/Intro';
import Home from './Pages/Home';
import RecordList from "./Pages/RecordList";
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
                <Route exact path='/records' component={RecordList}/>
            </Switch>
        </div>
      </Router> 
      
    </div>
  );
}

export default App;
