import React from "react";
import Status from "./Status/Status";
import Posts from "./Posts/Posts";
import SidebarHome from "./SidebarHome/SidebarHome";

const Home = () => {
  return (
    <div className="__otaku_home">
      <div className="__otaku_home-left">
        <SidebarHome />
      </div>
      <div className="__otaku_home-mid">
        <Status />
        <Posts />
      </div>
      <div className="__otaku_home-right">
        <div>Wrapper right</div>
      </div>
    </div>
  );
};

export default Home;
