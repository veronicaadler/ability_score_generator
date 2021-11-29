import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Generate = ({charactername, characterclass, characterrace}) => {

    const [abilityScores, setAbilityScores] = useState([]);
    const [isPending, setIsPending] = useState(false); //we will use this to later create loading animation
    const [error, setError] = useState(null);
    const [submitPending, setSubmitPending] = useState(false);
    const [comments, setComments] = useState('');

    useEffect(() => {
        function rollDice() {
        const totalAbilityScores = []; //will contain the values of every ability score
        for (let i = 0; i < 6; i++) { //loops through for the value of number of ability scores
            const singleAbilityScore = []; //holds the values of the elements that will be used to calculate an individual ability score
            for (let i = 0; i < 4; i++) { //loops through replicating a 4d6 roll (4 six sided dice rolls)
            let number = 1 + Math.floor(Math.random() * 6)
            singleAbilityScore.push(number) //push each value to singleAbilityScore
            }
            singleAbilityScore.sort(function(a,b){return a-b}); //places the values into numerical order
            singleAbilityScore.shift() //removes the first element in the array
            const initialAbilityScore = singleAbilityScore.reduce((sum, number) => {
                return sum + number; //sums the remaining values of the array
            }, 0) 
            totalAbilityScores.push(initialAbilityScore)
        } //adds each ability score to the totalAbilityScores
        totalAbilityScores.sort((a,b) => a-b);
        setAbilityScores(totalAbilityScores);
    }
        rollDice()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const score = {charactername, characterclass, characterrace, abilityScores, comments} 
        //creates the object that will be submitted to the json server
        setSubmitPending(true);
        fetch('http://localhost:8000/scores', {
            method: 'POST',
            headers: {'Content-type': 'application/json'}, 
            //tells the server the type of content we are sending
            body: JSON.stringify(score)
        }).then(() => {
            console.log('scores saved');
            setSubmitPending(false);
        })
    }

    const renderClassMsg = (characterclass) => {
        switch(characterclass) {
            case "Barbarian":
                return <div>Barbarians should give their highest scores to Strength, Dexterity, Constitution and Wisdom.</div>
            case "Bard":
                return <div>Charisma, Dexterity, and Intelligence are the Bard's most valued abilities.</div>
            case "Cleric":
                return <div>Wisdom determines the power of a cleric's spells.  Constitution and Charisma are also valued abilities.</div>
            case "Druid":
                return <div>Wisdom determines a druid's spell casting power.  Dexterity is also an important ability.</div>
            case "Fighter":
                return <div>Strength is especially important for fighters.  Constitution and dexterity are also valued abilities.</div>
            case "Monk": 
                return <div>Wisdom powers a monk's offense and defense.  Dexterity and Strength are also important abilities.</div>
            default:
                return <div>No info.</div>

    }}

    const renderRaceMsg = (characterrace) => {
        switch(characterrace) {
            case "Human":
                return <div>Humans have no bonuses or penalties to ability scores due to size. </div>
            case "Halfling":
                return <div>Halflings receive a +2 to Dexterity, and a -2 penalty to Strength due to their size.</div>
            case "Gnome":
                return <div>Gnomes receive a +2 modifier to Constitution, but their small size causes them to take a -2 hit to Strength.</div>
            case "Half-Orc":
                return <div>Half-orcs receive a +2 bonus to -2, but take a hit with -2 Intelligence and -2 Charisma. </div>
            case "Dwarf":
                return <div>Dwarves receive a +2 bonus to Constitution, but take a -2 hit to Charisma.</div>
            case "Half-elf":
                return <div>Half-elves have no bonuses or penalties due to size.</div>
            case "Elf":
                return <div>Elves receive a +2 bonus to Dexterity and a -2 modifier to Constitution.</div>
            default:
                return <div>No info.</div>
    }}

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
                        <h1>{`${charactername}'s Ability Scores`}</h1>
                    </Col>
                </Row>
                <Row className="mb-4 mt-4 m-1 border border-dark border-5 rounded scores">
                {abilityScores.map((score) => (
                    <Col className="text-center m-1 pt-2" style={{fontSize: '3rem'}}>
                        <p>{score}</p>
                    </Col>
                ))}
                </Row>
                <Row className="mb-4 border border-dark border-5 rounded m-1 scores">
                    <Col>
                        <p className="fontgroup">As a {characterclass}...<span className="text-center">{renderClassMsg(characterclass)}</span></p>
                        <p className="fontgroup">As a {characterrace}...<span className="text-center">{renderRaceMsg(characterrace)}</span></p>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col className="mb-3 m-1">
                                <FormGroup>
                                    <Label for="comments">
                                        Comments:
                                    </Label>
                                    <Input
                                        value={comments}
                                        id="comments"
                                        name="comments"
                                        type="textarea"
                                        onChange={(e) => setComments(e.target.value)}
                                    >
                                    </Input>
                                </FormGroup>
                        </Col>
                    </Row>
                    <Row className="text-center mb-3">
                        <Col>
                        {!submitPending &&
                            <Button
                                size="lg"
                                className="button" 
                                >Save Scores
                            </Button>
                        }
                        {submitPending &&
                            <Button
                                size="lg"
                                className="button" 
                                disabled
                                >Loading...
                            </Button>
                        }
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
      )};
}
 
export default Generate;