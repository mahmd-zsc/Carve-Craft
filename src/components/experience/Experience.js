import React from "react";
import Block from "./block";
import img1 from "../images/alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg";
import img2 from "../images/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import Earning from "./Earning ";
import Lear from "./lear";
function Experience() {
  return (
    <div
      id="experience"
      className="experience pb-20 px-4 lg:px-20 bg-mainBg pt-40 grid sm:grid-cols-2 gap-4 overflow-hidden  "
    >
      <Block />
      <img className="lg:w-[300px]  sm:justify-self-end  " src={img1} alt="" />
      <Lear img={img2} />

      <Earning />
    </div>
  );
}

export default Experience;
