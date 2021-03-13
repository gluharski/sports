import React from "react";
import { Link } from "react-router-dom";

// icons
import { HiViewList } from "react-icons/hi";
import { FiClock } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar-list">
      <Link className="navbar-link" to="/highlights">
        <HiViewList />
      </Link>
      <Link className="navbar-link" to="/live-matches">
        <FiClock />
      </Link>
    </div>
  );
}

export default Navbar;
