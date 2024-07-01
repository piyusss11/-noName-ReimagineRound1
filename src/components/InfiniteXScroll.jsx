import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const InfiniteXScroll = () => {
  const scrollanimate = useRef();
  // useGSAP(()=>{
  //   gsap.to(scrollanimate.current,{
  //     x:-900,
  //     duration:1,
  //     repeat:-1
  //   })
  // })
  
  return (
    <div
     
      className=" inline-flex flex-nowrap overflow-hidden "
    >
      <ul  ref={scrollanimate} className="flex items-center justify-center animate-infinite-scroll  gap-3">
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-road-running-shoes-RZm89S.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/90f458e7-38ac-4132-bb32-0aff816f891b/pegasus-41-road-running-shoes-SKDkNs.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/05ad2a05-0103-470b-8b10-c4cd9f5040ab/dunk-low-next-nature-shoes-grCrd2.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/1d715aaa-90a4-44d4-be74-4590554bd5de/p-6000-shoes-QcQbpx.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/9c78e4e6-f31b-4479-be66-f2fa71e157e3/tc-7900-shoes-M6plHb.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/b828c78d-c220-4880-93a9-55e2d05b3b41/calm-sandals-t1BKK6.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ba5ba3ff-28ca-4f90-8725-d831a278381b/sb-zoom-pogo-plus-skate-shoes.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/83b429cd-dd96-4473-a943-7eca39825412/air-max-2013-shoes-fdHT8K.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-40"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/dd5226a7-f7e8-4ebb-9185-ecc2c8be1c64/dunk-low-retro-se-shoes-3Wwfvb.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default InfiniteXScroll;
// 