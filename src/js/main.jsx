import React from "react";
import Footer from "./component/Footer.jsx";
import MyJumbotron from "./component/MyJumbotron.jsx";
import MyCard from "./component/Card.jsx";
import Navbar from "./component/Navbar.jsx";
//import Footer from "./component/Footer"

const Main = () => {
	return (
		<>
			<Navbar />
			<MyJumbotron />
			<MyCard />
			<Footer />
		</>
	);
};
export default Main;
