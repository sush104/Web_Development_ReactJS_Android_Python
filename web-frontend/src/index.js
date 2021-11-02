import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import Signup from "./components/Signup/Signup";
import OperatorSignin from "./components/OperatorSignin/Signin";
import ManagerSignin from "./components/ManagerSignin/Signin";
import Admin from "layouts/Admin.js";
import Manager from "layouts/Manager.js"

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const user = "token from cookie";
//   return <Route {...rest} render={(props) => (
//       isLogin
//           ? <Component {...props} user={user}/>
//           : <Redirect to='/logoperatorsigin' />
//       )} 
//   />
// }

//const hist = createBrowserHistory();

ReactDOM.render(
  <Router>
      <Router>
        <Route component={OperatorSignin} path="/operatorsignin" exact />
        <Route component={ManagerSignin} path="/managersignin" exact />
        <Route path="/admin" component={Admin} />
        <Route path="/manager" component={Manager}  />  
          </Router>
  </Router>,
  document.getElementById("root")
);
