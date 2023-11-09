let quizData = [
  {
    question: "Which nation does not share a border with Burkina Faso?",
    a: "Sudan",
    b: "Togo",
    c: "Benin",
    d: "Ghana",
    correctAnswer: "a",
  },
  {
    question: "What is the capital of Burkina Faso?",
    a: "Niame",
    b: "Bamako",
    c: "Ouagadougou",
    d: "Dakar",
    correctAnswer: "c",
  },
  {
    question: "When Burkina Faso get its independence ?",
    a: "1973",
    b: "1800",
    c: "1958",
    d: "1960",
    correctAnswer: "d",
  },
  {
    question: "What was the name of Burkina Faso ?",
    a: "Republic of west Africa",
    b: "Republic of Upper Volta",
    c: "Mali",
    d: "Ghana",
    correctAnswer: "b",
  },
  {
    question: "Who is the current president of Burkina Faso ?",
    a: "Capitain Ibrahime Traoré",
    b: "Blaise Compaoré",
    c: "Rock Marc Christian Kaboré",
    d: "Moussa Koné",
    correctAnswer: "a",
  },
];

let questionEle = document.getElementById("question");
let aResponseEl = document.getElementById("aresponse");
let bResponseEl = document.getElementById("bresponse");
let cResponseEl = document.getElementById("cresponse");
let dResponseEl = document.getElementById("dresponse");
let container = document.querySelector(".container");
let responseEl = document.querySelectorAll(".response");
let submitBtn = document.getElementById("submit");

let quizNum = 0;
let result = 0;


////////////////////////////Functions////////////////////////
function load(currentQuiz) {
  questionEle.innerText = quizData[currentQuiz].question;
  aResponseEl.innerText = quizData[currentQuiz].a;
  bResponseEl.innerText = quizData[currentQuiz].b;
  cResponseEl.innerText = quizData[currentQuiz].c;
  dResponseEl.innerText = quizData[currentQuiz].d;
}

function getResponse(responseEls) {
  let answer;
  responseEls.forEach((response) => {
    if (response.checked) {
      answer = response.id;
      console.log(response.checked);
    }
  });
  return answer;
}

function clear(responseEls) {
  responseEls.forEach((response) => {
    response.checked = false;
  });
}

//////////////// end of functions //////////////////////////////////



submitBtn.addEventListener("click", () => {
  let answer = getResponse(responseEl);
  if (answer === undefined) alert("Please choose a response");
  else if (quizNum < quizData.length - 1) {
    if (quizData[quizNum].correctAnswer === answer) {
      result++;
    }
    console.log(quizData.length, result);
    quizNum++;
    load(quizNum);
    clear(responseEl);
  } else {
    if (quizData[quizNum].correctAnswer === answer) {
      result++;
    }
    container.innerHTML = ``;
    container.innerHTML = `<h2 id="question">you scored ${result}/5</h2>
        <button onclick = "location.reload()">Reload</button>`;
  }
});

load(quizNum);
