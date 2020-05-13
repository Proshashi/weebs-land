import React from "react";
import Rodal from "rodal";
import "./Modal.css";

const Modal = props => {
  const { visible, content } = props;
  return (
    <Rodal
      visible={visible}
      onClose={props.hide}
      showCloseButton="true"
      className="__otaku_modal"
      animation="zoom"
      width="500"
    >
      <div>{content}</div>
    </Rodal>
  );
};

export default Modal;
