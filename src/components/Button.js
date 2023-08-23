import React from "react";

const Button = ({ label, onclickfn, style }) => {
  return (
    <button onClick={onclickfn} className={style}>
      {label}
    </button>
  );
};

export default Button;
