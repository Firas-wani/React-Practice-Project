// const express = require('express');
// const server = express()
// const connectDb = require("./utils/connecDb")
// const cookie = require("cookie-parser")
// const bodyParser = require('body-parser');
// const cors = require('cors')
// const {config} = require('dotenv');

// config("/.env")
// const port = process.env.PORT

// const {handleSignUp, handleLogin, getUserDetails, editUser, deleteUser, handleLogout, handleForgotPassword, handleResetPassword} = require("./utils/controllers/userController")
// const verifyUser = require('./utils/controllers/verifyUser')

// const { verifyAdmin } = require('./utils/controllers/verifyAdmin')
// const {handleAddProducts, getProducts, searchProducts, braintreeTokenController, brainTreePaymentController } = require("./utils/controllers/productController");
// const {createCartOrder} = require("./utils/controllers/orderController")
// const {addDeliveryDetails} = require("./utils/controllers/delivery")
// const {addToCart, removeFromCart, emptyCart, getCart}= require("./utils/controllers/cartHandler")
// const multmid = require('./middlewares/multer');
// const {isAuthenticated, isAdmin} = require('./middlewares/auth');
// const { handleCategory } = require('./utils/controllers/feature');
// const path = require("path")
// server.use(express.json())
// server.use(bodyParser.json())
// server.use(cors({
//     origin:
//     // "https://smartappliances.vercel.app",
// "http://localhost:3000",
// credentials:true

// }))
// server.use(cookie())
// // api routes for usercontrollers
// server.use(express.static(path.join(__dirname, './client/build')));

// server.use("/", function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
//   });

// server.post("/user/signup", handleSignUp);
// server.post("/user/login", handleLogin);

// server.get("/user/getuser",isAuthenticated, getUserDetails);

// server.get("/user/verifyuser", verifyUser)

// server.put("/user/edit",isAuthenticated, editUser)

// server.delete("/user/delete", isAuthenticated, deleteUser)

// server.post('/user/logout', handleLogout)
// server.post("/forgotpassword", handleForgotPassword); // Forgot password route
// server.post("/resetpassword", handleResetPassword); // Reset password route

// // api routes for product controllers

// server.post("/products/add", isAuthenticated, multmid,  handleAddProducts)
// server.get("/user/isAdmin", isAuthenticated, verifyAdmin);
// server.get("/products/getproducts", getProducts)
// server.get("/search", searchProducts)

// //catagory
// server.get("/products/smartsecurity",(req,res)=>{handleCategory(req,res,"Smart-Security")})
// server.get("/products/smartlighting",(req,res)=>{handleCategory(req,res,"Smart-Lighting")})
// server.get("/products/smartspeakers",(req,res)=>{handleCategory(req,res,"Smart-Speakers")})
// server.get("/products/smartswitches",(req,res)=>{handleCategory(req,res,"Smart-Switches")})
// server.get("/products/smartdisplays",(req,res)=>{handleCategory(req,res,"Smart-Displays")})

// server.put("/user/addDeliveryDetails", isAuthenticated, addDeliveryDetails)

// // Order Routes

// server.post("/createOrder",isAuthenticated,createCartOrder)
// // cart handler routes
// server.post("/products/addtocart/:productId",isAuthenticated,addToCart)
// server.get("/products/getcart",isAuthenticated,getCart)
// server.get("/products/removeItem/:productId" ,isAuthenticated , removeFromCart)
// server.get("/produts/emptycart" ,isAuthenticated , emptyCart)

// server.listen(port,()=>{
//     console.log(`server is running on port ${port}`);

// })

// connectDb()
const express = require("express");
const path = require("path");
const connectDb = require("./utils/connecDb");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("dotenv");

// Load environment variables
config({ path: path.resolve(__dirname, "./.env") });

const server = express();

const port = process.env.PORT || 5000; // Default port fallback

// Import controllers and middlewares
const {
  handleSignUp,
  handleLogin,
  getUserDetails,
  editUser,
  deleteUser,
  handleLogout,
  handleForgotPassword,
  handleResetPassword,
} = require("./utils/controllers/userController");
const verifyUser = require("./utils/controllers/verifyUser");
const { verifyAdmin } = require("./utils/controllers/verifyAdmin");
const {
  handleAddProducts,
  getProducts,
  searchProducts,
  braintreeTokenController,
  brainTreePaymentController,
} = require("./utils/controllers/productController");
const { createCartOrder } = require("./utils/controllers/orderController");
const { addDeliveryDetails } = require("./utils/controllers/delivery");
const {
  addToCart,
  removeFromCart,
  emptyCart,
  getCart,
} = require("./utils/controllers/cartHandler");
const multmid = require("./middlewares/multer");
const { isAuthenticated, isAdmin } = require("./middlewares/auth");
const { handleCategory } = require("./utils/controllers/feature");

// Middleware
server.use(express.json());
server.use(bodyParser.json());
server.use(cors({ credentials: true }));
server.use(cookieParser());

// Serve static files for the frontend
server.use(express.static(path.join(__dirname, "./client/build")));

// API routes for user controllers
server.post("/user/signup", handleSignUp);
server.post("/user/login", handleLogin);
server.get("/user/getuser", isAuthenticated, getUserDetails);
server.get("/user/verifyuser", verifyUser);
server.put("/user/edit", isAuthenticated, editUser);
server.delete("/user/delete", isAuthenticated, deleteUser);
server.post("/user/logout", handleLogout);
server.post("/forgotpassword", handleForgotPassword);
server.post("/resetpassword", handleResetPassword);

// API routes for product controllers
server.post("/products/add", isAuthenticated, multmid, handleAddProducts);
server.get("/user/isAdmin", isAuthenticated, verifyAdmin);
server.get("/products/getproducts", getProducts);
server.get("/search", searchProducts);

// Category routes
server.get("/products/smartsecurity", (req, res) =>
  handleCategory(req, res, "Smart-Security")
);
server.get("/products/smartlighting", (req, res) =>
  handleCategory(req, res, "Smart-Lighting")
);
server.get("/products/smartspeakers", (req, res) =>
  handleCategory(req, res, "Smart-Speakers")
);
server.get("/products/smartswitches", (req, res) =>
  handleCategory(req, res, "Smart-Switches")
);
server.get("/products/smartdisplays", (req, res) =>
  handleCategory(req, res, "Smart-Displays")
);

// Delivery details
server.put("/user/addDeliveryDetails", isAuthenticated, addDeliveryDetails);

// Order routes
server.post("/createOrder", isAuthenticated, createCartOrder);

// Cart handler routes
server.post("/products/addtocart/:productId", isAuthenticated, addToCart);
server.get("/products/getcart", isAuthenticated, getCart);
server.get("/products/removeItem/:productId", isAuthenticated, removeFromCart);
server.get("/produts/emptycart", isAuthenticated, emptyCart);

// Catch-all route for serving the React app
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to the database
connectDb();
