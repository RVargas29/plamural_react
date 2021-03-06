import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Intro from './Components/Intro';
import Home from './Pages/Home';
import RecordList from "./Pages/RecordList";
import "./App.scss"
import EventList from "./Pages/EventList";
import Sponsors from "./Components/Sponsors";
import Contact from "./Components/Contact";
import RepoList from "./Pages/RepoList";
import VideoList from "./Pages/VideoList";
import Gobernanza from "./Pages/Gobernanza";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/gobernanza' component={Gobernanza}/>
          <Route exact path='/records/:category_filter?' component={RecordList}/>
          <Route exact path='/events' component={EventList}/>
          <Route exact path='/repository' component={RepoList}/>
          <Route exact path='/videos' component={VideoList}/>
        </Switch>
      </Router> 
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
