
//CRear un h1 con java script
// const elemento = document.createElement('h1')
// elemento.innerText = "Esto es un elemento con javascript"

// const container = document.getElementById('root')

// container.appendChild(elemento)

import React from "react";
import ReactDOM from "react-dom";

// import Badges from "./pages/Badges";
// import BadgeNew from "./pages/BadgeNew";
// import Counter from "./component/Counter";
// import Badge from "./component/Badge";
import App from "./component/App";

import "./global.css";
import 'bootstrap/dist/css/bootstrap.css';



// const elemento = <h1>Esto es un elemento con React</h1>

const container = document.getElementById("root");

ReactDOM.render(
  // <Badge
  //   firstName="Spiderman"
  //   lastName="Let´s Home"
  //   infoJob="SaveTheWord"
  //   twitter="SpidermanCrack"
  //   avatarUrl = "http:\/\/0.gravatar.com\/avatar\/cd699361e60392e6c2e729ed9fa9a133"
  // />,
  // 
  <App />,
  container
);
