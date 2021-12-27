import { useEffect, useState, useRef } from 'react';
import GenerateScoresDisplay from './GenerateScoresDisplay';

const GenerateScores = () => {

    const [abilityScores, setAbilityScores] = useState([]); //the ability scores, calculated upon component's mount

    const rollDice = useRef(() => {})

    rollDice.current = () => {
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

        totalAbilityScores.sort((a,b) => a-b); //sorts the ability scores in ascending order
        createAbilityObjects(totalAbilityScores);
    }


    //The following function creates a new array of objects with the ability scores.
    //Creates the necessary key value that will be used in rendering the scores.
    const createAbilityObjects = (totalscoresarray) => { 
        const abilityScoresWithKeys = [];
        for (let i = 0; i < totalscoresarray.length; i++) {
            abilityScoresWithKeys.push(
                {
                    id: i,
                    score: totalscoresarray[i]
                }
            )
        }
        console.log(abilityScoresWithKeys)
        setAbilityScores(abilityScoresWithKeys);
    }

    useEffect(() => {
        rollDice.current()
    }, [])

    return (
        <GenerateScoresDisplay 
            scores={abilityScores}
        />
      );
}
 
export default GenerateScores;