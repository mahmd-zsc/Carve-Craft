import React from "react";

function Card() {
  return (
    <div className="card mt-auto z-10 bg-darkBlue w-[80%] flex flex-col px-6 py-4 gap-5 mx-auto | sm:py-12 sm:w-[60%] sm:mr-0 | md:w-[123%] md:my-20 md:z-10 md:relative right-20 | lg:w-full text-white ">
      <h2 className=" font-bold text-2xl  ">Our Team</h2>
      <p className=" text-sm leading-6  ">
        Nunc mi ipsum faucibus vitae aliquet. Pellentesque elit eget gravida cum
        sociis natoque penatibus. Urna duis convallis convallis tellus id
        interdum velit. Proin sed libero enim sed faucibus turpis in.
      </p>
      <button className="w-fit border border-white px-6 py-2 hover:text-darkBlue hover:bg-white duration-500 uppercase ">read more</button>
    </div>
  );
}

export default Card;
