//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
//import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Main from "./main.jsx";
import Navbar from "./component/Navbar.jsx";
import MyJumbotron from "./component/MyJumbotron.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Main />, document.getElementById("app"));
//ReactDOM.render(<Footer />, document.querySelector("#app"));
