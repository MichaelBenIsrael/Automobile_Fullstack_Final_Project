import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../login/Login";
import Signup from "../signup/Signup";
import Forgotpassword from "../forgotpassword/Forgotpassword";
import Contact from "../contact/Contact";
import Dashboard from "../dashboard/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgotpassword" component={Forgotpassword} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
