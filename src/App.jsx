import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { CreateProduct } from "./pages/CreateProduct";
import { useState } from "react";
import UserProvider from "./context/UserContext";
import Login from "./pages/login";
import Cart from "./pages/Cart";

function App() {
  const [state, setState] = useState("one");
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home state={state} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/product/create" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App;
