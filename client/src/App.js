import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route path="*" component={Error404} />
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
