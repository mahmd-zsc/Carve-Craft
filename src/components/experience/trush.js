import React from "react";
import img from "../images/check.png";
function Trush({ text }) {
  return (
    <div className="flex items-center gap-4">
      <img className="w-4 h-4"  src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default Trush;
