const questions = [
      {
            imageSrc: "tubarao.jpg",
            correctAnswer: "Tubarao",
            answers: ["Macaco", "Cachorro", "Tubarao", "Gato"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "leao.jpg",
            correctAnswer: "Leao",
            answers: ["Leao", "Tucano", "Girafa", "Elefante"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "cachorro.jpg",
            correctAnswer: "Cachorro",
            answers: ["Tartaruga", "Cachorro", "Rinoceronte", "Cavalo"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "cavalo.jpg",
            correctAnswer: "Cavalo",
            answers: ["Macaco", "Cachorro", "Cavalo", "Cobra"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "cobra.jpg",
            correctAnswer: "Cobra",
            answers: ["Aranha", "Cobra", "Capivara", "Tigre"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "golfinho.jpg",
            correctAnswer: "Golfinho",
            answers: ["Golfinho", "Tamanduá", "Gato", "Ornitorrinco"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "girafa.jpg",
            correctAnswer: "Girafa",
            answers: ["Galinha", "Vaca", "Touro", "Girafa"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "macaco.jpg",
            correctAnswer: "Macaco",
            answers: ["Porco", "Capivara", "Macaco", "Javali"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "coelho.jpg",
            correctAnswer: "Coelho",
            answers: ["Macaco", "Coelho", "C", "D"] // Adicione as respostas possíveis
      },
      {
            imageSrc: "capivara.jpg",
            correctAnswer: "Capivara",
            answers: ["Capivara", "Papagaio", "Panda", "Urso Pardo"] // Adicione as respostas possíveis
      },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const animalImage = document.getElementById("animal-image");
const scoreDisplay = document.getElementById("pontuacao");
const questionNumberDisplay = document.getElementById("numero-questao");
const answersContainer = document.getElementById("answers-container");

function displayQuestion(question) {
      animalImage.style.backgroundImage = `url(${question.imageSrc})`;

      const shuffledAnswers = shuffleArray(question.answers);

      answersContainer.innerHTML = "";
      shuffledAnswers.forEach((answer) => {
            const option = document.createElement("div");
            option.className = "resposta";
            option.textContent = answer;
            option.dataset.answer = answer;
            answersContainer.appendChild(option);
      });

      startTimer();
}

function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}

function startTimer() {
      let timeLeft = 20;
      timer = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                  clearInterval(timer);
                  nextQuestion();
            }
      }, 1000);
}

function nextQuestion() {
      clearInterval(timer);
      if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(questions[currentQuestionIndex]);
            updateQuestionNumberDisplay();
      } else {
            endGame();
      }
}

function endGame() {
      alert(`Jogo encerrado! Pontuação final: ${score}`);
}

function updateQuestionNumberDisplay() {
      questionNumberDisplay.textContent = `Questão: ${currentQuestionIndex + 1}/10`;
}

answersContainer.addEventListener("click", (event) => {
      const selectedAnswer = event.target.dataset.answer;
      if (selectedAnswer) {
            if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                  score++;
            }
            updateScoreDisplay();
            nextQuestion();
      }
});

function updateScoreDisplay() {
      scoreDisplay.textContent = `Pontuação: ${score}/10`;
}

displayQuestion(questions[currentQuestionIndex]);
updateScoreDisplay();
updateQuestionNumberDisplay();