import React, { useState } from "react";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("Token"));

  return isLoggedIn === "" ? <Login /> : <Outlet />;
}
