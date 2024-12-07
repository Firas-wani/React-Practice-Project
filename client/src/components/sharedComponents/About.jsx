import React from "react";
import image from "../../images/about.jpeg";
import "../../styles/Global.css";

const About = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row text-center align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={image}
            alt="About Us"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
