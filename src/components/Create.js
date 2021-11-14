import { useState } from 'react';
import { Container, Row, Col, Button, Form, FormText, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState({
        auto: false,
        manual: false
    })

    let url = ""
    if (message.manual) {
        url = "/manual"
    } else {
        url = "/autogenerate"
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col
                        className="p-0 col-12 col-md-7 col-lg-6"
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
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup tag="fieldset" className="mt-4">
                                <legend style={{fontFamily: "Caveat, sans-serif", fontSize: "1.5rem"}}>How would you like to generate your scores?</legend>
                                {message.auto &&
                                    <p>Have us calculate your ability scores entirely for you, replicating dice rolls.</p>
                                }
                                {message.manual &&
                                    <p>Want to roll your own dice?  Give us your roll numbers and we'll use them to calculate your ability scores.</p>
                                }
                                <FormGroup check>
                                    <Input 
                                        type="radio"
                                        name="gentype"
                                        id="gentype1"
                                        onClick={() => setMessage({auto: true, manual: false})}
                                    />
                                    <Label check for="gentype1">Auto</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input 
                                        type="radio"
                                        name="gentype"
                                        id="gentype2"
                                        onClick={() => setMessage({auto: false, manual: true})}
                                    />
                                    <Label check for="gentype2">Manual</Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                        <Link to={url}>
                        <Button 
                            style={{backgroundColor: '#282322', color: 'white'}} 
                            size="lg" 
                            className="mt-5 float-end">Next</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
      );
}
 
export default Create;