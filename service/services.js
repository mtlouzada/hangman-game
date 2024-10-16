import arrayTecnologias from "../data/data";

export function selectRandomQuestions() {
    const randomIndex = Math.floor(Math.random() * arrayTecnologias.length)
    
    return arrayTecnologias[randomIndex];
}

export function showQuestion() {

}

export function validateUserAnswer() {

}

export function showFinalResult() {

}