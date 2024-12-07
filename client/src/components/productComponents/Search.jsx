
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../utils/AxiosInstance";
import { toast, ToastContainer } from "react-toastify";
import "../../styles/Global.css";
const SearchResults = () => {
    const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await api.get(`/search?query=${query}`);
        setResults(res.data.products);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch search results.");
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const addToCart = async (productId) => {
    try {
      await api.post(`/products/addtocart/${productId}`, { quantity });
      toast.success("Added to cart");
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container py-4 eighty">
          <ToastContainer />
      <h2 className="mb-4">Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="row g-4">
          {results.map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top img-fluid"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text text-success fw-bold">${product.price}</p>
                  <button
                    className="btn btn-dark mt-auto"
                    onClick={() => addToCart(product._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
