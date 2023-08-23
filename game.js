const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
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

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >=MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct'
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame()


