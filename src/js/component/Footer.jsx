import React from "react";
//import "./src/styles/index.scss";
import Card from "react-bootstrap/Card";
//import * as ReactBootStrap from "react-bootstrap";

const Footer = () => {
	return (
		<div className="Footer">
			<Card className="text-center">
				<Card.Footer bg="dark" className="text-muted">
					Copyright &copy; 2021 4Geeks Academy. Grupo Victor, Diego y
					Bastián.
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Footer;
