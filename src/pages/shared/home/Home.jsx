import About from "../../../components/About/About";
import Banner from "../../../components/Banner/Banner";
import Featured from "../../../components/Featured/Featured";
import ShopByCategory from "../../../components/ShopByCategory/ShopByCategory";
import Testimonial from "../../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <ShopByCategory></ShopByCategory>
      <Testimonial></Testimonial>
      <About></About>
    </div>
  );
};

export default Home;