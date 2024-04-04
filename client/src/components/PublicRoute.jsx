import React, { useState } from "react";

import { Outlet } from "react-router-dom";

export default function PublicRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("Token"));

  return isLoggedIn === "" ? <Outlet /> : <div>YOu are already logged in</div>;
}
