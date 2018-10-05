import React from "react";

export const Input = function(props) {
  const { name, label, type, placeholder } = props;
  return (
    <div class="Input">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} placeholder={placeholder} />
    </div>
  );
};
