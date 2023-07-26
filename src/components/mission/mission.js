import React, { useEffect, useRef } from "react";
import Box from "./box";
import img1 from "../images/will-suddreth-o54RjF-C7xo-unsplash.jpg";
import img2 from "../images/philip-swinburn-vS7LVkPyXJU-unsplash.jpg";
import img3 from "../images/austin-ramsey-1SZsZjtCUBI-unsplash.jpg";
import "./mission.css";
function Mission() {
  let mission = useRef(null);
  let headers = [
    {
      header: "about us",
      text: "professional service provider specializing in woodworking and construction, offering expertise in the design, fabrication, installation, and repair of wooden structures",
    },
    {
      header: "our strategy",
      text: "involves meticulous planning and execution of key business aspects, such as market analysis, target audience identification, pricing, marketing, resource allocation, and customer satisfaction initiatives",
    },
    {
      header: "our mission",
      text: "deliver exceptional craftsmanship, superior quality, and customer satisfaction by providing innovative and personalized woodworking solutions, while maintaining a commitment to professionalism, integrity",
    },
  ];
  let images = [img1, img2, img3];


  return (
    <div
      ref={mission}
      className="mission bg-mainBg grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden px-4 "
    >
      <Box header={headers[0].header} text={headers[0].text} bg="" />
      <img src={images[2]} alt="img" />
      <Box header={headers[1].header} text={headers[1].text} />
      <img src={images[1]} alt="img" />
      <Box header={headers[2].header} text={headers[2].text} />
      <img src={images[0]} alt="img" />
    </div>
  );
}

export default Mission;
