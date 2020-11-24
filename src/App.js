import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Intro from './Components/Intro';
import Home from './Pages/Home';
import RecordList from "./Pages/RecordList";
import "./App.scss"
import EventList from "./Pages/EventList";
import Sponsors from "./Components/Sponsors";
import Contact from "./Components/Contact";

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
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
