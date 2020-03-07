import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import PostActions from "./PostActions/PostActions";

const Post = () => {
  return (
    <div className="__otaku_home-posts--post">
      <PostHeader />
      <PostBody />
      <PostActions />
    </div>
  );
};

export default Post;
