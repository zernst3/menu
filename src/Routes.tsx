import React from "react";
import { NotFound, Home, Navbar, AdminDashboard } from "./Components";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const Routes: React.FC<any> = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" render={(props: any) => <Home />} />
        <Route
          exact
          path="/dashboard"
          render={(props: any) => <AdminDashboard />}
        />
        <Route path="/404" render={(props: any) => <NotFound />} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
