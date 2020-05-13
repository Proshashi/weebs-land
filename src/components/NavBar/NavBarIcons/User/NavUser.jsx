import React from "react";
import { Dropdown, Menu } from "antd";
import {
  SettingOutlined,
  UserAddOutlined,
  HeartOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { User } from "../../../Includes/Icons/Icons";
import { connect } from "react-redux";
import { LogOut } from "../../../Auth/AuthActions";

const NavUser = props => {
  const { name } = props.profile;

  const menu = (
    <div className="__otaku_nav-icons--user__dropdown">
      <Link to="/profile" className="__otaku_nav-icons--user__dropdown_image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
          alt=""
        />
      </Link>
      <Link to="/profile" className="__otaku_nav-icons--user__dropdown_name">
        <span>{name}</span>
      </Link>
      <div className="__otaku_nav-icons--user__dropdown_options">
        <Link
          to="weebs/followers"
          className="__otaku_nav-icons--user__dropdown_options-followers"
        >
          <HeartOutlined />
          &nbsp; Followers
        </Link>
        <Link
          to="weebs/following"
          className="__otaku_nav-icons--user__dropdown_options-following"
        >
          <UserAddOutlined />
          &nbsp; Following
        </Link>
        <Link
          to="/settings"
          className="__otaku_nav-icons--user__dropdown_options-setting"
        >
          <SettingOutlined />
          &nbsp; Settings
        </Link>
      </div>

      <div className="__otaku_nav-icons--user__dropdown_logout">
        <button onClick={props.LogOut}>Log Out</button>
      </div>
    </div>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      className="__otaku_nav-icons--user"
    >
      <span>
        <User height="20" width="20" />
      </span>
    </Dropdown>
  );
};

const mapState = state => {
  return {
    profile: state.firebase.profile
  };
};

const mapDispatch = { LogOut };

export default connect(mapState, mapDispatch)(NavUser);
