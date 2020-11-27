import React from "react"
import "./NavBar.css"
import logo from '../data/logo.png';
import profilepic from '../data/profile_picture.png';
import { Navbar, Form, Nav} from "react-bootstrap"
import { Link, withRouter} from 'react-router-dom'
const NavBar = () => {
    return (
    <Navbar className="navBar py-0 m-0 px-1">
        <Navbar.Brand> <img style={{height: "65px"}} src={logo}/>
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/movies">
          <Nav.Link className="navLink" href="#movies"> Tv Shows</Nav.Link>
          </Link>
          <Link to="/tvshows">
          <Nav.Link className="navLink" href="#tvshows">Movies</Nav.Link>
          </Link>
          <Nav.Link className="navLink" href="#recentlyAdded">Recently Added</Nav.Link>
          <Nav.Link className="navLink" href="#myList">My List</Nav.Link>
        </Nav>
        <Form inline>
         
        </Form>
        <Link to="/register">
        <Navbar.Brand> <img style={{height: "30px"}} src={profilepic} className="ml-2"/>
          </Navbar.Brand>
          </Link>
      </Navbar>
      )
    }
    
    export default withRouter(NavBar);

