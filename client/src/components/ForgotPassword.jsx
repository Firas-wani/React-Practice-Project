import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../utils/AxiosInstance'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the email to the backend to initiate the reset process
      const response = await api.post('/forgotpassword', { email });

      if (response.status === 200 && response.data.msg) {
        // Success response from backend
        toast.success(response.data.msg);
      } else {
        // If backend returns any other status or message
        toast.error(response.data.msg || 'Error sending reset link.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
      setEmail(''); // Reset email field
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />
      <div className="card shadow-sm p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Forgot Password</h3>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
