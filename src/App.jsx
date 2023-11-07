import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
