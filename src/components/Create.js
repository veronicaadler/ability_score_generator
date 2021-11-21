import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = ({ inputName, inputClass, inputRace, name, classname, race }) => {

    const [possibleClasses, setPossibleClasses] = useState([]);
    const [possibleRaces, setPossibleRaces] = useState([]);
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:8000/classes'),
            fetch('http://localhost:8000/races')
        ])
                .then(([res1, res2]) => {
                if (!res1.ok || !res2.ok) {
                    throw Error('could not fetch the data needed for this page.')
                } else {
                    return [res1, res2]
                }}) 
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))//gets the response object and passes the json into a Javascript object.  Returns a promise as this takes some time.
                .then(([data1, data2]) => { //here we are using the data retrieved from the fetch
                    setPossibleClasses(data1);
                    setPossibleRaces(data2);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => { //catches any network errors, like not being able to connect to server
                    setError(err.message);
                    setIsPending(false);
                })
    }, []);

    if (error) {
        return (
          <div>{ error }</div>
          )}
    if (isPending) {
         return (
         <div>Loading...</div>
         )}
    else {
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
                                type="text"
                                name="name"
                                id="name"
                                value={name}
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
                                        value={race}
                                        onChange={(event) => inputRace(event.target.value)}
                                    >
                                    {possibleRaces.map((race) => (
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
                                        value={classname}
                                        onChange={(event) => inputClass(event.target.value)}
                                    >
                                    {possibleClasses.map((choice) => (
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
      )};
}
 
export default Create;