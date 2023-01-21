let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById("answer-buttons");

let MixtureOfQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    MixtureOfQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(MixtureOfQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (MixtureOfQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        questionContainerElement.classList.add('hide');

        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
        question: 'Right to freedom',
        answers: [{
                text: 'Article 19',
                correct: true
            },
            {
                text: 'Article 21',
                correct: false
            },
            {
                text: 'Article 23',
                correct: false
            },
            {
                text: 'Article 14',
                correct: false
            }
        ]
    },
    {
        question: 'Right to equality',
        answers: [{
                text: 'Article 15',
                correct: false
            },
            {
                text: 'Article 16',
                correct: false
            },
            {
                text: 'Article 17',
                correct: false
            },
            {
                text: 'All the above',
                correct: true
            }
        ]
    },
    {
        question: 'Abolition of Untouchability',
        answers: [{
                text: 'Article 17',
                correct: true
            },
            {
                text: 'Article 18',
                correct: false
            },
            {
                text: 'Article 4',
                correct: false
            },
            {
                text: 'None ',
                correct: false
            }
        ]
    },
    {
        question: 'Protection of life and personal Liberty',
        answers: [{
                text: 'Article 20',
                correct: false
            },
            {
                text: 'Article 21',
                correct: true
            },
            {
                text: 'Article 16',
                correct: false
            },
            {
                text: 'Article 32',
                correct: false
            }
        ]
    },
    {
        question: 'Right to freedom of religion',
        answers: [{
                text: 'Article 25',
                correct: false
            },
            {
                text: 'Article 26',
                correct: false
            },
            {
                text: 'Article 28',
                correct: false
            },
            {
                text: 'All the above',
                correct: true
            }
        ]
    },
    {
        question: 'Abolition of titles',
        answers: [{
                text: 'Article 19',
                correct: false
            },
            {
                text: 'Article 18',
                correct: true
            },
            {
                text: 'Article 15',
                correct: false
            },
            {
                text: 'Article 17',
                correct: false
            }
        ]
    },
    {
        question: 'Right against Exploitation ',
        answers: [{
                text: 'Article 14-18',
                correct: false
            },
            {
                text: 'Article 19-22',
                correct: false
            },
            {
                text: 'Article 23-24',
                correct: true
            },
            {
                text: 'Article 25-28',
                correct: false
            }
        ]
    },
    {
        question: 'Right to constitutional Remidies',
        answers: [{
                text: 'Article 32',
                correct: true
            },
            {
                text: 'Article 29-30',
                correct: false
            },
            {
                text: 'Article 19-22',
                correct: false
            },
            {
                text: 'Article 25-28',
                correct: false
            }
        ]
    }
]