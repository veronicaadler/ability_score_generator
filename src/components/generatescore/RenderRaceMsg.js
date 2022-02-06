const renderRaceMsg = (characterrace) => {
    switch(characterrace) {
        case "Human":
            return <div>Humans have no bonuses or penalties to ability scores due to size. </div>
        case "Halfling":
            return <div>Halflings receive a +2 to Dexterity, and a -2 penalty to Strength due to their size.</div>
        case "Gnome":
            return <div>Gnomes receive a +2 modifier to Constitution, but their small size causes them to take a -2 hit to Strength.</div>
        case "Half-Orc":
            return <div>Half-orcs receive a +2 bonus to Strength, but take a hit with -2 Intelligence and -2 Charisma. </div>
        case "Dwarf":
            return <div>Dwarves receive a +2 bonus to Constitution, but take a -2 hit to Charisma.</div>
        case "Half-elf":
            return <div>Half-elves have no bonuses or penalties due to size.</div>
        case "Elf":
            return <div>Elves receive a +2 bonus to Dexterity and a -2 modifier to Constitution.</div>
        default:
            return <div>No info.</div>
}}

export default renderRaceMsg;