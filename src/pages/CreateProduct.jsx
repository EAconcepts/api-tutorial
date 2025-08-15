import axios from "axios";
import React, { useState } from "react";

export const CreateProduct = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    images: [],
    weight: 0,
    stock: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);

    const res = await axios.patch(`${baseUrl}/products/add`, product);
    console.log(res);
    alert("Product created successfully");
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: 16, flexDirection: "column" }}
      >
        {/* Name */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="title">
            Product title
          </label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        {/* Description */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="description">
            Product description
          </label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        {/* Category */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="category">
            Product category
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        {/* Weight */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="weight">
            Product weight
          </label>
          <input
            type="text"
            name="weight"
            value={product.weight}
            onChange={handleChange}
          />
        </div>
        {/* Stock */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="stock">
            Product stock
          </label>
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        {/* Price */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ width: 200 }} htmlFor="price">
            Product price
          </label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <button>Add product</button>
      </form>
    </div>
  );
};
