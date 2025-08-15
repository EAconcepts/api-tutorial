import React, { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Cart = () => {
  //   const products = [1, 2, 4];
  //   console.log("products:", products);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  //   const getProduct = async () => {
  //     const products = await axios.get(`${baseUrl}/products`);
  //     return products;
  //   };

  //   const productQuery = useQuery({
  //     queryKey: ["products"],
  //     queryFn: getProduct,
  //   });

  const { data: products, isPending: productLoading } = useFetch("products", [
    "product",
  ]);
  const { data: category, isPending: categoryLoading } = useFetch(
    "products/categories",
    ["categories"]
  );
  console.log("products:", products);
  console.log("category:", category);

  //   console.log(productQuery);
  return (
    <div>
      {" "}
      Loading.... " Cart loaded"
      <br />
      {categoryLoading && "Hold on why we fetch your categories"}
      <br />
      {productLoading && " products loading...."}
    </div>
  );
};

export default Cart;
