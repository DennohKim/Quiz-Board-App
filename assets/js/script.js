//An array of objects with the quiz

const quiz = [
  {
    quizNumber: "#01/10",
    question:
      "Which of the following football clubs is not in the premier league?",
    a: "Norwich City",
    b: "Leicester City",
    c: "Aston Villa",
    d: "West Brom",
    correct: "d",
  },
  {
    quizNumber: "#02/10",
    question: "Which season did Manchester United last win the Premier League?",
    a: "2007/2008",
    b: "2012/2013",
    c: "2013/2014",
    d: "2011/2012",
    correct: "b",
  },
  {
    quizNumber: "#03/10",
    question:
      "Which season was the use of VAR introduced in Premier League games?",
    a: "2019/2020",
    b: "2017/2018",
    c: "2018/2019",
    d: "2020/2021",
    correct: "a",
  },
  {
    quizNumber: "#04/10",
    question: "Who among the following is not an Arsenal legend? ",
    a: "Thierry Henry",
    b: "Patrick Vierra",
    c: "Graeme Souness",
    d: "Robert Pires",
    correct: "c",
  },
  {
    quizNumber: "#05/10",
    question:
      "Who assisted the title winning goal for Manchester City during the 2011/12 season? ",
    a: "Edin Dzeko ",
    b: "Mario Balotelli",
    c: "David Silva",
    d: "Sergio Aguero",
    correct: "b",
  },
  {
    quizNumber: "#06/10",
    question:
      "How many players will be allowed on the bench in the upcoming 2022/23 season?",
    a: "5",
    b: "7",
    c: "9",
    d: "10",
    correct: "c",
  },
  {
    quizNumber: "#07/10",
    question: "Who is the current Brighton F.C manager?",
    a: "Roy Hodgson",
    b: "Dean Smith",
    c: "Mark Robins",
    d: "Graham Potter",
    correct: "d",
  },
  {
    quizNumber: "#08/10",
    question:
      "How many premier league goals has Harry Kane scored this season?",
    a: "16",
    b: "17",
    c: "14",
    d: "18",
    correct: "a",
  },
  {
    quizNumber: "#09/10",
    question: "Who is the current owner of Chelsea F.C?",
    a: "Mark Walter",
    b: "Roman Abramovic",
    c: "Todd Boehly",
    d: "Hansjorg Wyss",
    correct: "c",
  },
  {
    quizNumber: "#10/10",
    question: "Which club did Luiz Diaz play for before joining Liverpool F.C?",
    a: "S.L Benfica",
    b: "F.C Porto",
    c: "Sporting Lisbon",
    d: "Sporting C.P",
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
