import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/akva-dejon-logo-transparent.png";

function FeaturedPage() {
  return (
    <div className="container">
      <div className="feature">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>
        <Link to="/akva-dejon-plus/home">Продолжи</Link>
      </div>
    </div>
  );
}

export default FeaturedPage;
