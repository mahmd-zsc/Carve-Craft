import React from "react";
import Trush from "./trush";

function Earning() {
  let text = [
    "Component Production Equipment",
    "Wall Panel Framing and Sheathing Equipment",
    "Linear Saws",
    "Saws-Component, Radial Arm, Automated Measuring Systems",
    "Material Handling Systems",
    "Roll-Off Truss Trailers",
    "Waste Reduction Equipment",
    "Replacement Production Surfaces",
    "Plant Layout Experts/Production Consultants",
  ];
  return (
    <div className="earning">
      <h6 className="mb-5 font-bold tracking-wider text-xl sm:w-[500px]">Earning your business with experience, expertise, and trust.</h6>
      {text.map((c) => (
        <Trush text={c} />
      ))}
    </div>
  );
}

export default Earning;
