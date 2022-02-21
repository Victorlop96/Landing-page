import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const MyCard = () => {
	return (
		<CardGroup>
			<Card>
				<Card.Img
					variant="top"
					src="https://picsum.photos/200/200?random=1"
				/>
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Primary</Button>{" "}
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://picsum.photos/200/200?random=2"
				/>
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in
						to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Primary</Button>{" "}
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://picsum.photos/200/200?random=3"
				/>
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Primary</Button>{" "}
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://picsum.photos/200/200?random=4"
				/>
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additionasl content. This content is
						a little bit lsonger.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Primary</Button>{" "}
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};
export default MyCard;
