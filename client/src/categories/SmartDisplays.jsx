// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from '../utils/AxiosInstance';






// const SmartDisplays =()=> {


//   const [displaysCategory, setDisplaysCategory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({});


//   const fetchDisplaysCategory = async () =>{
//     setLoading(true)
//     try {
//       const res = await api.get("/products/smartdisplays");
//       setDisplaysCategory(res.data.products);
//  // Initialize default values for quantity and size for each product
//  const initialOptions = {};
//  res.data.products.forEach((product) => {
//    initialOptions[product._id] = { quantity: 1 };
//  });
//  setSelectedOptions(initialOptions);

//     } catch (error) {
//       toast.error("Failed to fetch displays category");
//       console.log(error);
      
//     }finally {
//       setLoading(false);
//     }
//   };

//   const handleQuantityChange = (productId, quantity) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [productId]: { ...prev[productId], quantity },
//     }));
//   };


//   const addToCart = async (productId) => {
//     const { quantity } = selectedOptions[productId];
//     try {
//       await api.post(`/products/addtocart/${productId}`, { quantity });
//       toast.success('Added to cart');
//     } catch (error) {
//       toast.error('Failed to add to cart');
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchDisplaysCategory();
//   }, []);




//   return (
//     <>
      
//       <ToastContainer />
//       <div className="container my-5" style={{ marginTop: "70px" }}>
//         <h1 className="text-center mb-4">Smart Displays</h1>

//         {loading ? (
//           <div className="text-center">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           <div className="row g-4">
//             {displaysCategory.map((product) => (
//               <div className="col-md-4" key={product._id}>
//                 <div className="card h-100 shadow-sm">
//                   {/* Uniform Image */}
//                   <div className="card-img-top-container">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.title}
//                       className="card-img-top"
//                     />
//                   </div>
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text text-muted">{product.category}</p>
                   
//                     <div className="mb-3">
//                       <label className="form-label">Select Quantity:</label>
//                       <select
//                         className="form-select"
//                         value={selectedOptions[product._id]?.quantity || 1}
//                         onChange={(e) =>
//                           handleQuantityChange(product._id, e.target.value)
//                         }
//                       >
//                         {[1, 2, 3, 4, 5].map((qty) => (
//                           <option key={qty} value={qty}>
//                             {qty}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <p className="fw-bold text-primary mt-auto">
//                       ₹ {product.price}
//                     </p>
//                     <button
//                       className="btn btn-primary w-100 mt-2"
//                       onClick={() => addToCart(product._id)}
//                     >
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>












//     </>
//   )
// }

// export default SmartDisplays
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/AxiosInstance";

const SmartDisplays = () => {
  const [displaysCategory, setDisplaysCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const fetchDisplaysCategory = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products/smartdisplays");
      setDisplaysCategory(res.data.products);

      // Initialize default values for quantity
      const initialOptions = {};
      res.data.products.forEach((product) => {
        initialOptions[product._id] = { quantity: 1 };
      });
      setSelectedOptions(initialOptions);
    } catch (error) {
      toast.error("Failed to fetch displays category");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], quantity },
    }));
  };

  const addToCart = async (productId) => {
    const { quantity } = selectedOptions[productId];
    try {
      await api.post(`/products/addtocart/${productId}`, { quantity });
      toast.success("Added to cart");
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDisplaysCategory();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container my-5">
        <h1 className="text-center mb-5 text-primary">Smart Displays</h1>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {displaysCategory.map((product) => (
              <div className="col" key={product._id}>
                <div className="card h-100 shadow-lg border-0">
                  {/* Image Container */}
                  <div
                    className="card-img-top-container"
                    style={{
                      height: "250px", // Consistent height for images
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensures images fit without distortion
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text text-muted">
                      Category: {product.category}
                    </p>
                    <div className="mb-3">
                      <label className="form-label">Select Quantity:</label>
                      <select
                        className="form-select"
                        value={selectedOptions[product._id]?.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(product._id, e.target.value)
                        }
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="fw-bold text-success">₹ {product.price}</p>
                    <button
                      className="btn btn-primary w-100 mt-auto"
                      onClick={() => addToCart(product._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SmartDisplays;
