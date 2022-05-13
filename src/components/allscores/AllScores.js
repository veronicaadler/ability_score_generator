import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import useFetch from '../shared/useFetch';
import ErrorMsg from '../shared/ErrorMsg';


const AllScores = () => {

    const { data: scores, isPending, error } = useFetch('https://json-server-for-heroku.herokuapp.com/scores')


    if (error || isPending) {
        return (
          <ErrorMsg error={error} isPending={isPending} />
        )
    }
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