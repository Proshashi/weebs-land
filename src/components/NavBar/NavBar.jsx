import React from "react";
import Logo from "./Logo/Logo";
import SearchWeeb from "./Search/SearchWeeb";
import NavBarIcons from "./NavBarIcons/NavBarIcons";

const NavBar = () => {
  return (
    <div className="__otaku_nav">
      <div className="__otaku_nav-wrapper1">
        <Logo />
        <SearchWeeb />
      </div>
      <div className="__otaku_nav-wrapper2">
        <NavBarIcons />
      </div>
    </div>
  );
};

export default NavBar;
