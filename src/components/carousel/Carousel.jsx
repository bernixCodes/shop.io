import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.scss";
import CarouselItem from "./Carouseltem";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url =
      "https://remote-app-api-c4a491abd7bc.herokuapp.com/api/products";

    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        customTransition="all .5"
        transitionDuration={500}
      >
        {products.map((product) => (
          <CarouselItem product={product} key={product.id} />
        ))}
      </Carousel>
      ;
    </>
  );
};

export default ProductCarousel;
