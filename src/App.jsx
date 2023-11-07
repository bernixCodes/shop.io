import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
