import "./App.css";
import { useState } from "react";
//components
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
//sweetalert
import Swal from "sweetalert2";
//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import { ItemDetailPage } from "./pages/ItemDetailPage/ItemDetailPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // El producto ya está en el carrito, actualizar la cantidad
      Swal.fire({
        position: "top-end",
        icon: "info",
        text: "Se agrego un item al carrito",
        showConfirmButton: false,
        timer: 700,
      });
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // El producto no está en el carrito, agregarlo con cantidad inicial 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        position: "top-end",
        icon: "info",
        text: "Se agrego un item al carrito",
        showConfirmButton: false,
        timer: 700,
      });
    }
  };
  //selector de cantidad
  const handleQuantityChange = (id, operation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        let updatedQuantity = item.quantity;
        if (operation === "+") {
          updatedQuantity++;
        } else if (operation === "-" && item.quantity > 1) {
          updatedQuantity--;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/item/:id"
          element={<ItemDetailPage addToCart={addToCart} />}
        />
        <Route
          path="/category/:category"
          element={<CategoryPage addToCart={addToCart} />}
        />
        <Route
          path="/category/:category/item/:id"
          element={<ItemDetailPage />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              handleQuantityChange={handleQuantityChange}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
