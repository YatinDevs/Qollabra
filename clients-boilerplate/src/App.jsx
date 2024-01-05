import React, { useEffect, useState } from "react";
import ProductList from "./components/Products/ProductList/ProductList";
import axios from "axios";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProduct] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProductsFromAPI = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProduct(response.data);
      } catch (err) {
        console.log(err);
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductsFromAPI();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/products/${id}`);
      if (res.data._id) {
        setProduct(products.filter((p) => p._id !== res.data._id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`http://localhost:8080/products/${id}`);
      console.log("Product updated:", res.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleAdd = async (id) => {
    try {
      const res = await axios.post(`http://localhost:8080/products/${id}`);
      console.log("Product replaced:", res.data);
    } catch (error) {
      console.error("Error replacing product:", error);
    }
  };

  return (
    <div>
      <ContentWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/adminpanel"
              element={
                <AdminPanel
                  products={products}
                  handleAdd={handleAdd}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              }
            />
          </Routes>
        </Router>
      </ContentWrapper>
    </div>
  );
}

export default App;
