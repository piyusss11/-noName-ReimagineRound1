import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const SecondMain = () => {
  const div = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".img", {
        x: -800,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: div.current,
          start: "top 80%",
          end: "bottom 80%",
          // markers: true,
          scrub: true,
        },
      });
      gsap.from(".text", {
        x: 800,
        opacity: 0,
        scale: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: div.current,
          start: "top 80%",
          end: "bottom 80%",
          // markers: true,
          scrub: true,
        },
      });
    },
    { scope: div }
  );
  return (
    <div ref={div} className="">
      <img
        className="rounded-lg img"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1897,c_limit/3678a9a7-d0fc-4ec7-8ac6-f44a5a1e580c/nike-just-do-it.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center text">
        <h1 className="text-[80px] font-bold ">JORDAN SPORT</h1>
        <h1 className="w-1/2 text-center my-2 ">
          Rooted in basketball, influenced by street culture. Jazz Chisholm and
          Guard Rhyne Howard stunt in elevated pieces designed to complement
          performance and style
        </h1>
        <button className="bg-black text-white rounded-full px-4 py-1 mt-4 ">
          Shop
        </button>
      </div>
    </div>
  );
};

export default SecondMain;
