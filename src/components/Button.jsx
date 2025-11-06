import React from "react";

const Button = ({onClick, text}) => {
  return (
    <button className="bg-[#2563eb] text-white rounded-md border-none px-2 py-2 text-[13px]" onClick={onClick} >
      {text}
    </button>
  );
};

export default Button;