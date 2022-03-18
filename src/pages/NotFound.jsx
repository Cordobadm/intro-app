import React from "react";
import { Link } from "react-router-dom";
import Error from "../images/error.png";


export default function NotFound() {
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={Error} alt="error" className="img-fluid p-0" />
        <Link to="/" className="btn btn-danger">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
