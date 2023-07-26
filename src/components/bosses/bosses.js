import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import "./bosses.css";
import BossCard from "./bosscard";

function Bosses() {
  let images = [img1, img2, img3];
  let data = [
    {
      id: 1,
      img: images[0],
      description:
        "Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      name: "Nill Smith",
      job: "Financial Director",
    },
    {
      id: 2,
      img: images[1],
      description:
        "Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      name: "Merry Kinnly",
      job: "Chief Accountant",
    },
    {
      id: 3,
      img: images[2],
      description:
        "Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
      name: "Frank Kinney",
      job: "Sales Manager",
    },
  ];
  return (
    // <div className="  bosses border-b relative  flex flex-col gap-4 items-center py-10 |   sm:px-4 sm:gap-10 sm:border-b-0 | md:flex-row md:h-[900px]    ">
    <div className="  bosses border-b relative flex flex-col gap-4 py-10  | sm:px-4 sm:gap-10 sm:border-b-0 |  md:flex-row  md:py-40    ">
      {data.map((c) => (
        <BossCard
          img={c.img}
          description={c.description}
          name={c.name}
          job={c.job}
          id={c.id}
        />
      ))}
    </div>
  );
}

export default Bosses;
