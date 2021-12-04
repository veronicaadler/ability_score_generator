import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = ({ inputName, inputClass, inputRace, name, classname, race }) => {

    const [possibleClasses, setPossibleClasses] = useState([]);
    const [possibleRaces, setPossibleRaces] = useState([]);
    const [isPending, setIsPending] = useState(true); //used to create loading messages/animation
    const [error, setError] = useState(null); //used for errors in fetch
    const [nameError, setNameError] = useState(false);

    useEffect(() => {
        const abortControl = new AbortController();

        Promise.all([
            fetch('http://localhost:8000/classes'),
            fetch('http://localhost:8000/races')
        ], { signal: abortControl.signal } )
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
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log('fetch aborted')
                    } else { //catches any network errors, like not being able to connect to server
                    setError(err.message);
                    setIsPending(false);
                }})

            return () => abortControl.abort();
    }, []);


    const handleBlurName = () => {
        const regex = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/
        if (name && !regex.test(name)) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }


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
                                    {possibleRaces.map((race) => (
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
                                    {possibleClasses.map((choice) => (
                                        <option key={choice.id}>
                                            {choice.title}
                                        </option>
                                    ))}
                                    </Input>
                            </FormGroup>
                    </Form>

                    {(classname && race) && (!nameError)
                        ? 
                        <Link to="/generate" class="mt-5 float-end button btn lg buttonlink">Next</Link>
                        : null
                    }
                </Col>
            </Row>
        </Container>
      )};
}
 
export default Create;