import React, { useState } from "react";
import { Love, Comment } from "../../../../Includes/Icons/Icons";

const PostActions = ({ post }) => {
  const [love, setLove] = useState();
  const { id } = post;

  const onChange = e => {
    const checkedState = e.target.checked;
    setLove(checkedState);
  };

  return (
    <div className="__otaku_home-posts--post__actions">
      <input type="checkbox" id={`love${id}`} onChange={onChange} />
      <label htmlFor={`love${id}`}>
        <Love color={love ? "#ff0000" : "#808080"} height="20" width="20" />
      </label>

      <Comment color="#808080" height="20" width="20" />
    </div>
  );
};

export default PostActions;
