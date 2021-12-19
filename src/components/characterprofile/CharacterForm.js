import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';

const CharacterForm = ({ inputName, inputClass, inputRace, name, classname, race, allClasses, allRaces }) => {

    const [nameError, setNameError] = useState(false); //watches for any invalid name inputs

    const handleBlurName = () => {
        const regex = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/ //regex checks that are all the name consists of non-numbers and the only white space comes between a first and last name
        if (name && !regex.test(name)) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }

    return (
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
                                invalid={nameError}
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(event) => inputName(event.target.value)}
                                onBlur={handleBlurName}
                            />
                            {nameError && <FormFeedback>Must enter a valid character name (no numbers or special characters, spaces only between letters).</FormFeedback>}
                        </FormGroup>
                        <FormGroup className="mb-3">
                                <Label 
                                    for="raceselector"
                                >
                                Select Race:  
                                </Label>
                                    <Input
                                        
                                        id="raceselector"
                                        name="raceselector"
                                        type="select"
                                        value={race}
                                        onChange={(event) => inputRace(event.target.value)}

                                    >
                                    <option value="" disabled hidden>Choose</option>
                                    {allRaces.map((race) => (
                                        <option key={race.id}>
                                            {race.title}
                                        </option>
                                    ))}
                                    </Input>
                            </FormGroup>
                            <FormGroup 
                                className="mb-2">
                                <Label 
                                    for="classselector"
                                >
                                Select Class: 
                                </Label>
                                    <Input
                                        
                                        id="classselector"
                                        name="classselector"
                                        type="select"
                                        value={classname}
                                        onChange={(event) => inputClass(event.target.value)}
  
                                    >
                                    <option value="" disabled hidden>Choose</option>
                                    {allClasses.map((choice) => (
                                        <option key={choice.id}>
                                            {choice.title}
                                        </option>
                                    ))}
                                    </Input>
                            </FormGroup>
                    </Form>

                    {(classname && race) && (!nameError)
                        ? 
                        <Link to="/generatescore" class="mt-5 float-end button btn lg">Next
                        </Link>
                        :null
                    }
                </Col>
            </Row>
        </Container>
      );
}
 
export default CharacterForm;