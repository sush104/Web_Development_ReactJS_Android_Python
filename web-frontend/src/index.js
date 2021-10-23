import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Admin from "layouts/Admin.js";


//const hist = createBrowserHistory();

ReactDOM.render(
  
  

  <Router>
      <Router>
        {/* <Navbar /> */}
        <Switch>  
        <Route path='/signin' component={Signin}  exact={true}/>
        <Route  path='/signup' component={Signup} />
        <Route path="/admin" component={Admin} />
      
        </Switch>
      </Router>
  </Router>,
  document.getElementById("root")
);
