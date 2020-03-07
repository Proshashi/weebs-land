import React from "react";
import { Avatar } from "antd";

const PostHeader = () => {
  return (
    <div className="__otaku_home-posts--post__header">
      <div className="__otaku_home-posts--post__header_avatar">
        <Avatar>U</Avatar>
      </div>
      <div className="__otaku_home-posts--post__header_data">
        <div className="__otaku_home-posts--post__header_data-name">Shashi</div>
        <div className="__otaku_home-posts--post__header_data-date">
          2076/2/25 15:20
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
