import { useEffect, useState } from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const Scores = () => {

    const [scores, setScores] = useState([]);
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/scores')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch your scores.')
                }
                return res.json();
            })
            .then(data => {
                setScores(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
    }, [])

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
        <Container>
            <Row>
                <Col className="text-center mt-2 mb-3">
                    <h1>Saved Characters</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                {scores.map((score) => (
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle>
                            {score.charactername}, the {score.characterclass} {score.characterrace}
                            </CardTitle>
                            <CardSubtitle style={{fontStyle: 'italic'}}>
                                Begins the journey with the following ability scores
                            </CardSubtitle>
                            <CardText>
                                {score.abilityScores.map((ability) => (
                                    <span className="m-2 scorelineup">{ability}</span>
                                ))}
                                <div>Comments: {score.comments}</div>
                                <Button>Delete</Button>
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
                </Col>
            </Row>
        </Container>
      );
    }
}
 
export default Scores;