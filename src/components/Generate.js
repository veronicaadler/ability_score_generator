import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Abilities from '../shared/Abilities';

const Generate = ({charactername, characterclass, characterrace}) => {

    const [abilities, setAbilities] = useState([]);
    const [abilityScores, setAbilityScores] = useState([]);
    const [isPending, setIsPending] = useState(true); //we will use this to later create loading animation
    const [error, setError] = useState(null);

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
        const numberOfAbilityScores = Abilities.length; //takes the number of ability scores from the Abilities array
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
        <div>
            <Container fluid>
                <Row>
                    <Col className="text-center mb-5 mt-4">
                        <h1>{charactername} {characterclass} {characterrace} 's Ability Scores</h1>
                    </Col>
                </Row>
                <Row className="text-center">
                {abilities.map((a) => (
                    <Col key={a.id} className="col-12 col-sm-6 col-md-2">
                        <h3>{a.title}</h3>
                        <p>{a.subtitle}</p>
                    </Col>
                ))}
                </Row>
                <Row>
                {abilityScores.map((score) => (
                    <Col>
                        <p>{score}</p>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
      )};
}
 
export default Generate;