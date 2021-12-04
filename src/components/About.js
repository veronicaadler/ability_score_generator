import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col 
                        className="p-0 m-0 col-12 col-md-7 col-lg-6">
                    <img 
                        src="assets/druid.jpg"
                        alt="warrior"
                        className="img-fluid"
                    />
                    </Col>
                    <Col className="text-center">
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link to="/" class="button lg btn button buttonlink">Home
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
      );
}
 
export default About;
