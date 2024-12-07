import React, { useEffect, useState } from "react";
import api from "../../utils/AxiosInstance";
import { toast } from "react-toastify";
import "../../styles/Global.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/products/getproducts");
      setProducts(data.newProducts);
      toast.success(data.message);
    } catch (error) {
      toast.error("Failed to load products");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      await api.post(`/products/addtocart/${productId}`, { quantity });
      toast.success("Added to cart");
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-5 eighty">
      <h1 className="text-center mb-5">New Arrivals!</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {products.slice(-9).map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text text-muted">{product.category}</p>
                  <div className="mt-auto">
                    <div className="mb-2">
                      <label htmlFor={`quantity-${product._id}`} className="form-label">
                        Select Quantity:
                      </label>
                      <select
                        id={`quantity-${product._id}`}
                        className="form-select"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      >
                        {[1, 2, 3].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="fw-bold text-success">₹ {product.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(product._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

