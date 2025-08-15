import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        width: 250,
        flexDirection: "column",
        gap: "2px",
        border: "1px solid grey",
        paddingInline: 8,
      }}
    >
      <div onClick={() => navigate(`/product/${product?.id}`)}>
        <img
          src={product?.images[0]}
          style={{ objectFit: "cover", width: 200, height: 300 }}
        />
        <h3>{product?.title}</h3>
      </div>
      <p style={{ lineClamp: "2" }}>{product?.description}</p>
      <h3>${product?.price}</h3>
      <button
        onClick={() => setUser((prev) => ({ ...prev, name: "Dolapo Jones" }))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
