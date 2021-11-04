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
import Report from "@material-ui/icons/Assessment";
// core components/views for Admin layout
import ManagerDashboard from "views/ManagerDashboard/Dashboard";
import ManagerReports from "views/ManagerReports/ManagerReports";
import ManagerProfile from "views/ManagerProfile/ManagerProfile";


const managerDashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: ManagerDashboard,
    layout: "/manager",
  },
  {
    path: "/reports",
    name: "View Reports",
    icon: Report,
    component: ManagerReports,
    layout: "/manager",
  },
  
];

export default managerDashboardRoutes;
