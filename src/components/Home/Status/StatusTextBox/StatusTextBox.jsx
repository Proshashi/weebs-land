import React from "react";

const StatusTextBox = props => {
  return (
    <div className="__otaku_home-status--textBox">
      <textarea
        placeholder="What's on the mind?"
        form="status_create_form"
        value={props.text}
        onChange={e => props.onChange(e)}
      />
    </div>
  );
};

export default StatusTextBox;
