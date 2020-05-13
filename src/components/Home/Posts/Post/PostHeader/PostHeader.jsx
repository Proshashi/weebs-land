import React from "react";
import { Avatar, Spin } from "antd";
import moment from "moment";

const PostHeader = ({ user, postedAt }) => {
  const date = postedAt.toDate();

  return (
    <div className="__otaku_home-posts--post__header">
      <div className="__otaku_home-posts--post__header_avatar">
        <Avatar>{user.name[0]}</Avatar>
      </div>
      <div className="__otaku_home-posts--post__header_data">
        <div className="__otaku_home-posts--post__header_data-name">
          {user.name}
        </div>
        <div className="__otaku_home-posts--post__header_data-date">
          {moment(date).calendar()}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
