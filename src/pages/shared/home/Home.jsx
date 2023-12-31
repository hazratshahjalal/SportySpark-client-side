import { useEffect } from "react";
import About from "../../../components/About/About";
import Banner from "../../../components/Banner/Banner";
import DealsAndPromotion from "../../../components/DealsWithPromotion/DealsAndPromotion";
import Featured from "../../../components/Featured/Featured";
import LatestNews from "../../../components/LatestNews/LatestNews";
import ShopByCategory from "../../../components/ShopByCategory/ShopByCategory";
import Testimonial from "../../../components/Testimonial/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <ShopByCategory></ShopByCategory>
      <Testimonial></Testimonial>
      <LatestNews></LatestNews>
      <About></About>
      <DealsAndPromotion></DealsAndPromotion>
    </div>
  );
};

export default Home;