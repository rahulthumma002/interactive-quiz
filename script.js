const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java System Object Naming", "Java Standard Output Network", "Java Syntax Order Notation"],
        correct: "JavaScript Object Notation"
    },
    { question: "Which keyword is used to declare a constant variable in JavaScript?", options: ["var", "let", "const", "static"], correct: "const" }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

// Dynamically create quiz questions
function loadQuiz() {
    let quizHTML = "";
    quizData.forEach((q, index) => {
        quizHTML += `<div class="question">
                        <h3>${index + 1}. ${q.question}</h3>
                        <div class="options">`;
        q.options.forEach(option => {
            quizHTML += `<label>
                            <input type="radio" name="question${index}" value="${option}"> ${option}
                         </label>`;
        });
        quizHTML += `</div></div>`;
    });
    quizContainer.innerHTML = quizHTML;
}

// Calculate and display the score
function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correct) {
            score++;
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

// Event Listeners
submitButton.addEventListener("click", calculateScore);

// Load quiz on page load
loadQuiz();
