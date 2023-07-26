import React, { useEffect, useRef } from "react";
import "./bosses.css";
function BossCard(props) {
  const up = useRef(null); // Initialize useRef with null


  return (
    <div
      ref={up}
      className="bossCard relative bg-white  w-[70%] flex flex-col items-center text-center gap-6 py-4 px-10 m-auto | sm:px-4  | md:py-12 md:hover:translate-y-9 duration-500  md:align-top md:h-[80%]   |  lg:py-20 lg:gap-8 lg:hover:-translate-y-9 "
    >
      <img
        className="w-16  rounded-full | sm:w-12 sm:h-12 | lg:w-16 lg:h-16"
        src={props.img}
        alt=""
      />
      <p className="  font-thin  leading-6 | md:leading-7 |  lg:text-lg">
        {props.description}
      </p>
      <div className="">
        <h6 className="  font-thin | sm:text-sm | lg:text-lg">{props.name}</h6>
        <p className=" font-bold | lg:text-xl">{props.job}</p>
      </div>
    </div>
  );
}

export default BossCard;
