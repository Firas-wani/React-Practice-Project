import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
// import Authorized from "../../authorized/Authorized";
import api from "../../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";
import  "../../styles/Global.css";
const Cart = () => {
  // Authorized();

  const [products, setProducts] = useState([]); // Cart products
  const [cartTotal, setCartTotal] = useState(0); // Total cart value
  
  const navigate = useNavigate();
  // Fetch cart items
  const getCart = async () => {
    try {
      const res = await api.get("/products/getcart");
      if (res.data.getUser && res.data.getUser.cart) {
        setProducts(res.data.getUser.cart);
        calculateTotal(res.data.getUser.cart); // Calculate total after fetching
      } else {
        setProducts([]);
        setCartTotal(0);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      setProducts([]);
      setCartTotal(0);
    }
  };
  const getUserData = async () => {
             try {
               const {data} = await api.get("/user/getuser");
                setCartTotal(data.message.userdetails.cartValue);
    
    
             } catch (error) {
              console.log(error);
                
             }
        
         }

  // Calculate cart total value dynamically
  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  };

  // Remove item from cart
  const handleRemoveFromCart = async (productId) => {
    try {
      // Call the API to remove the product
      await api.get(`/products/removeItem/${productId}`);

      // Update the local state to reflect the change
      const updatedProducts = products.filter(
        (item) => item.productId._id !== productId
      );
      setProducts(updatedProducts);

      // Recalculate the cart total
      const updatedTotal = updatedProducts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setCartTotal(updatedTotal);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Fetch cart and user data on component mount
  useEffect(() => {
    getCart();
    getUserData();
  }, [cartTotal,products]); 

  const handleNavigate = () => {
    navigate('/user/checkout'); 
  };


  return (
    <div className="container my-4  eighty">
      {/* Conditional Heading */}
      <h1 className="text-center mb-4">
        {products.length > 0 ? "Items in Cart" : "No Items In Cart"}
      </h1>

      {/* Products List */}
      <div className="row">
        {products && products.length > 0 ? (
          products.map((item) => (
            <div className="col-md-6 mb-3" key={item.productId._id}>
              <div className="card">
                <img
                  src={item.productId.imageUrl}
                  alt={item.productId.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.productId.title}</h5>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item.productId._id)}
                  >
                    <MdDeleteForever /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Total Section */}
      {cartTotal > 0 && (
        <div className="text-center mt-4">
          <h4>Total: ₹{cartTotal}</h4>
          <button  className="btn btn-primary" onClick={handleNavigate} >Proceed</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

