import React from "react";
import { Link } from "react-router-dom";

import { Create } from "../../../Includes/Icons/Icons";

const NavCreate = () => {
  return (
    <Link to="/create">
      <Create height="30" width="30" />
    </Link>
  );
};

export default NavCreate;
