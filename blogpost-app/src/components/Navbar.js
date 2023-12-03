import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expan-lg navbar-dark text-white bg-dark justify-content-between">
      <Link to="/" className="navbar-brand ml-3">
        Blog Post App
      </Link>
      <img
        src="https://media.licdn.com/dms/image/C4D03AQFXwXJ43ef5Hw/profile-displayphoto-shrink_800_800/0/1655446152929?e=1680134400&v=beta&t=mn7WL8v7LDf1l4VAKmoBN79F21BDpAwL0g6WlQbBClg"
        alt=""
        style={{ height: "42px", widht: "42px" }}
        className="rounded-circle"
      />
    </nav>
  );
};

export default Navbar;
