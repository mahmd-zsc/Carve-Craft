import React from "react";
import Form from "./form";
import Location from "./location";
import img from "../images/table.jpg"

function CallUs() {
  return (
    <div id="call" className="callUs bg-mainBg  mt-10 px-20 grid  | md:grid-cols-3 | border-t-2 border-main_origin">
      <Form />
      <Location />
      <img className="h-[300px] w-full md:h-full  lg:h-auto" src={img} alt="" />
    </div>
  );
}

export default CallUs;
