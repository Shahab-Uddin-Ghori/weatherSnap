import React from "react";

function Button({ onClick, text, className }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
