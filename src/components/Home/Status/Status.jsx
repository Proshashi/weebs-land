import React, { useState } from "react";
import StatusTextBox from "./StatusTextBox/StatusTextBox";
import StatusMedias from "./StatusMedias/StatusMedias";
import { connect } from "react-redux";
import { createStatus } from "./StatusActions";
import validator from "validator";

const Status = props => {
  const [statusText, setStatusText] = useState("");
  const [statusPhoto, setStatusPhoto] = useState(null);
  const [statusVideo, setStatusVideo] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  const { createStatus } = props;
  const { uid, loading } = props;

  const handleChange = e => {
    setStatusText(e.target.value);
  };

  const handleImageChange = image => {
    setStatusPhoto(image);
  };

  const handleSubmit = e => {
    const comments = [];
    const reactions = [];
    e.preventDefault();
    if (!validator.isEmpty(statusText.trim()) || statusVideo || statusPhoto) {
      setIsPosting(true);

      const data = {
        statusText,
        statusPhoto,
        statusVideo,
        uid,
        comments,
        reactions
      };

      createStatus(data).then(() => {
        setStatusText("");
        setIsPosting(false);
      });
    } else {
      return console.log("Details please");
    }
  };
  return (
    <div className="__otaku_home-status">
      <form id="status_create_form" onSubmit={handleSubmit}>
        <StatusTextBox onChange={handleChange} text={statusText} />
        <StatusMedias
          loading={isPosting}
          onChange={handleImageChange}
          photo={statusPhoto}
        />
      </form>
    </div>
  );
};

const mapState = state => {
  return {
    uid: state.firebase.auth.uid,
    loading: state.async.loading
  };
};

const mapDispatch = { createStatus };

export default connect(mapState, mapDispatch)(Status);
