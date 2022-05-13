import { Jumbotron, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <Jumbotron fluid className="jumbotron">
      <Container fluid>
        <Row className="align-items-center">
          <Col
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="col-10 col-sm-9 col-md-7"
          >
            <NavLink to="/" className="logolink">
              <img
                src="assets/logo.png"
                alt="logo"
                className="img-fluid logo mt-1 mb-1"
                style={{ maxWidth: 60, marginRight: 5 }}
              />
              <h1 className="logotitle" style={{ display: "inline-block" }}>
                D&D v3.5 Ability Score Generator
              </h1>
            </NavLink>
          </Col>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
