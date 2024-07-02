import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

const ThirdMain = () => {
  const container = useRef();
  // const tl = useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to([".img1", ".img2", ".img3", ".img4"], {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 80%",
          // markers: true,
          scrub: true,
          toggleActions: "restart pause reverse none",
        },
        stagger: 1,
        x: 200,
        opacity: 1,
        duration: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="flex flex-wrap justify-center w-[1000px]  gap-4 mt-4 "
    >
      <img
        className="  img1 opacity-0 w-96 h-96 hover:scale-105 duration-200"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/2d16fd38-f931-4ea7-8e9f-e39322c50186/nike-just-do-it.jpg"
        alt="shoe"
      />
      <img
        className="img2 opacity-0 w-96 h-96 hover:scale-105 duration-200"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/023cd51d-143f-4242-8845-4f52eaa89cc6/nike-just-do-it.jpg"
        alt="shoe"
      />
      <img
        className="img3 opacity-0 w-96 h-96 hover:scale-105 duration-200"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/618f306d-5c1a-4b42-8b0a-77650c1928de/nike-just-do-it.jpg"
        alt="shoe"
      />
      <img
        className="img4 opacity-0 w-96 h-96 hover:scale-105 duration-200"
        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/73c4a613-c354-4bd5-9df8-e0cc7705c467/nike-just-do-it.jpg"
        alt="shoe"
      />
    </div>
  );
};

export default ThirdMain;
