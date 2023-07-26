import React from "react";

function Form() {
  return (
    <div className="md:mr-5 ">
      <form className="flex flex-col gap | " action="#">
        <input
          className=" h-20 border-darkBlue bg-mainBg  border-b-2 outline-none "
          type="text"
          name=""
          id=""
          placeholder="Enter your Name"
        />
        <input
          className="h-20 border-darkBlue bg-mainBg  border-b-2 outline-none"
          type="email"
          name=""
          id=""
          placeholder="Enter a valid email address"
        />
        <input
          className="h-20 border-darkBlue bg-mainBg  border-b-2 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Enter your Phone (e.g +12155552675)"
        />
        <textarea
          className="bg-mainBg h-20 border-darkBlue   border-b-2 outline-none"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <input
        className="text-white uppercase bg-main_origin w-full  px-10 py-4 mt-10 mb-5 hover:bg-darkBlue duration-500 font-bold tracking-wider cursor-pointer"
        type="button"
        value="submit"
      />
    </div>
  );
}

export default Form;
