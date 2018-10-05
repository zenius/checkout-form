import React from "react";

export const Container = function(props) {
  return (
    <div className="Container">
       {props.children}
    </div>
  );
};
