import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import NavBar from "./Navbar"

function HomePage() {
    return (
        <div>
            <Jumbotron fluid className="jumbotron">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col style={{fontFamily: 'Caveat, sans-serif'}} xs="8" className="">
                        <img 
                                src="assets/logo.png"
                                alt="logo"
                                className="img-fluid logo"
                                style={{maxWidth: 60, marginRight: 5}}
                            />
                            <h1 className="logotitle align-self-end" style={{display: 'inline-block'}}>D&D 3.5 Ability Score Generator</h1>
                        </Col>
                        <Col xs="4">
                            <NavBar />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                    <img 
                        src="assets/redhairedwarrior.jpg"
                        alt="warrior"
                        className="img-fluid warrior"
                    />
                    </Col>
                    <Col className="text-center">
                        <h3 className="mt-5" style={{fontSize: '3rem'}}>Build your characters with ease.</h3>
                        <Button size="lg">Get Started</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default HomePage;