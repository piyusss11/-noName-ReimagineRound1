import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const FirstMain = () => {
  const box = useRef()
    useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".img",{
        scale:1,
        opacity:1,
        scrollTrigger:{
          scrub:true,
          trigger:box.current,
          // markers:true,
          end:"bottom 80%"
        }
      })
      gsap.to(".img2",{
        scale:1,
        opacity:1,
        scrollTrigger:{
          scrub:true,
          trigger:box.current,
          // markers:true,
       
          end:"bottom 80%"
        }
      })
    },{scope:box})
  return (
    <div ref={box} className="flex my-4 h-screen">
      <img
        className=" rounded-lg scale-0 opacity-0 img"
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-road-running-shoes-9ln3lK.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-center ml-36 scale-0 opacity-0 img2 gap-2 ">
        <h1 className="text-2xl">Nike Pegasus 41</h1>
        <h1 className="text-[50px] leading-[50px] font-bold text-center">DONT WASTE YOUR ENERGY</h1>
        <h1 className="text-xl text-center w-full">
          Run in Pegasus.Feel the responsive energy return of Air Zoom and
          all-new ReactX foam
        </h1>
        <button className="bg-black text-white rounded-full px-4 py-1 mt-2">Shop</button>
      </div>
    </div>
  );
};

export default FirstMain;
