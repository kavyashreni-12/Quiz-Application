const welcomePage = document.getElementById('welcome-page');
const namePage = document.getElementById('name-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const proceedBtn = document.getElementById('proceed-btn');
const userNameInput = document.getElementById('user-name');
const resultMessage = document.getElementById('result-message');
const cupImg = document.getElementById('cup-img');

let userName = "";

// Start Quiz Button
startBtn.addEventListener('click', () => {
    welcomePage.classList.add('hidden');
    namePage.classList.remove('hidden');
});

// Handle Enter Key or Proceed Button on Name Page
const proceedToQuiz = () => {
    userName = userNameInput.value.trim();
    if (userName) {
        namePage.classList.add('hidden');
        quizPage.classList.remove('hidden');
        loadQuestion();
    } else {
        alert('Please enter your name to proceed!');
    }
};

proceedBtn.addEventListener('click', proceedToQuiz);

userNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        proceedToQuiz();
    }
});

const quizArr = [
    {
        question:"What does HTML stand for?",
        opt1:"Hyperlinks Text Mark Language",
        opt2:"Hyper Text Markup Language",
        opt3:"Hyper Tag Markup Language",
        opt4:"Hyper Tool Multi Language",
        ans:"ans2"
    },
    {
        question:"What does CSS stand for?",
        opt1:"Computer Style Sheets",
        opt2:"Colorful Style Sheets",
        opt3:"Cascading Style Sheets",
        opt4:"Creative Style Sheets",
        ans:"ans3"
    },
    {
        question:"What does XML stand for?",
        opt1:"eXecutale Markup Language",
        opt2:"eXtensible Markup Language",
        opt3:"eXamine Multiple Language",
        opt4:"eXtra Multi-Program Language",
        ans:"ans2"
    },
    {
        question:"What does PHP stand for?",
        opt1:"Hypertext Programming",
        opt2:"Hometext Preprocessor",
        opt3:"Hypertext Preprogramming",
        opt4:"Hypertext Preprocessor",
        ans:"ans4"
    },
    {
        question:"What does SQL stand for?",
        opt1:"Stylesheet Query Language",
        opt2:"Structured Query Language",
        opt3:"Stylish Query Language",
        opt4:"Statement Query Language",
        ans:"ans2"
    }
];

let queIndex = 0; 
let score = 0;

const loadQuestion = () => {
    const queList = quizArr[queIndex];
    document.querySelector('.question').innerHTML = `${queIndex + 1}. ${queList.question}`;
    document.querySelector('#opt1').innerHTML = queList.opt1;
    document.querySelector('#opt2').innerHTML = queList.opt2;
    document.querySelector('#opt3').innerHTML = queList.opt3;
    document.querySelector('#opt4').innerHTML = queList.opt4;
};

const getCheckedAnswer = () => {
    let selectedOption;
    document.querySelectorAll('.answer').forEach((option) => {
        if (option.checked) selectedOption = option.id;
    });
    return selectedOption;
};

const deselectAll = () => {
    document.querySelectorAll('.answer').forEach(option => option.checked = false);
};

document.querySelector('#submit').addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    deselectAll();
    if (checkedAnswer === quizArr[queIndex].ans) score++;
    queIndex++;
    if (queIndex < quizArr.length) {
        loadQuestion();
    } else {
        quizPage.classList.add('hidden');
        resultPage.classList.remove('hidden');
        if (score >=4) {
            cupImg.classList.remove('hidden');
            resultMessage.innerHTML = `🎉 Well done, ${userName}! Your Score: ${score}/${quizArr.length}`;
        } else {
            resultMessage.innerHTML = `Needs Improvement, ${userName}. Your Score: ${score}/${quizArr.length}`;
        }
    }
});
