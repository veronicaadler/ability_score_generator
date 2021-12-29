const CharacterFormValidator = value => {
    if (!value || value === '') {
        return "This field is required."
    }
    const regex = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/ //regex checks that are all the name consists of non-numbers and the only white space comes between a first and last name
    if (value && !regex.test(value)) {
        return "Must enter a valid character name (no numbers or special characters, spaces only between letters)."
    }
}

export default CharacterFormValidator;