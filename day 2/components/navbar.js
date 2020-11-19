import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../components/latestRelease.css"

function BookNavbar(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Books.com</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#foo">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
        </>
    )
}

export default BookNavbar