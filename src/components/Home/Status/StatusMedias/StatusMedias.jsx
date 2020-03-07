import React from "react";
import { Photo, Video } from "../../../Includes/Icons/Icons";
import { Button } from "antd";

const StatusMedias = () => {
  return (
    <div className="__otaku_home-status--medias">
      <Photo height="40" width="40" />
      <Video height="40" width="40" />
      <Button type="primary">Post</Button>
    </div>
  );
};

export default StatusMedias;
