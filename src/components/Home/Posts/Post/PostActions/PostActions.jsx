import React, { useState } from "react";
import { Love, Comment } from "../../../../Includes/Icons/Icons";

const PostActions = () => {
  const [love, setLove] = useState();

  const onChange = e => {
    const checkedState = e.target.checked;
    setLove(checkedState);
  };

  return (
    <div className="__otaku_home-posts--post__actions">
      <input type="checkbox" id="love" onChange={onChange} />
      <label htmlFor="love">
        <Love color={love ? "#ff0000" : "#ccc"} height="30" width="30" />
      </label>

      <Comment color="#ccc" height="30" width="30" />
    </div>
  );
};

export default PostActions;
