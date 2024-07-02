import Intro from "@/components/Intro";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro/>
      <MainContainer/>
      <Footer/>
    </div>
  );
};

export default Home;
