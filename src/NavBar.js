import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiKnifeFork } from "react-icons/gi";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand className="brand_name">
                        <GiKnifeFork className="d-inline-block me-3 brand_logo" />
                        <p className="brand_title">Os Magalhães</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-nav-bar"></Navbar.Toggle>
                    <Navbar.Collapse
                        id="basic-nav-bar"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#menus">Menus</Nav.Link>
                        </Nav>
                        <Navbar.Text className="ms-2">
                            <a href="tel:+351214964308">
                                Call us: +351 214964308
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
