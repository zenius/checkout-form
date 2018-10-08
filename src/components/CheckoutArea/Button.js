import React from "react";
export const Button = function(props) {
  const { name } = props;
  return (
    <div className={name}>
      <button>Book Securely</button>
    </div>
  );
};
