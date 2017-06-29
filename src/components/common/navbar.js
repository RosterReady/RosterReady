import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Roster Ready</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={window.location.pathname === "/" && "active"}>
          <Link to="/SignUp">signUpSignIn</Link>
        </li>
        <li className={window.location.pathname === "/favorites" && "active"}>
          <Link to="/favorites"></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;