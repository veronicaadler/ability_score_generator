export const createScore = (scores = []) => {
    return {
        type: 'createStore',
        payload: scores
    }
}