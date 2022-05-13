import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { useHistory } from "react-router-dom";
import RenderInputName from "../characterprofile/RenderInputName";
import RenderSelectRace from "../characterprofile/RenderSelectRace";
import RenderSelectClass from "../characterprofile/RenderSelectClass";
import CharacterFormValidator from "../characterformvalidator/CharacterFormValidator";

const CharacterForm = ({ allClasses, allRaces, handleSubmit, valid }) => {
  const history = useHistory();

  const submitScores = () => {
    history.push("/generatescore");
  };

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12 col-md-7 col-lg-6">
          <img
            src="assets/greenfighter.jpg"
            alt="warrior"
            className="img-fluid"
          />
        </Col>
        <Col className="mt-5">
          <Form onSubmit={handleSubmit(submitScores)}>
            <FormGroup className="mb-4">
              <Label for="name"> </Label>
              <Field
                className="input-group"
                component={RenderInputName}
                name="name"
                validate={CharacterFormValidator}
                label="Character Name:"
                type="input"
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Field
                name="race"
                label="Select Race:"
                validate={CharacterFormValidator}
                component={RenderSelectRace}
              >
                <option value="" disabled hidden>
                  Choose
                </option>
                {allRaces.map((race) => (
                  <option key={race.id}>{race.title}</option>
                ))}
              </Field>
            </FormGroup>
            <FormGroup className="mb-2">
              <Field
                name="classname"
                label="Select Class:"
                validate={CharacterFormValidator}
                component={RenderSelectClass}
              >
                <option value="" disabled hidden>
                  Choose
                </option>
                {allClasses.map((choice) => (
                  <option key={choice.id}>{choice.title}</option>
                ))}
              </Field>
            </FormGroup>
            <Button
              type="submit"
              disabled={!valid}
              className="mt-5 float-end button btn lg"
            >
              Next
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "character",
  destroyOnUnmount: false,
})(CharacterForm);
