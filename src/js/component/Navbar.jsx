import React from "react";
//import "./src/styles/index.scss";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
	return (
		<div className="Navbar">
			<ReactBootStrap.Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark">
				<ReactBootStrap.Container>
					<ReactBootStrap.Navbar.Brand href="#home">
						Landing Page whit React
					</ReactBootStrap.Navbar.Brand>
					<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
						<ReactBootStrap.Nav className="me-auto">
							<ReactBootStrap.Nav.Link href="#Caracteristicas">
								Caracteristicas
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.Nav.Link href="#Precios">
								Precios
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.NavDropdown
								title="Un lindo Dropdown"
								id="collasible-nav-dropdown">
								<ReactBootStrap.NavDropdown.Item href="#Boton/3.1">
									Botón
								</ReactBootStrap.NavDropdown.Item>
								<ReactBootStrap.NavDropdown.Item href="#Boton/3.2">
									Otro botón
								</ReactBootStrap.NavDropdown.Item>
								<ReactBootStrap.NavDropdown.Item href="#Boton/3.3">
									Un botón
								</ReactBootStrap.NavDropdown.Item>
								<ReactBootStrap.NavDropdown.Divider />
								<ReactBootStrap.NavDropdown.Item href="#Boton/3.4">
									botón separado
								</ReactBootStrap.NavDropdown.Item>
							</ReactBootStrap.NavDropdown>
						</ReactBootStrap.Nav>
						<ReactBootStrap.Nav>
							<ReactBootStrap.Nav.Link href="#detalles">
								Detalles
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.Nav.Link
								eventKey={2}
								href="#contactos">
								Contacto
							</ReactBootStrap.Nav.Link>
						</ReactBootStrap.Nav>
					</ReactBootStrap.Navbar.Collapse>
				</ReactBootStrap.Container>
			</ReactBootStrap.Navbar>
		</div>
	);
};

export default Navbar;
