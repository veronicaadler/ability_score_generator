import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="p-0 m-0 col-12 col-md-7 col-lg-6">
            <img src="assets/druid.jpg" alt="warrior" className="img-fluid" />
          </Col>
          <Col className="text-center">
            <p className="mb-5 mt-4">
              Whether you're a half-orc barbarian or gnome bard, ability scores
              are central to D&D gameplay. Compromised of Strength,
              Constitution, Charisma, Dexterity, Intelligence and Wisdom, they
              are the basis for how your character interacts in the world.
              Typically, ability scores are chosen to best enhance a character's
              effectiveness in their chosen class. For example, a barbarian
              would highly value strength, while a bard relies on charisma for
              the power of their song.
            </p>
            <Link to="/create" className="button lg btn button buttonlink">
              Create New Scores
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
