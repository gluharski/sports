import React from "react";
import { Link } from "react-router-dom";
import { HiViewList } from "react-icons/hi";

function Navbar() {
  return (
    <div className="navbar-list">
      <Link className="navbar-link" to="/highlights">
        <HiViewList />
      </Link>
    </div>
  );
}

export default Navbar;
