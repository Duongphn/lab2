import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductList from "./components/ProductList";
import Footer from "./components/footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Banner />
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
