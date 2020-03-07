import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = props => {
  return (
    <Link to={props.link}>
      <div className="__otaku_home-sidebar--items__item">
        <div className="__otaku_home-sidebar--items__item_icon">
          {props.avatar}
        </div>
        <div className="__otaku_home-sidebar--items__item_text">
          {props.text}
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
