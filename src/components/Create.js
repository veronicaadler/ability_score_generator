import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col
                        className="p-0"
                    >
                    <img
                        src="assets/greenfighter.jpg"
                        alt="warrior"
                        className="img-fluid"
                    />
                    </Col>
                    <Col
                        className="mt-5">
                        <Form>
                            <FormGroup>
                                <Label for="name">Character Name: </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </FormGroup>
                            <FormGroup tag="fieldset" className="mt-4">
                                <legend style={{fontFamily: "Caveat, sans-serif", fontSize: "1.5rem"}}>How would you like to generate your scores?</legend>
                                <FormGroup check>
                                    <Input 
                                        type="radio"
                                        name="gentype"
                                        id="gentype1"
                                    />
                                    <Label check for="gentype1">Auto</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input 
                                        type="radio"
                                        name="gentype"
                                        id="gentype2"
                                    />
                                    <Label check for="gentype2">Manual</Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                        <Link to="/generate">
                        <Button style={{backgroundColor: '#282322', color: 'white'}} size="lg" className="mt-5 float-end">Next</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
      );
}
 
export default Create;