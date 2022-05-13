import { useEffect, useRef } from "react";
import ScoresDisplay from "../../components/scoresdisplay/ScoresDisplay";
import { useDispatch } from "react-redux";
import { createScore } from "../../redux/scores/scoreActions";

const Generate = () => {
  const dispatch = useDispatch();

  const rollDice = useRef(() => {});

  rollDice.current = () => {
    const AbilityScores = [];
    for (let i = 0; i < 6; i++) {
      //loops through for the 6 ability scores
      const singleAbilityScore = [];
      //replicates the instructions from D&D handbook to calculate ability scores
      for (let i = 0; i < 4; i++) {
        //roll a 4d6
        let number = 1 + Math.floor(Math.random() * 6);
        singleAbilityScore.push(number);
      }
      singleAbilityScore
        .sort(function (a, b) {
          return a - b;
        })
        .shift(); //remove lowest number
      const initialAbilityScore = singleAbilityScore.reduce((sum, number) => {
        return sum + number;
      }, 0); //add remaining numbers
      AbilityScores.push({
        id: i,
        score: initialAbilityScore,
      });
    }
    dispatch(createScore(AbilityScores));
  };

  useEffect(() => {
    rollDice.current();
  }, []);

  return <ScoresDisplay />;
};

export default Generate;
