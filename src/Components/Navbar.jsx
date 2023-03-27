import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="bar">
        <p className="barItem">PRODUCT</p>
        <p className="barItem">MARKETPLACE</p>
        <p className="barItem">LEARN</p>
        <p className="barItem">RESOURCES</p>
      </div>
      <div>
        <button className="login">Login</button>
        <button className="get">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
