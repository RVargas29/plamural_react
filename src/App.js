import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Intro from './Components/Intro';
import Home from './Pages/Home';
import RecordList from "./Pages/RecordList";
import "./App.scss"
import EventList from "./Pages/EventList";


function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/records/:category_filter?' component={RecordList}/>
          <Route exact path='/events' component={EventList}/>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
