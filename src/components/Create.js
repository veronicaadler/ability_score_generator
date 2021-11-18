import { useState } from 'react';
import Races from '../shared/Races';
import Classes from '../shared/Classes';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = ({ inputName, inputClass, inputRace }) => {

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
                            <FormGroup className="mb-4">
                                <Label for="name">Character Name: </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    onChange={(event) => inputName(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                    <Label 
                                        for="raceselector"
                                    >
                                    Select Race   
                                    </Label>
                                        <Input
                                            id="raceselector"
                                            name="raceselector"
                                            type="select"
                                            onChange={(event) => inputRace(event.target.value)}
                                        >
                                        {Races.map((race) => (
                                            <option key={race.id}>
                                                {race.title}
                                            </option>
                                        ))}
                                        </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label 
                                        for="classselector"
                                    >
                                    Select Class  
                                    </Label>
                                        <Input
                                            id="classselector"
                                            name="classselector"
                                            type="select"
                                            onChange={(event) => inputClass(event.target.value)}
                                        >
                                        {Classes.map((choice) => (
                                            <option key={choice.id}>
                                                {choice.title}
                                            </option>
                                        ))}
                                        </Input>
                                </FormGroup>
                        </Form>
                        <Link to="/generate">
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