import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import myLogo from "/src/Assets/store1.gif"

const NavBar = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const token = localStorage.getItem("token");

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (token) {
            setShow(true);
        } else {
            navigate("/login");
        }
    };

    return (
        <div>
            <Navbar bg="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="/#/"><img className='navBarImg' src={myLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#/">Home</Nav.Link>
                            <Nav.Link href="/#/Purchases">Purchases</Nav.Link>
                            <Nav.Link href="/#/Login"><i className="fa-solid fa-user"></i></Nav.Link>
                            <Nav.Link as={Button} onClick={handleShow}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartSidebar show={show} handleClose={handleClose} />
        </div>
    );
};

export default NavBar;