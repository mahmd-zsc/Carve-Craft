import React from "react";

function Lear({ img }) {
  return (
    <div className="learn">
      <img className="lg:w-80 mb-5 " src={img} alt="" />
      <button className=" bg-main_origin text-white px-10 py-2 mt-5 font-bold text-lg duration-500 hover:bg-cyan-900 block m-auto sm:m-0">learn more</button>
    </div>
  );
}

export default Lear;
