import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Intro = () => {
  const div = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(div.current, {
        y: 200,
        opacity: 1,
      });
      gsap.to(".nikeText", {
        y:-100,
        scrollTrigger: {
          scrub: true,
          trigger: div.current,
          // markers: true,
          start: "-40% -40%",
          end: "bottom 80%",
        },
      });
    },
    { scope: div }
  );
  return (
    <div ref={div} className="bg-black text-white m-auto h-screen  ">
      <h1 className="nikeText text-[120px] font-bold text-center leading-[100px]   pt-20">
        MOVING FORWARD TOGETHER
      </h1>
      <h1 className="nikeText text-5xl text-center w-2/3 m-auto   pt-20">
        Our purpose is to move the world forward through the power of sport.
        Worldwide, we&apos;re leveling the playing field, doing our part to
        protect our collective playground and expanding access to sport for
        everyone.
      </h1>
    </div>
  );
};

export default Intro;
