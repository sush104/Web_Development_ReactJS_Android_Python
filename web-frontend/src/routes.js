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
import Move from "@material-ui/icons/PanTool";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import RepairPage from "views/Repair/Repair.js";
import Track from "views/Track/Map";
import MovePage from "views/Move/Move";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/move",
    name: "Move Bike",
    icon: Move,
    component: MovePage,
    layout: "/admin",
  },
  {
    path: "/repair",
    name: "Repair Bike",
    icon: Settings,
    component: RepairPage,
    layout: "/admin",
  },
  {
    path: "/track",
    name: "Track Bike",
    icon: Location,
    component: Track,
    layout: "/admin",
  },
];

export default dashboardRoutes;
