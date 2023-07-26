import React from "react";
import img1 from "../images/jan-huber-kO8f82u73Es-unsplash.jpg";
import img2 from "../images/shane-mclendon-9jPJrfLTBi0-unsplash.jpg";
import img3 from "../images/scott-blake-x-ghf9LjrVg-unsplash.jpg";
function Projects() {
  let images = [img1, img2, img3];
  return (
    <div id="project" className="projects flex flex-col m-auto items-center gap-10 px-10 my-5 | md:gap-16    ">
      <h2 className="font-bold text-2xl : md:text-3xl">
        Our Construction Projects
      </h2>
      <p className="text-center  w-[80%] opacity-40">
        Dui ut ornare lectus sit. Tincidunt lobortis feugiat vivamus at augue
        eget arcu. Vulputate mi sit amet mauris commodo quis imperdiet massa
        tincidunt. Sodales neque sodales ut etiam sit amet nisl. Blandit libero
        volutpat sed cras ornare arcu dui vivamus arcu. Luctus venenatis lectus
        magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a.
      </p>
      <div className="images grid gap-2 | md:grid-cols-3  ">
        {images.map((g) => (
          <img className="h-80 w-full  duration-500" src={g} alt="" />
        ))}
      </div>

      <button className="text-white uppercase bg-main_origin w-fit m-auto px-10 py-4 hover:bg-darkBlue duration-500 font-bold tracking-wider">
        learn more
      </button>
    </div>
  );
}

export default Projects;
