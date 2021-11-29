import { useEffect, useState } from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

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
                <Col>
                {scores.map((score) => (
                    <Card>
                        <CardBody>
                            <CardTitle>
                                {score.charactername}
                            </CardTitle>
                            <CardSubtitle>
                                A {score.characterclass} {score.characterrace}
                            </CardSubtitle>
                            <CardText>
                                {score.abilityScores.map((ability) => (
                                    <span className="m-2">{ability}</span>
                                ))}
                                <div>Comments: {score.comments}</div>
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