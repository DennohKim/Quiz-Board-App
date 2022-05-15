//An array of objects with the quiz

const quiz = [
  {
    quizNumber: "#01/10",
    question:
      "Which year was Javascript language introduced?",
    a: "1996",
    b: "1997",
    c: "1999",
    d: "1995",
    correct: "d",
  },
  {
    quizNumber: "#02/10",
    question: "What is the correct syntax for referring to an external script called `index.js`?",
    a: "<script href=”index.js”>",
    b: "<script src=”index.js”>",
    c: "<script name=”index.js”>",
    d: "<script value=”index.js”>",
    correct: "b",
  },
  {
    quizNumber: "#03/10",
    question:
      "How do you write 'Hello World' in an alert box?",
    a: "alert(“Hello World”)",
    b: "msgBox(“Hello World”)",
    c: "msg(“Hello World”)",
    d: "alertBox(“Hello World”)",
    correct: "a",
  },
  {
    quizNumber: "#04/10",
    question: "How do you create a function in JavaScript? ",
    a: "function:myFunction()",
    b: "function = myfunction()",
    c: "function = myFunction()",
    d: "function myFunction()",
    correct: "c",
  },
  {
    quizNumber: "#05/10",
    question:
      "How to write an IF statement in JavaScript? ",
    a: "if i = 5 then",
    b: "if(i ==5)",
    c: "if i == 5 then",
    d: "if i = 5 ",
    correct: "b",
  },
  {
    quizNumber: "#06/10",
    question:
      "How does a FOR loop start?",
    a: "for (i=0; i<=5)",
    b: "for (i <=5; i++)",
    c: "for (i=0; i<=5; i++)",
    d: "for i = 1 to 5",
    correct: "c",
  },
  {
    quizNumber: "#07/10",
    question: "How can you add a comment in a JavaScript?",
    a: "“Comment”",
    b: "/*Comment*/",
    c: "<!--Comment-->",
    d: "//Comment",
    correct: "d",
  },
  {
    quizNumber: "#08/10",
    question:
      "How do you round the number 7.25, to the nearest integer?",
    a: "Math.round(7.25",
    b: "rnd(7.25)",
    c: "Math.rnd(7.25)",
    d: "round(7.25)",
    correct: "a",
  },
  {
    quizNumber: "#09/10",
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onmouseclick",
    b: "onmouseover",
    c: "onclick",
    d: "onchange",
    correct: "c",
  },
  {
    quizNumber: "#10/10",
    question: "How do you declare a JavaScript variable?",
    a: "variable carName",
    b: "var carName",
    c: "v carName;",
    d: "var carname",
    correct: "b",
  },
];

//Select the quiz div
const questionDiv = document.getElementById("question-container");

//Select the question number
const questionNumberElement = document.getElementById("question-number");

//Select the question
const questionElement = document.getElementById("question");

//Select an answer element
const answerElements = document.querySelectorAll(".answer");

//Select the each answer
const answerA = document.getElementById("answer-a-label");
const answerB = document.getElementById("answer-b-label");
const answerC = document.getElementById("answer-c-label");
const answerD = document.getElementById("answer-d-label");

//Select buttons
const submitBtn = document.getElementById("submit-button");

let currentQuestion = 0;
let score = 0;
const currentQuestionDetails = quiz[currentQuestion];

loadQuestion();

//Function that loads the quiz

function loadQuestion() {
  deselectAnswers();
  const currentQuestionDetails = quiz[currentQuestion];

  //returns text content in the current question
  questionNumberElement.innerText = currentQuestionDetails.quizNumber;
  questionElement.innerText = currentQuestionDetails.question;
  answerA.innerText = currentQuestionDetails.a;
  answerB.innerText = currentQuestionDetails.b;
  answerC.innerText = currentQuestionDetails.c;
  answerD.innerText = currentQuestionDetails.d;
}

//Function deselects all buttons from the start of a quiz
function deselectAnswers() {
  //Loops through all answers and deselects
  answerElements.forEach((answerElement) => (answerElement.checked = false));
}

//Function checks which button is selected
function getSelected() {
  let answer;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

//Show next Question
submitBtn.addEventListener("click", function () {
    //if answer is selected increment the score
    const correctAnswer = getSelected();
    console.log(correctAnswer);
    // console.log('Score now', score)
    if (correctAnswer) {
      if (correctAnswer === quiz[currentQuestion].correct) {
        score += 10;
      
  
        console.log("Score now", score);
      }
      //Next question and increment score based on conditions
    currentQuestion++; 

    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else if(currentQuestion < quiz.length || score >= 90) {
      questionDiv.innerHTML = `<h2>You've scored <span style="color:#ecfd37">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">Collect your PS5 award at our nearest stores!</p>
          <button class="reload-btn"  onClick ="location.reload()">Reload</button>`;
    } else if(currentQuestion < quiz.length && score < 80 || score >= 60) {
      questionDiv.innerHTML = `<h2>You've scored <span style="color: #ecfd37">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">Keep watching the Premier League!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;
    } else if(currentQuestion < quiz.length && score < 50 || score >= 20) {
      questionDiv.innerHTML = `<h2>You've scored <span style="color:#ecfd37">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">You can do better!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;

    }else {
      questionDiv.innerHTML = `<h2>You've scored <span style="color:#ecfd37">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">Kindly keep watching Afro Cinema!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;

    }
  }
});