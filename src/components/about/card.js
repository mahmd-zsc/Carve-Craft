import React from "react";
import img1 from "../images/roof.png";
import img2 from "../images/nanotechnology.png";
import img3 from "../images/wood.png";
import img4 from "../images/table-saw.png";

function Card({ id, title, text }) {
  let images = [img1, img2, img3, img4];
  return (
    <div className="card shadow-md shadow-gray-500 bg-white px-10 py-10 duration-500 relative hover:-translate-y-5">
      <img className="w-16" src={images[id]} alt="" />
      <h6 className="my-5 tracking-wide">{title}</h6>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

export default Card;
