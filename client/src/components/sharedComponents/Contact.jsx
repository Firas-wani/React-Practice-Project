import React from "react";
import "../../styles/Global.css";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import image from "../../images/contact.jpeg";

const Contact = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row text-center align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={image}
            alt="Contact Us"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h1 className="bg-dark text-white p-3">CONTACT US</h1>
          <p className="mt-3">
            Have a query or need information about our products? Feel free to
            reach out to us anytime—we're available 24x7!
          </p>
          <p className="mt-3">
            <BiMailSend /> : <a href="wanifiras7@gmail.com">wanifiras7@gmail.com</a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll-Free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
