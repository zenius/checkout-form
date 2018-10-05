import React from "react";

export const Overlay = function(props) {
  return (
    <div className="Overlay">
      <img src={props.image} alt="background" />
    </div>
  );
};
