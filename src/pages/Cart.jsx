import Header from "./../components/header/Header";
const Cart = () => {
  return (
    <>
      <Header />
      <section className="cart py-16">
        {/* <div className="order container mx-auto w-1/2">
          <div className="flex items-center border-b border-gray-300 pb-4">
            <img src="/assets/cart-black.png" />
            <h1 className="font-bold ml-4 text-2xl ">Order Summary</h1>
          </div>

          <div className="pizza-list">
            <div className="flex items-center my-8">
              <img className="w-24" src="/assets/pizza.png" alt="" />
              <div className="flex-1 ml-4">
                <h1>Mariana</h1>
                <span>MEDIUM</span>
              </div>
              <span className="flex-1">1 Pcs</span>
              <span className="font-bold text-lg">₵300</span>
            </div>
            <div className="flex items-center">
              <img className="w-24" src="/assets/pizza.png" alt="" />
              <div className="flex-1 ml-4">
                <h1>Mariana</h1>
                <span>MEDIUM</span>
              </div>
              <span className="flex-1">1 Pcs</span>
              <span className="font-bold text-lg">₵300</span>
            </div>

            <div className="flex items-center my-8">
              <img className="w-24" src="/assets/pizza.png" alt="" />
              <div className="flex-1 ml-4">
                <h1>Mariana</h1>
                <span>MEDIUM</span>
              </div>
              <span className="flex-1">1 Pcs</span>
              <span className="font-bold text-lg">₵300</span>
            </div>
          </div>
          <hr></hr>
          <div className="text-right py-4">
            <div>
              <span className="text-lg font-bold">Total Amount:</span>
              <span className="amount text-2xl font-bold ml-2">₵300</span>
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
                  <button className="btn-primary background-['#fe5f1e'] px-6 py-2 rounded-full text-white font-bold mt-6">
                    Order Now
                  </button>
                </div>
              </form>
            </div>

            {/* <a href="" className="inline-block cursor-pointer btn-primary px-6 py-2 rounded-full text-white font-bold mt-6">Login to continue</a> */}
        {/* </div> */}
        {/* </div>  */}

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
      </section>
    </>
  );
};

export default Cart;
