import React, { useEffect, useRef } from "react";

function Systems() {
  let h2 = useRef(null);
  let p = useRef(null);
  return (
    <div id="systems" className="systems bg-mainBg py-20 text-center px-10 ">
      <h2 ref={h2} className="font-bold text-[30px] sm:text-[50px] mb-5   ">
        Wood Truss Systems
      </h2>
      <p
        ref={p}
        className="text-gray-500 text-[15px]  md:text-[25px] lg:w-[900px] sm:w-[700px] m-auto max-w-full "
      >
        The leading supplier of new and used truss equipment. Combining the
        qualities and expertise you should expect from an industry supplier.
      </p>
    </div>
  );
}

export default Systems;
