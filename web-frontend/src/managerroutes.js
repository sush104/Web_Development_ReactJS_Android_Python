/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Location from "@material-ui/icons/Room";
import Settings from "@material-ui/icons/Settings";

// core components/views for Admin layout
import ManagerDashboardPage from "views/ManagerDashboard/Dashboard.js";
import ManagerReports from "views/ManagerReports/ManagerReports";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/Repair/Repair.js";
import Track from "views/Track/Map";

const managerDashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: ManagerDashboardPage,
    layout: "/manager",
  },
  {
    path: "/reports",
    name: "View Reports",
    icon: Dashboard,
    component: ManagerReports,
    layout: "/manager",
  }
];

export default managerDashboardRoutes;
