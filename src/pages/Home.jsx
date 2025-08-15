import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = ({ state }) => {
  const [products, setProducts] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log(state);
  const { user } = useContext(UserContext);
  // console.log(user);
  // useEffect(() => {
  //   fetch(`${API_BASE_URL}/products`)
  //     .then((res) => {
  //       // console.log("RES - line 8: ", res);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log("DATA - line 12: ", data);
  //       setProducts(data?.products);
  //     });
  // }, []);
  // // console.log(products);
  const navigate = useNavigate();
  const getProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    // console.log(response);
    setProducts(response.data.products);
  };
  console.log(user);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      Welcome {user?.firstName}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>All Products</h4>
        <button onClick={() => navigate("/product/create")}>
          Create Product
        </button>
      </div>
      {/* products */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24 }}>
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
