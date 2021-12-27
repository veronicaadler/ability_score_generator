import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import renderClassMsg from './RenderClassMsg';
import renderRaceMsg from './RenderRaceMsg';
import { useSelector } from 'react-redux';

const GenerateScoresDisplay = () => {

    const [submitPending, setSubmitPending] = useState(false); //toggles the display of the submit button given whether the posting of the score to the json server has been successful
    const [comments, setComments] = useState(''); //tracks any comments the user makes in regards to scores

    const history = useHistory()

    const {name, race, classname} = useSelector(state => state.form.character.values)
    const reduxscores = useSelector(state => state.abilityscores.score)
    reduxscores.map(score => console.log(score))
    const handleSubmit = (event) => {
        event.preventDefault();
        const serverscore = {name, race, classname, reduxscores, comments} 
        //creates the object that will be submitted to the json server
        setSubmitPending(true);
        fetch('http://localhost:8000/scores', {
            method: 'POST',
            headers: {'Content-type': 'application/json'}, 
            //tells the server the type of content we are sending
            body: JSON.stringify(serverscore)
        }).then(() => {
            console.log('scores saved');
            setSubmitPending(false);
            history.push('/scores');
        })
    }

    return (

        <Container fluid>
        <Row>
            <Col className="text-center mb-5 mt-4">
                <h1>{`${name}'s Ability Scores`}</h1>
            </Col>
        </Row>
        <Row className="mb-4 mt-4 m-1 border border-dark border-5 rounded scores">
        {reduxscores.map((score) => (
            <Col key={score.id} className="text-center m-1 pt-2" style={{fontSize: '3rem'}}>
                <p>{score.score}</p>
            </Col>
        ))}
        </Row>
        <Row className="mb-4 border border-dark border-5 rounded m-1 scores">
            <Col>
                <h3 className="fontgroup">As a {classname}...<span className="text-center">{renderClassMsg(classname)}</span></h3>
                <h3 className="fontgroup">As a {race}...<span className="text-center">{renderRaceMsg(race)}</span></h3>
            </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="mb-3 m-1">
                        <FormGroup>
                            <Label for="comments">
                                Comments:
                            </Label>
                            <Input
                                value={comments}
                                id="comments"
                                name="comments"
                                type="textarea"
                                onChange={(e) => setComments(e.target.value)}
                            >
                            </Input>
                        </FormGroup>
                </Col>
            </Row>
            <Row className="text-center mb-3">
                <Col>
                {!submitPending &&
                    <Button
                        size="lg"
                        className="button" 
                        >Save Scores
                    </Button>
                }
                {submitPending &&
                    <Button
                        size="lg"
                        className="button" 
                        disabled
                        >Loading...
                    </Button>
                }
                </Col>
            </Row>
        </Form>
    </Container>
      );
}
 
export default GenerateScoresDisplay;