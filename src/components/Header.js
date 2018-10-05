import React from "react";

export const Header = function(props) {
  const { onChange } = props;
  return (
    <div className="Header" onChange={onChange}>
      <header>
        <input type="range" min="1" max="100" step="1" id="slider" />
      </header>
    </div>
  );
};
