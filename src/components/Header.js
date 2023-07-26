import React, { useRef } from "react";
import menu from "./images/menu.png";

function Header() {
  let link = [
    {
      text: "Systems",
      id: "systems",
    },
    {
      text: "experience",
      id: "experience",
    },
    {
      text: "Our Team",
      id: "team",
    },
    {
      text: "Projects",
      id: "projects",
    },
    {
      text: "call us",
      id: "call",
    },
  ];

  let BoxLinks = useRef();
  let menuClick = (e) => {
    let ul = BoxLinks.current;
    ul.classList.toggle("hidden");
  };

  return (
    <div className="header bg-white container relative m-auto py-4 lg:p-4 flex justify-between items-center">
      <h1 className="logo font-bold text-2xl tracking-wider">CarveCraft</h1>
      <ul className="gap-6 hidden lg:flex">
        {link.map((a) => (
          <li
            className="hover:text-orange-500 duration-300 cursor-pointer text-md font-thin"
            key={a.id}
          >
            <a href={"#" + a.id}>{a.text}</a>
          </li>
        ))}
      </ul>
      <img
        className="w-5 lg:hidden cursor-pointer"
        onClick={menuClick}
        src={menu}
        alt="menu"
      />
      <ul
        ref={BoxLinks}
        className="menu_Link z-50 absolute right-4 top-20 lg:hidden hidden flex flex-col items-end shadow-md w-40 gap-[1px] duration-1000 bg-mainBg"
      >
        {link.map((a) => (
          <li
            className="hover:text-orange-500 hover:pl-4 duration-300 cursor-pointer text-sm font-thin w-full p-2 bg-white block"
            key={a.id}
          >
            {a.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
