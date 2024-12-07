import React, { useState } from "react";
import api from "../../utils/AxiosInstance";

// import Authorized from "../../authorized/Authorized";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import Authorized from "../../authorized/Authorized";

const AddAddress = () => {
  Authorized();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState();
  const [fullname, setFullname] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();

  const formData = {
    mobile,
    fullname,
    street,
   
    city,
    state,
    pincode,
    landmark,
  };
  const addDeliveryDetails = async () => {
    try {
      const res = await api.put("/user/addDeliveryDetails", formData);
      if (res.data.message === "Address Updated") {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating your address.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addDeliveryDetails();
    navigate('/user/checkout')
  };
  return (
    <>
      <div className="container py-5">
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-light rounded">
              <div className="card-header text-center">
                <h2>Update/Add Address</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      className="form-control"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contact No
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="number"
                      className="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="street" className="form-label">
                      Street
                    </label>
                    <input
                      id="street"
                      name="street"
                      type="text"
                      className="form-control"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="landmark" className="form-label">
                      Landmark
                    </label>
                    <input
                      id="landmark"
                      name="landmark"
                      type="text"
                      className="form-control"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      className="form-control"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">
                      Pincode
                    </label>
                    <input
                      id="pincode"
                      name="pincode"
                      type="number"
                      className="form-control"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      onClick={handleSubmit}
                      
                    >
                      Update Address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAddress