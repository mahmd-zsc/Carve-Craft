import React from "react";
import "./temp.css";
import man from "../images/man.jpg";
import women from "../images/women.jpg";
import old_man from "../images/old man.jpg";
import engineer from "../images/engner.jpg";
import Card from "./card";
function Team() {
  return (
    <div
      id="team"
      className="team relative py-6 h-[800px] flex  |  sm:h-auto sm:px-4   sm:block |  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-20 "
    >
      <img
        className=" rounded-full absolute  right-14 w-40 m-auto |  sm:static sm:m-0 sm:w-56 sm:ml-80 | md:ml-0 md:w-72 | lg:w-80 lg:my-auto lg:justify-self-center   "
        src={women}
        alt="engineer"
      />
      <img
        className=" rounded-full  w-52 absolute  top-32 left-10 | sm:relative sm:-top-20 sm:left-12  sm:w-80 | md:static  md:left-0 md:top-0 md:order-first md:mt-auto | lg:my-auto lg:justify-self-center  "
        src={man}
        alt="engineer"
      />
      <img
        className=" rounded-full w-72 absolute top-60 right-0 | sm:w-96 sm:top-80 sm:right-4 | md:right-0 md:left-1/2 md:-translate-x-1/2 | lg:left-52 lg:translate-x-0 lg:w-[500px]  "
        src={old_man}
        alt="engineer"
      />
      <img
        className=" rounded-full w-36 absolute top-96 left-20 | sm:relative sm:w-64 sm:top-0 | md:w-72 | lg:m-auto lg:justify-self-center lg:left-0"
        src={engineer}
        alt="engineer"
      />
      <Card />
    </div>
  );
}

export default Team;
