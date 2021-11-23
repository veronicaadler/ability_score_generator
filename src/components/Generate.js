import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Generate = ({charactername, characterclass, characterrace}) => {

    const [abilities, setAbilities] = useState([]);
    const [abilityScores, setAbilityScores] = useState([]);
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);
    const [isAscendingChecked, setAscending] = useState(false);
    const [isDescendingChecked, setDescending] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/abilities')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the required resources.')
                }
                return res.json();
            })
            .then(data => {
                setAbilities(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
    }, [])

    useEffect(() => {
        function rollDice() {
        const numberOfAbilityScores = abilities.length; //takes the number of ability scores from the Abilities array
        console.log(numberOfAbilityScores);
        const totalAbilityScores = []; //will contain the values of every ability score
        for (let i = 0; i < numberOfAbilityScores; i++) { //loops through for the value of number of ability scores
            const singleAbilityScore = []; //holds the values of the elements that will be used to calculate an individual ability score
            for (let i = 0; i < 4; i++) { //loops through replicating a 4d6 roll (4 six sided dice rolls)
            let number = 1 + Math.floor(Math.random() * 6)
            singleAbilityScore.push(number) //push each value to singleAbilityScore
            }
            singleAbilityScore.sort(function(a,b){return a-b}); //places the values into numerical order
            console.log(singleAbilityScore)
            singleAbilityScore.shift() //removes the first element in the array
            console.log(singleAbilityScore)
            const initialAbilityScore = singleAbilityScore.reduce((sum, number) => {
                return sum + number; //sums the remaining values of the array
            }, 0) 
            totalAbilityScores.push(initialAbilityScore)
        } //adds each ability score to the totalAbilityScores
        console.log(totalAbilityScores)
        setAbilityScores(totalAbilityScores);
    }
        rollDice()
    }, [abilities.length])

    const sortScoresAscending = () => {
        setAbilities(abilityScores.sort((a, b) => a-b));
        setAscending(!isAscendingChecked);
        setDescending(false);
    }

    const sortScoresDescending = () => {
        setAbilities(abilityScores.sort((a, b) => b-a));
        setDescending(!isDescendingChecked);
        setAscending(false);
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
        <div>
            <Container fluid>
                <Row>
                    <Col className="text-center mb-5 mt-4">
                        <h1>{`${charactername} the ${characterclass} ${characterrace}'s Ability Scores`}</h1>
                    </Col>
                </Row>
                <Row className="mb-5 mt-4">
                {abilityScores.map((score) => (
                    <Col className="text-center pt-3 m-3 scores">
                        <p>{score}</p>
                    </Col>
                ))}
                </Row>
                <Row >
                    <Form>
                        <FormGroup check>
                        <Label check for="ascendingcheck">
                                Sort Low to High
                            </Label>
                            <Input
                                type="checkbox"
                                id="ascendingcheck"
                                checked={isAscendingChecked}
                                onChange={sortScoresAscending}
                            />
                        </FormGroup>
                        <FormGroup check>
                        <Label check for="ascendingcheck">
                                Sort High to Low                            
                        </Label>
                            <Input
                                type="checkbox"
                                id="ascendingcheck"
                                checked={isDescendingChecked}
                                onChange={sortScoresDescending}
                            />
                        </FormGroup>
                    </Form>
                </Row>
            </Container>
        </div>
      )};
}
 
export default Generate;