/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./../components/header/Header";
import { useAuthContext } from "../context/useAuthContext";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const { currentUser } = useAuthContext();

  const calculateTotalPrice = (data) => {
    const prices = data.map((item) => parseFloat(item.price));
    console.log(prices);
    const total = prices.reduce((total, price) => total + price, 0);

    setTotalPrice(total.toFixed(2));
  };

  const removeNotify = () =>
    toast("Item removed from cart!", {
      position: "bottom-center",
      duration: 3000,
      style: { width: "300px", backgroundColor: "red", color: "white" },
    });

  const fetchCarts = async () => {
    const url = `https://remote-app-api-c4a491abd7bc.herokuapp.com/api/getCartwithUserId/${currentUser.id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCarts(data);
      localStorage.setItem("cartItems", JSON.stringify(data));
      calculateTotalPrice(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      // Convert storedCart from string to array
      setCarts(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    if (currentUser.id) {
      fetchCarts();
    }
  }, [currentUser.id]);

  const removeCartItem = async (id) => {
    try {
      const response = await fetch(
        `https://remote-app-api-c4a491abd7bc.herokuapp.com/api/deleteCartItem`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart_id: Number(id),
            user_id: Number(currentUser.id),
          }),
        }
      );
      removeNotify();

      console.log("request sent");
      const data = await response.json();
      fetchCarts();
      console.log(data);
    } catch (error) {
      console.error("Error removing cart item", error);
    }
  };
  return (
    <>
      <Header />
      <section className="cart py-16">
        {carts.length == 0 ? (
          <div className="empty-cart py-16">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl font-bold mb-2"> Cart Empty 😒 </h1>
              <p className="text-gray-500 text-lg mb-12">
                You probably haven&apos;t ordered a anything yet.
                <br /> To order , go to the main page.
              </p>

              <img className="w-2/5 mx-auto" src="/empty-cart.png" />
              {/* <a href="/" className="inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12">Go back</a> */}
            </div>
          </div>
        ) : (
          <div className="order container mx-auto w-6/6 p-2 md:w-1/2">
            <div className="flex items-center border-b border-gray-300 pb-4">
              <h1 className="font-bold ml-4 text-2xl ">Order Summary</h1>
            </div>
            {carts.map((cartItem, index) => (
              <div className="flex items-center my-8" key={cartItem.id}>
                <img className="w-24" src={cartItem.image} alt="" />
                <div className="flex-1 ml-4">
                  <h1>{cartItem.name}</h1>
                </div>
                <span className="flex-1 hidden md:block">1 Pcs</span>
                <span className="font-bold text-lg">{cartItem.price}</span>
                <button
                  className="ml-5 text-red-600"
                  onClick={() => removeCartItem(cartItem.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <hr></hr>
            <div className="text-right py-4">
              <div>
                <span className="text-lg font-bold">Total Amount:</span>
                <span className="amount text-2xl font-bold ml-2">
                  ₵{totalPrice}
                </span>
              </div>
              <div>
                <form action="" className="mt-12">
                  <input
                    className="border border-gray-400 p-2 w-1/2 mb-4"
                    type="text"
                    placeholder="Phone number"
                  />
                  <input
                    className="border border-gray-400 p-2 w-1/2"
                    type="text"
                    placeholder="Address"
                  />

                  <div>
                    <button className="btn-primary px-6 py-2 rounded-full bg-[#fe5f1e] text-white font-bold mt-6">
                      Order Now
                    </button>
                  </div>
                </form>
              </div>

              {/* <a href="" className="inline-block cursor-pointer btn-primary px-6 py-2 rounded-full text-white font-bold mt-6">Login to continue</a> */}
            </div>
            <Toaster />
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
