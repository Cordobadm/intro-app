import React from "react";
import Logo from "../images/logo.png";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__brand ms-1">
        <Link to="/">
          <img
            className="Navbar__brand-logo"
            src={Logo}
            alt="Logo de Rolling"
          />
        </Link>
        <span className="fw-bolder">Conference</span>
      </div>
    </div>
  );
}
