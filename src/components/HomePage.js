import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from "./Header"

function HomePage() {
    return (
        <div>
            <Header />
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
                        <h3 className=" mb-4" style={{fontSize: '3rem', marginTop: '13rem'}}>Build your characters with ease.</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button style={{backgroundColor: '#282322', color: 'white'}} size="lg" className="mt-2">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;