import React, { useState } from "react";
import { Photo, Video } from "../../../Includes/Icons/Icons";
import Modal from "../../../Includes/Modal/Modal";

const StatusMedias = ({ loading, photo, onChange }) => {
  const [visible, setVisible] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const hide = () => {
    setVisible(false);
  };

  const handleFileChange = e => {
    const image = e.target.files[0];

    onChange(image);

    const reader = new FileReader();
    reader.onload = file => {
      setImageURL(file.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const modalContent = (
    <div>
      <input type="file" name="" id="" onChange={handleFileChange} />
      <button>Upload</button>
      <img src={photo} alt="" height="200" width="200" />
    </div>
  );

  return (
    <div className="__otaku_home-status--medias">
      <div
        style={{ width: "fitContent", cursor: "pointer" }}
        onClick={() => setVisible(true)}
      >
        <Photo height="30" width="30" />
        <Video height="30" width="30" />
      </div>
      <Modal visible={visible} hide={hide} content={modalContent} />
      <button type="submit" form="status_create_form" disabled={loading}>
        {loading ? "Posting...." : "Post"}
      </button>
    </div>
  );
};

export default StatusMedias;
