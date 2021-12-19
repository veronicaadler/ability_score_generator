import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardSubtitle} from 'reactstrap';

const AllScoreDetails = () => {

    const [score, setScore] = useState([]); //stores the individual score data from the json server
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:8000/scores/' + id)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch your score.')
                }
                return res.json();
            })
            .then(data => {
                setScore(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
    }, [id])

    const handleClick = () => {
        fetch('http://localhost:8000/allscores/' + score.id, {
            method: 'DELETE'
          }).then(() => {
            history.push('/scores');
          }) 
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
      <Container>
        <Row>
          <Col>
            <Card className="mb-3 mt-5">
              <CardBody>
                <CardTitle>Scores:</CardTitle>
                <CardSubtitle className="text-center">
                  {score.abilityScores.map((ability) => (
                    <span
                      className="m-2 col-12 spanscore"
                    >
                      {ability}
                    </span>
                  ))}
                  {score.comments && (
                    <div className="text-start mb-2">
                      Comments: {score.comments}
                    </div>
                  )}
                  </CardSubtitle>
                  <CardText className="mt-4">
                  <Button
                    onClick={handleClick}
                    style={{ backgroundColor: "#939C82" }}
                    className="col-12"
                  >
                    Delete
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );};
}
 
export default AllScoreDetails;