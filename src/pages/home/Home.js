import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="p-0 m-0 col-12 col-md-7 col-lg-6">
            <img
              src="assets/redhairedwarrior.jpg"
              alt="warrior"
              className="img-fluid"
            />
          </Col>
          <Col className="text-center">
            <h3 className="mb-4 mt-5 spanscore">
              Build your characters with ease.
            </h3>
            <p className="mb-5">
              An easy to use tool that automatically generates your Dungeons and
              Dragons v3.5 ability scores. Suggests how to assign your ability
              scores based on class and race modifiers. Stores your scores and
              notes so you can focus on playing.
            </p>
            <Link to="/create" className="button lg btn button buttonlink">
              Get Started
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
