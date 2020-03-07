import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import {
  SettingOutlined,
  UserAddOutlined,
  HeartOutlined
} from "@ant-design/icons";
import { Avatar } from "antd";

const SidebarItems = () => {
  const items = [
    { text: "Shashi Gyawali", avatar: <Avatar>S</Avatar>, link: "/profile" },
    { text: "Followers", avatar: <HeartOutlined />, link: "/weebs/followers" },
    {
      text: "Following",
      avatar: <UserAddOutlined />,
      link: "/weebs/following"
    },
    { text: "Settings", avatar: <SettingOutlined />, link: "/setting" }
  ];
  return (
    <div className="__otaku_home-sidebar--items">
      {items.map(({ text, avatar, link }) => {
        return <SidebarItem text={text} avatar={avatar} link={link} />;
      })}
    </div>
  );
};

export default SidebarItems;
