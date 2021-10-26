import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import OperatorSignin from "./components/OperatorSignin/Signin";
import ManagerSignin from "./components/ManagerSignin/Signin";
import Admin from "layouts/Admin.js";
import Manager from "layouts/Manager.js"

//const hist = createBrowserHistory();

ReactDOM.render(
  <Router>
      <Router>
        {/* <Navbar /> */}
          <Route component={OperatorSignin} path="/operatorsignin" exact />
          <Route component={ManagerSignin} path="/managersignin" />
          {/* <Route component={Signup} path="/signup"  /> */}
          <Route component={Admin} path="/admin"  />
          <Route component={Manager} path="/manager"  />
      </Router>
  </Router>,
  document.getElementById("root")
);
