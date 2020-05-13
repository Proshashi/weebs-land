import React from "react";
import { Link } from "react-router-dom";

import { Home } from "../../../Includes/Icons/Icons";

const NavHome = () => {
  return (
    <Link to="/">
      <Home height="20" width="20" />
    </Link>
  );
};

export default NavHome;
