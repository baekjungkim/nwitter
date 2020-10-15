import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import NoMatch from "routes/NoMatch";

export default ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={NoMatch} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="*" component={NoMatch} />
        </Switch>
      )}
    </Router>
  );
};
