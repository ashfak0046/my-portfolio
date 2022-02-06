import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Project from "./pages/Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
