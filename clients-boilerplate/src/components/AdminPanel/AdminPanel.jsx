import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";
import AddProduct from "../AddProduct/handleProduct";
import AdminProduct from "./AdminProduct";

function AdminPanel({ products, handleAdd, handleDelete, handleUpdate }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="AdminPanel">
      <h1 className="admintitle">Admin Panel</h1>
      <button>Add New Product</button>
      <AddProduct handleAdd={handleAdd} />
      <div className="productpanel">
        {products.map((product) => (
          <AdminProduct
            key={product._id}
            {...product}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleReplace={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
