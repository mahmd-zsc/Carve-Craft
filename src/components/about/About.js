import React from "react";
import Question from "./question";
import "./about.css";
import carpenter from "../images/ht6uy-min.jpg";
import Card from "./card";
function About() {
  let card = [
    {
      id: 0,
      title: "Truss Systems",
      text: "versatile structural frameworks composed of interconnected beams",
    },
    {
      id: 1,
      title: "Technology",
      text: "encompasses innovative processes and advancements in the utilization",
    },
    {
      id: 2,
      title: "Materials",
      text: "determined by its specific characteristics such as density, strength, durability, grain pattern",
    },
    {
      id: 3,
      title: "Manufacturing",
      text: "determined by factors such as its cutting accuracy, stability, durability, safety features",
    },
  ];
  return (
    <div className="about px-4  bg-mainBg overflow-hidden relative   z-20  ">
      <div className="parent relative overflow-hidden   container m-auto ">
        <div className="qus">
          <Question />
          <img
            className=" w-[600px] sm:w-[700px] sm:-translate-x-20 -translate-x-1/2 left-1/2 absolute z-10 md:top-1/2 right-4 -translate-y-1/2 animate__animated animate__fadeInRight  "
            src={carpenter}
            alt=""
          />

          <div className="cards mt-80  z-50 relative  flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-10 mb-28 animate__animated animate__backInUp ">
            {card.map((c) => (
              <Card id={c.id} title={c.title} text={c.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
