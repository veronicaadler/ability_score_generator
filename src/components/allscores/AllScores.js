import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const AllScores = () => {

    const [scores, setScores] = useState([]);
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://json-server-for-heroku.herokuapp.com/scores')
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
                        <Card className="mb-3" key={score.id}>
                            <CardBody>
                                <Link to={`/allscores/${score.id}`} className="nav-link cardtitle">
                                    <CardTitle className="text-center">
                                    {score.name}, the {score.classname} {score.race}
                                    </CardTitle>
                                </Link>
                            </CardBody>
                        </Card>
                ))}
                </Col>
            </Row>
        </Container>
      );
    }
}
 
export default AllScores;