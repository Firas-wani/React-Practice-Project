import React from "react";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer
      className="text-white py-4 "
      style={{
        backgroundColor: "#E73879", 
      }}
    >
      <div className="container-fluid">
        <div className="row text-center">
          {/* Footer Text */}
          <div className="col-12 mb-3">
            <p className="mb-0">©️ All Rights Reserved</p>
          </div>
          {/* Footer Links */}
          <div className="col-12">
            <ul className="list-unstyled d-flex justify-content-center gap-4">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/policy" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
