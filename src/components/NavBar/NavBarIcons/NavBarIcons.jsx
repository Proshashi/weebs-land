import React from "react";
import NavHome from "./Home/NavHome";
import NavUser from "./User/NavUser";
import NavCreate from "./Create/NavCreate";

const NavBarIcons = () => {
  return (
    <div className="__otaku_nav-icons">
      <span>
        <NavHome />
      </span>
      <span>
        <NavUser />
      </span>
      <span>
        <NavCreate />
      </span>
    </div>
  );
};

export default NavBarIcons;
