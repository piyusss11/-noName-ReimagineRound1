import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const FourthMain = () => {
  const div = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".img", {
        y: -100,
        scale: 0,
        opacity:0,
        scrollTrigger: {
          trigger:div.current,
          // start:"top top",
          end: "bottom 80%",
          // markers: true,
          scrub: 1,
        },
      });
      gsap.from(".text", {
        y: 200,
        scale: 0,
        opacity:0,
        stagger:1,
        scrollTrigger: {
          trigger:div.current,
          // start:"top top",
          end: "bottom 80%",
          // markers: true,
          scrub: 1,
        },
      });
    },
    { scope: div }
  );
  return (
    <div ref={div} className="h-screen">
      <img
        className="rounded-lg img opacity-100 scale-100"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1903,c_limit/67c2358c-39ed-49ec-a068-d5292543a15a/nike-kids.png"
        alt=""
      />
      <div className="text-center w-[800px] m-auto text">
        <h1 className="text-[80px] font-bold">SKY, NO LIMITS</h1>
        <h1>
          Grind,Slide,Crave,Flip - tackle every trick fearlessly and set no
          limits. Inspired by your heritage and the confidence
        </h1>
        <h1>
          skateboarding inspires in the young Olmpian, Sky Brown&apos;s New Pogo
          SB invites you to ride with courage.
        </h1>
      </div>
    </div>
  );
};

export default FourthMain;
