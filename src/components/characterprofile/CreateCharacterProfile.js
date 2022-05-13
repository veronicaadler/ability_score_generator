import { useState, useEffect } from 'react';
import CharacterForm from '../characterform/CharacterForm';
import ErrorMsg from '../shared/ErrorMsg';

const CreateCharacterProfile = () => {

    const [possibleClasses, setPossibleClasses] = useState([]);
    const [possibleRaces, setPossibleRaces] = useState([]);
    const [isPending, setIsPending] = useState(true); //used to create loading messages/animation
    const [error, setError] = useState(null); //used for errors in fetch

    useEffect(() => {
        const abortControl = new AbortController();

        Promise.all([
            fetch('https://json-server-for-heroku.herokuapp.com/classes'),
            fetch('https://json-server-for-heroku.herokuapp.com/races')
        ], { signal: abortControl.signal } )
                .then(([res1, res2]) => {
                if (!res1.ok || !res2.ok) {
                    throw Error('could not fetch the data needed for this page.')
                } else {
                    return [res1, res2]
                }}) 
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))//gets the response object and passes the json into a Javascript object.  Returns a promise as this takes some time.
                .then(([data1, data2]) => { //here we are using the data retrieved from the fetch
                    setPossibleClasses(data1);
                    setPossibleRaces(data2);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log('fetch aborted')
                    } else { //catches any network errors, like not being able to connect to server
                    setError(err.message);
                    setIsPending(false);
                }})

            return () => abortControl.abort();
    }, []);


    if (error || isPending) {
        return (
          <ErrorMsg error={error} isPending={isPending} />
        )
    }
    else {
        return (
            <CharacterForm 
            allClasses={possibleClasses}
            allRaces={possibleRaces}/>
      )};
}
 
export default CreateCharacterProfile;