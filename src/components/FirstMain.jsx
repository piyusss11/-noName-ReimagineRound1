import { useGSAP } from "@gsap/react";

const FirstMain = () => {
    useGSAP(()=>{
        
    })
  return (
    <div className="flex ">
      <img
        className=" rounded-lg"
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-road-running-shoes-9ln3lK.png"
        alt=""
      />
      <div className="flex flex-col items-center justify-center ml-36 ">
        <h1 className="text-2xl">Nike Pegasus 41</h1>
        <h1 className="text-[50px] font-bold">DONT WASTE YOUR ENERGY</h1>
        <h1 className="text-xl text-center w-1/2">
          Run in Pegasus.Feel the responsive energy return of Air Zoom and
          all-new ReactX foam
        </h1>
        <button className="bg-black text-white rounded-full px-4 py-1 mt-4">Shop</button>
      </div>
    </div>
  );
};

export default FirstMain;
