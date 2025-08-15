import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { user } = useContext(UserContext);

  const getProduct = async () => {
    const res = await axios.get(`${baseUrl}/product/${productId}`);
    console.log(res);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      Hi {user?.firstName}
      {/* images */}
      <div style={{ display: "flex", gap: 24, alignItems: "end" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {product?.images?.map((image) => (
            <img
              src={image}
              style={{
                width: 200,
                height: 200,
                objectFit: "cover",
                border: "2px solid grey",
              }}
            />
          ))}
        </div>
        <img
          src={product?.thumbnail}
          style={{ width: 500, border: "2px solid grey" }}
        />
      </div>
      <h2>{product?.title}</h2>
      <p>Ratings: {product?.rating}</p>
      <p>Category: {product?.category}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>Warranty info: {product?.warrantyInformation}</p>
      {/* tags */}
      <div style={{ display: "flex", gap: 4 }}>
        {product?.tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <button>Buy now</button>
    </div>
  );
};

export default ProductDetails;
