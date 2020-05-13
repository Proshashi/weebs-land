import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { fetchPosts } from "./PostsActions";
import { Spin } from "antd";

const Posts = props => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const { fetchPosts } = props;
    fetchPosts().then(() => {
      setFetching(false);
    });
  }, []);

  const { posts } = props;

  console.log(posts);

  return (
    <div className="__otaku_home-posts">
      {fetching ? (
        <Spin />
      ) : (
        posts.map(post => {
          return (
            <div>
              <Post post={post} key={post.uid + post.postedAt} />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapDispatch = { fetchPosts };

const mapState = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapState, mapDispatch)(Posts);
