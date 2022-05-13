import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";

const Loading = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center mt-5">
          <FontAwesomeIcon spin size="5x" icon={faCog}></FontAwesomeIcon>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
