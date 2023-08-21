const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the Arabic word for Resurrection?",
        choice1: "Iqamah",
        choice2: "Qiyamah",
        choice3: "Sharia",
        choice4: "Shahada",
        answer: 2
    },
    {
        question: "Who would Musa (AS), meet on his search for a pious servant? ",
        choice1: "Haman",
        choice2: "Jochebed",
        choice3: "Al-Khidr",
        choice4: "Isa (AS)",
        answer: 3
    },
    {
        question: "Islamic Calendar is based on which of the following cycle?",
        choice1: "Lunar",
        choice2: "Solar",
        choice3: "Lunisolar",
        choice4: "Fixed",
        answer: 1
    },
    {
        question: "What is the belief in the oneness of God termed?",
        choice1: "Zakat",
        choice2: "Salah",
        choice3: "Hajj",
        choice4: "Tawheed",
        answer: 4
    },
    {
        question: "Who was the first person to deliver the adhan to the people?",
        choice1: "Prophet Muhammad (SAW)",
        choice2: "Ali ibn Abi Talib",
        choice3: "Bilal ibn Ribah",
        choice4: "Abu Bakr",
        answer: 3
    },
];



