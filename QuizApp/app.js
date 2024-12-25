const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 4,
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "JavaScript", "C#", "Java"],
    correct: "JavaScript",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Albert Camus",
      "J.K. Rowling",
      "William Shakespeare",
      "Leo Tolstoy",
    ],
    correct: "William Shakespeare",
  },
];

// const questionObj = {
//   question: "What is the capital of France ?",
//   options: ["Berlin", "Madrid", "Paris", "Rome"],
//   correct: "Paris",
// };

// questionContainer.innerHTML = `
// <p>1. ${questionObj.question} </p>
// <ul>
//     <li>
//     <input type="radio" name="question1" id="${questionObj.options[0]}" value="${questionObj.options[0]}" />
//     <label for="${questionObj.options[0]}">${questionObj.options[0]}</label>
//     </li>
//     <li>
//     <input type="radio" name="question1" id="${questionObj.options[1]}" value="${questionObj.options[1]}" />
//     <label for="${questionObj.options[1]}">${questionObj.options[1]}</label>
//     </li>
//     <li>
//     <input type="radio" name="question1" id="${questionObj.options[2]}" value="${questionObj.options[2]}" />
//     <label for="${questionObj.options[2]}">${questionObj.options[2]}</label>
//     </li>
//     <li>
//     <input type="radio" name="question1" id="${questionObj.options[3]}" value="${questionObj.options[3]}" />
//     <label for="${questionObj.options[3]}">${questionObj.options[3]}</label>
//     </li>
// </ul>
// `;

const quizForm = document.getElementById("quizForm");
const questionContainer = document.querySelector(".questionContainer");
const submitButton = document.querySelector(".submitButton");
const feedBack = document.querySelector(".feedBack");

function LoadQuestions(questions, userAnswers) {
  console.log(userAnswers);

  questionContainer.innerHTML = questions
    .map((question, index) => {
      let isCorrect =
        userAnswers[index].correct == userAnswers[index].ansUser ? true : false;

      return `
        <p>${index + 1} ${question.question} </p>
        <ul>
            <li>
            <input type="radio" name="question${[index]}" id="${
        question.options[0]
      }" value="${question.options[0]}" />
            <label for="${question.options[0]}">${question.options[0]}</label>
            </li>
            <li>
            <input type="radio" name="question${[index]}" id="${
        question.options[1]
      }" value="${question.options[1]}" />
            <label for="${question.options[1]}">${question.options[1]}</label>
            </li>
            <li>
            <input type="radio" name="question${[index]}" id="${
        question.options[2]
      }" value="${question.options[2]}" />
            <label for="${question.options[2]}">${question.options[2]}</label>
            </li>
            <li>
            <input type="radio" name="question${[index]}" id="${
        question.options[3]
      }" value="${question.options[3]}" />
            <label for="${question.options[3]}">${question.options[3]}</label>
            </li>
        </ul>
        `;
    })
    .join("");
}

LoadQuestions(questions);

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userAnswers = [];
  let score = 0;

  questions.forEach((question, index) => {
    const ansUser = document.querySelector(
      `input[name="question${index}"]:checked`
    ).value;

    console.log(ansUser);

    if (ansUser == question.correct) {
      score++;
    }

    let answerDesc = {
      correct: question.correct,
      userAnswer: ansUser,
    };
    userAnswers.push(answerDesc);
  });

  LoadQuestions(questions, userAnswers);

  feedBack.textContent = `Your score ${score} out of ${questions.length}`;
});
