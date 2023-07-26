import React from "react";

function Box({ header, text, bg }) {
  return (
    <div className="box py-10 px-4 text-center flex flex-col justify-center items-center gap-4 text-white      ">
      <h3 className="text-2xl">{header}</h3>
      <p className=" tracking-wide">{text}</p>
    </div>
  );
}

export default Box;
