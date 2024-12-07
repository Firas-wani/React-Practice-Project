import React from "react";
import "../../styles/Global.css";
import image from "../../images/contact.jpeg";

const Policy = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row text-center align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={image}
            alt="Privacy Policy"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="mb-4">Privacy Policy</h2>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
