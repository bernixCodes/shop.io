import { Link } from "react-router-dom";
import "./Carousel.scss";
import { useCartContext } from "./../../context/useCartContext";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/useAuthContext";

// eslint-disable-next-line react/prop-types
const Carouseltem = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, description, name, id } = product;

  const { updateCartVal } = useCartContext();
  const { currentUser, auth } = useAuthContext();

  const notify = () =>
    toast("Successfully added to cart!", {
      position: "bottom-right",
      duration: 3000,
    });

  const notifyErr = () =>
    toast("Login to add to cart!", {
      position: "bottom-center",
      duration: 3000,
      style: { width: "300px", backgroundColor: "red", color: "white" },
    });

  const handleAddToCart = async (product_id) => {
    if (!auth) {
      notifyErr();
    }
    await fetch(
      "https://remote-app-api-c4a491abd7bc.herokuapp.com/api/add-to-cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user_id: Number(currentUser.id),
          product_id: Number(product_id),
        }),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        updateCartVal();
        console.log(data);
      });

    notify();
  };

  return (
    <>
      <div className="carouselItem">
        <Link>
          <img src={image} alt="" className="product-image" />
          <p className="price"> Ghc {price}</p>
          <h4 className="item">{name}</h4>
          <p className="mrb">{description}</p>
        </Link>
        <button onClick={() => handleAddToCart(id)} className="btnCarousel">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Carouseltem;
