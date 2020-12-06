// eslint-disable-next-line no-unused-vars
import React from "react";
import { Switch } from "react-router-dom";

// import PrivateRoute from "./shared/routes/PrivateRoute";
import PublicRoute from "./shared/routes/PublicRoute";

// Layouts
// import AuthLayout from "./shared/layouts/AuthLayout";

import NotFound from "./shared/NotFound";
import Home from "./Home/Home";


const routes = [
  // All users
  { path: "/", exact: true, component: Home, route: PublicRoute },

  // Not Authorized users only - PublicRoute component
  // NOTE: you can pass layout prop. This layout component will wrapper your route component
  // { path: "/login", component: Login, route: PublicRoute, layout: AuthLayout },

  // Authorized users only - PrivateRoute component
  // NOTE: Can be restricted by passing roles array - roles: ["Admin"]
  // { path: "/profile", component: Profile, route: PrivateRoute },

  // 404 Not Found route
  { path: "*", component: NotFound, route: Switch },
];

export default routes;
