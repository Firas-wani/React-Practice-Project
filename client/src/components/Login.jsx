
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/AxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/Login.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/user/login", { email, password });
      if (res.status === 201) {
        toast.success("user logged in");
        navigate("/");
      } else {
        toast.error("Error Occurred");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleClick = () => {
    handleLogin();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="card shadow-lg p-4">
          <ToastContainer />
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/forgotpassword" className="text-decoration-none">
              Forgot Password?
            </Link>
            <button
              className="btn btn-primary"
              onClick={handleClick}
              style={{ minWidth: "120px" }}
            >
              Login
            </button>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-decoration-none fw-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
