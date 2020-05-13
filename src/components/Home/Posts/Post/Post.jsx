import React, { useEffect, useState, Fragment } from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import PostActions from "./PostActions/PostActions";
import { users } from "../../../../app/db/db";
import { Spin } from "antd";

const Post = ({ post }) => {
  const [userData, setUserData] = useState();
  const [fetchingUser, setFetchingUser] = useState();

  useEffect(() => {
    setFetchingUser(true);
    users
      .doc(post.uid)
      .get()
      .then(user => {
        setUserData(user.data());
        setFetchingUser(false);
      });
  }, [post]);

  return (
    <div className="__otaku_home-posts--post">
      {fetchingUser || !userData ? (
        <Spin />
      ) : (
        <Fragment>
          <PostHeader user={userData} postedAt={post.postedAt} />
          <PostBody body={post.statusText} />
          <PostActions post={post} />
        </Fragment>
      )}
    </div>
  );
};

export default Post;
