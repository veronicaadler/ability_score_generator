import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import renderClassMsg from './RenderClassMsg';
import renderRaceMsg from './RenderRaceMsg';

const GenerateScoresDisplay = ({ scores, charactername, characterclass, characterrace }) => {

    const [submitPending, setSubmitPending] = useState(false); //toggles the display of the submit button given whether the posting of the score to the json server has been successful
    const [comments, setComments] = useState(''); //tracks any comments the user makes in regards to scores

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        const score = {charactername, characterclass, characterrace, scores, comments} 
        //creates the object that will be submitted to the json server
        setSubmitPending(true);
        fetch('http://localhost:8000/scores', {
            method: 'POST',
            headers: {'Content-type': 'application/json'}, 
            //tells the server the type of content we are sending
            body: JSON.stringify(score)
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
                <h1>{`${charactername}'s Ability Scores`}</h1>
            </Col>
        </Row>
        <Row className="mb-4 mt-4 m-1 border border-dark border-5 rounded scores">
        {scores.map((score) => (
            <Col key={score.id} className="text-center m-1 pt-2" style={{fontSize: '3rem'}}>
                <p>{score.score}</p>
            </Col>
        ))}
        </Row>
        <Row className="mb-4 border border-dark border-5 rounded m-1 scores">
            <Col>
                <p className="fontgroup">As a {characterclass}...<span className="text-center">{renderClassMsg(characterclass)}</span></p>
                <p className="fontgroup">As a {characterrace}...<span className="text-center">{renderRaceMsg(characterrace)}</span></p>
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