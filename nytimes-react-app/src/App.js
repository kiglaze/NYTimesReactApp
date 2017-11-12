import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Form from "./components/Form";

const App = () => 
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
