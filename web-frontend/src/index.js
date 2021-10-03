import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

//const hist = createBrowserHistory();

ReactDOM.render(
  <Router>
      <Router>
        {/* <Navbar /> */}
        <Switch>  
        <Route path='/' component={Signin}  exact/>
        <Route  path='/signup' component={Signup} />
      
        </Switch>
      </Router>
  </Router>,
  document.getElementById("root")
);
