import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Abilities from '../shared/Abilities';

const Generate = ({charactername, characterclass, characterrace}) => {


    const [abilityScores, setAbilityScores] = useState([])

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

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="text-center mb-5 mt-4">
                        <h1>{charactername} {characterclass} {characterrace} 's Ability Scores</h1>


                    </Col>
                </Row>
                <Row className="text-center">
                {Abilities.map((ability) => (
                    <Col key={ability.id} className="col-12 col-sm-6 col-md-2">
                        <h3>{ability.title}</h3>
                        <p>{ability.subtitle}</p>
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
      );
}
 
export default Generate;