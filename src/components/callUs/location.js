import React from "react";

function Location() {
  return (
    <div className="bg-white flex flex-col gap-10 px-10 py-12">
      <div className="call">
        <h6 className=" text-main_origin font-bold text-lg mb-3">call us</h6>
        <p>1 (234) 567-891</p>
        <p>1 (234) 987-654</p>
      </div>
      <div className="loc">
        <h6 className=" text-main_origin font-bold text-lg mb-3">location</h6>
        <p>121 Rock Sreet, 21 Avenue,</p>
        <p>New York, NY 92103-9000</p>
      </div>
      <div className="services">
        <h6 className=" text-main_origin font-bold text-lg mb-3">
          top services
        </h6>
        <p>✔ Pre Design</p>
        <p>✔ Schematic Design</p>
        <p>✔ Design Development</p>
        <p>✔ Engineering Consultants</p>
      </div>
    </div>
  );
}

export default Location;
