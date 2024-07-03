import { kidsList, menList, womenList } from "@/constants/dummyData";
import FirstMain from "./FirstMain";
import SecondMain from "./SecondMain";
import ShopCarousel from "./ShopCarousel";
import ThirdMain from "./ThirdMain";
import FourthMain from "./FourthMain";


const MainContainer = () => {
  const men = menList;
  const women = womenList;
  const kid = kidsList;
  return (
    <div className="px-12 mt-10 ">
      <FirstMain />
      <ShopCarousel infoList={men} name={"Men"} />
      <SecondMain />
      <ShopCarousel infoList={women} name={"Women"} />
      <ThirdMain />
      <ShopCarousel infoList={kid} name={"Kids"} />
      <FourthMain />
     
    </div>
  );
};

export default MainContainer;
