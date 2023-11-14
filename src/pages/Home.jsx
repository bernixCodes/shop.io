import Carousel from "../components/carousel/Carousel";
import Info from "../components/info/Info";
import Slider from "./../components/slider/Slider";
import Title from "./../components/title/Title";
import { Toaster } from "react-hot-toast";

const home = () => {
  return (
    <>
      <Slider />
      <Info />
      <Title heading={"Latest Products"} btnText={"Shop Now >>>"} />
      <Carousel />
      <Toaster />
    </>
  );
};

export default home;
