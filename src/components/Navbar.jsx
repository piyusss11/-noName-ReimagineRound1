import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = useRef();
  useGSAP(() => {
    gsap.from(nav.current, {
      y: -100,
    });
  });
  return (
    <div
      ref={nav}
      className="flex justify-between items-center py-2  text-lg px-12 bg-black text-white"
    >
      <NavLink to={"/"}>
        <img className="w-12" src="./images/nike.png" alt="nike logo" />
      </NavLink>
      <div className="flex gap-8 font-semibold">
        <h1>Home</h1>
        <a href="#Men">Men</a >
        <a href="#Women">Women</a >
        <a href="#Kids">Kids</a >
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center">
            <i className="text-white hover:opacity-40 cursor-pointer px-4 border-l-0  rounded-full rounded-r-none   ri-search-line"></i>
            <input
              className="px-4 bg-[#E5E5E5] rounded-full rounded-l-none outline-none text-base  border-r-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <i className="ri-heart-line"></i>
        <i className="ri-shopping-cart-line"></i>
      </div>
    </div>
  );
};

export default Navbar;
