import React from "react";
import Card from "react-bootstrap/Card";
import { Jumbotron, Button } from "reactstrap";

const MyJumbotron = props => {
	return (
		<div>
			<div className="container bg-light">
				<Jumbotron>
					<h1 className="display-3">A Warm Welcome!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p className="lead">
						<Button color="primary">Call to action!</Button>
					</p>
				</Jumbotron>
			</div>
		</div>
	);
};

export default MyJumbotron;
