import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import NavBar from "./Navbar"

function Header() {
    return (
        <Jumbotron fluid className="jumbotron">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col style={{fontFamily: 'Caveat, sans-serif'}} xs="8" className="">
                        <img 
                                src="assets/logo.png"
                                alt="logo"
                                className="img-fluid logo mt-1 mb-1"
                                style={{maxWidth: 60, marginRight: 5}}
                            />
                            <h1 className="logotitle align-self-end" style={{display: 'inline-block'}}>D&D v3.5 Ability Score Generator</h1>
                        </Col>
                        <Col xs="4">
                            <NavBar />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
    )
}

export default Header;