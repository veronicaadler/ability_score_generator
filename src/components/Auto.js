import { Container, Row, Col } from 'reactstrap';

const Auto = ({charactername}) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Hello {charactername}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
      );
}
 
export default Auto;