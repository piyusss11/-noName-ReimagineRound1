import { NavLink } from "react-router-dom";
import InfiniteSecond from "../components/InfiniteSecond";
import InfiniteXScroll from "../components/InfiniteXScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SplashPage = () => {
  const textanimate = useRef();

  useGSAP(() => {
    gsap.from(textanimate.current, {
      scale: 0,
      duration: 0.5,
    });
  });
  return (
    <div className="flex flex-col  justify-center items-center h-screen gap-20 ">
      <InfiniteXScroll />
      <NavLink to={"/home"}>
        <div>
          <img
            className="w-36 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
            alt="logo"
          />
          <h1 ref={textanimate} className="text-2xl px-3">
             Just do it
          </h1>
        </div>
      </NavLink>
      <InfiniteSecond />
    </div>
  );
};

export default SplashPage;
