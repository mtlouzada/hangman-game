import arrayTecnologias from "../data/data";

export function selectRandomQuestions() {
    const shuffledArray = [...arrayTecnologias].sort(() => 0.5 - Math.random());
    
    return shuffledArray.splice(0, 10);
    console.log(shuffledArray);
}

export function showQuestion() {
    
}

export function validateUserAnswer() {

}

export function showFinalResult() {

}