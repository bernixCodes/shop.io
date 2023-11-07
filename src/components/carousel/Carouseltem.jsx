import { Link } from "react-router-dom";
import "./Carousel.scss";
import { useCartContext } from "./../../context/useCartContext";

// eslint-disable-next-line react/prop-types
const Carouseltem = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, description, name } = product;

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="carouselItem">
      <Link>
        <img src={image} alt="" className="product-image" />
        <p className="price"> Ghc {price}</p>
        <h4 className="item">{name}</h4>
        <p className="mrb">{description}</p>
      </Link>

      <button onClick={handleAddToCart} className="btnCarousel">
        Add To Cart
      </button>
    </div>
  );
};

export default Carouseltem;
