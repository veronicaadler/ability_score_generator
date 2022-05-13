import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
} from "reactstrap";
import useFetch from '../../components/shared/useFetch';
import ErrorMsg from '../../components/shared/ErrorMsg';

const SingleScore = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: score,
    isPending,
    error,
  } = useFetch("https://json-server-for-heroku.herokuapp.com/scores/" + id);

  const handleClick = () => {
    fetch("https://json-server-for-heroku.herokuapp.com/scores/" + score.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/allscores");
    });
  };

  if (error || isPending) {
    return (
      <ErrorMsg error={error} isPending={isPending} />
    )
} else {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="mb-3 mt-5">
              <CardBody>
                <CardTitle>Scores:</CardTitle>
                <CardSubtitle className="text-center">
                  {score.reduxscores.map((ability) => (
                    <span key={ability.id} className="m-2 col-12 spanscore">
                      {ability.score}
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
    );
  }
};

export default SingleScore;
