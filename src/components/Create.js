import { useState } from 'react';
import Races from '../shared/Races';
import Classes from '../shared/Classes';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = ({ inputName }) => {

    const [message, setMessage] = useState({
        auto: false,
        manual: false
    })

    const [modifiers, setModifiers] = useState(true);

    let url = ""
    if (message.manual) {
        url = "/manual"
    } else {
        url = "/auto"
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
                                    onChange={(event) => inputName(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup tag="fieldset" className="mt-4 mb-4">
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
                            <FormGroup check>
                                <Input
                                    id="raceclass"
                                    name="raceclass"
                                    type="checkbox"
                                    checked={modifiers}
                                    onClick={() => setModifiers(!modifiers)}
                                />
                                <Label
                                    check
                                    for="raceclass"
                                    className="mb-3"
                                > Apply Race and Class Modifiers
                                </Label>
                            </FormGroup>
                            {modifiers &&
                            <div>
                                <FormGroup className="mb-3">
                                    <Label 
                                        for="raceselector"
                                    >
                                    Select Race   
                                    </Label>
                                    <Col className="col-12 col-sm-8 col-md-6">
                                        <Input
                                            id="raceselector"
                                            name="raceselector"
                                            type="select"
                                        >
                                        {Races.map((race) => (
                                            <option key={race.id}>
                                                {race.title}
                                            </option>
                                        ))}
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label 
                                        for="classselector"
                                    >
                                    Select Class  
                                    </Label>
                                    <Col className="col-12 col-sm-8 col-md-6">
                                        <Input
                                            id="classselector"
                                            name="classselector"
                                            type="select"
                                        >
                                        {Classes.map((choice) => (
                                            <option key={choice.id}>
                                                {choice.title}
                                            </option>
                                        ))}
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </div>
                            }
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