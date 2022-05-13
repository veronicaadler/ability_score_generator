const ClassMsg = (characterclass) => {
  switch (characterclass) {
    case "Barbarian":
      return (
        <div>
          Barbarians should give their highest scores to Strength, Dexterity,
          Constitution and Wisdom.
        </div>
      );
    case "Bard":
      return (
        <div>
          Charisma, Dexterity, and Intelligence are the Bard's most valued
          abilities.
        </div>
      );
    case "Cleric":
      return (
        <div>
          Wisdom determines the power of a cleric's spells. Constitution and
          Charisma are also valued abilities.
        </div>
      );
    case "Druid":
      return (
        <div>
          Wisdom determines a druid's spell casting power. Dexterity is also an
          important ability.
        </div>
      );
    case "Fighter":
      return (
        <div>
          Strength is especially important for fighters. Constitution and
          dexterity are also valued abilities.
        </div>
      );
    case "Monk":
      return (
        <div>
          Wisdom powers a monk's offense and defense. Dexterity and Strength are
          also important abilities.
        </div>
      );
    case "Paladin":
      return (
        <div>
          Charisma powers many of a paladin's abilities, and Strength powers
          their combat skills. High Wisdom is needed to power their spells.
        </div>
      );
    case "Ranger":
      return (
        <div>
          Dexterity is prized among rangers. Strength is important for combat,
          and their spells are cast based on their Wisdom score.
        </div>
      );
    case "Rogue":
      return (
        <div>
          Dexterity is important for rogues in combat. Dexterity, along with
          Intelligence and Wisdom, determine a rogue's skills. High Intelligence
          can also be useful for extra skill points.
        </div>
      );
    case "Sorcerer":
      return (
        <div>
          Charisma determines a sorcerer's spell power and casting. They may
          also benefit from high Dexterity and Constitution scores.
        </div>
      );
    case "Wizard":
      return (
        <div>
          Intelligence determines the power and number of a wizard's spells.
          Good Dexterity is also important as they wear little armor, and
          Constitution also serves to defend them to battle.
        </div>
      );
    default:
      return <div>No info.</div>;
  }
};

export default ClassMsg;
