import React from "react";
import "./structures.css";
import img from "../images/rerrr-min.jpg";
function Structures() {
  return (
    <div className="Structures relative  px-4 py-48  ">
      <div className="parent w-[70%] bg-mainBg m-auto  px-10 py-20 flex flex-col  text-center justify-center | sm:w-auto | md:px-28 | lg:px-52">
        <img className=" relative -top-40  " src={img} alt="" />
        <div className="info flex flex-col gap-5 | md:gap-20">
          <h2 className="font-bold text-3xl | md:text-4xl | lg:px-20">
            An innovative design suite for wooden structures
          </h2>
          <p className=" opacity-50 leading-8 | md:text-lg">
            Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut
            pharetra sit amet aliquam id diam maecenas ultricies mi.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras
            sed felis eget. Amet risus nullam eget felis eget nunc. Lacus
            vestibulum sed arcu non odio euismod. Consectetur adipiscing elit
            duis tristique.
          </p>
          <button className="text-white uppercase bg-main_origin w-fit m-auto px-10 py-4 hover:bg-darkBlue duration-500 font-bold tracking-wider">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Structures;
