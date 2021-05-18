import React from "react";
import "./Box.css";

const Box = ({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "red",
}) => {
  return (
    <div className="Box">
      <div
        className="Box-box"
        style={{ height: `${height}em`, width: `${width}em`, backgroundColor }}
      ></div>
      <button className="Box-remove-btn" onClick={() => handleRemove(id)}>
        X
      </button>
    </div>
  );
};

export default Box;
