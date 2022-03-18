import React from "react";
import { Link } from "react-router-dom";

import LogoConf from "../images/video-conf.png";
import Logo from "../images/logo-mac.png";
import "../css/home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5 ">
            <img src={LogoConf} alt="logo conferencia" />
            <div className="text-center">
              <Link to="/badges" className="btn btn-info btn-lg mt-5 mb-2">
                Accede a la conferencia
              </Link>
            </div>
          </div>
          <div className="col-6 mt-5 contenedor">
            <img className="logo_rolling" src={Logo} alt="logo rolling" />
          </div>
        </div>
      </div>
    </div>
  );
}
