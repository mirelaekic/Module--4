import React from "react"
import {Row, Col, Nav} from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../assets/navbar.css"

class Navbar extends React.Component{
    render(){
        return(
            <>
            <Row>
                <Col md={3} style={{backgroundColor:"black"}}>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Link>
                            <img    
                          class="title img-fluid"
                          src={logo}
                          alt="spotify logo"
                      />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/home">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                Search
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                Your Library
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            </>
        )
    }
}

export default withRouter(Navbar);