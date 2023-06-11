var start = document.getElementById('start-button');
const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");
const scale = 20;

let score = 0;
let speed = 150 - score * 2;
let playerName = "";
let snake = [
  { x: 8 * scale, y: 8 * scale },
];

let food = {
  x: Math.floor(Math.random() * (canvas.width / scale)) * scale,
  y: Math.floor(Math.random() * (canvas.height / scale)) * scale
};

let direction;

let highScores = [];
let obstacles = [];

function resizeCanvas() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  canvas.width = width * 1;
  canvas.height = height * 1.1;

  food = createFood();
  obstacles.forEach(obstacle => {
    obstacle.x = Math.floor(Math.random() * (canvas.width / scale)) * scale;
    obstacle.y = Math.floor(Math.random() * (canvas.height / scale)) * scale;
  });
}

document.getElementById("start-button").addEventListener("click", function () {
  playerName = document.getElementById("player-name").value;
  startGame();
});

function startGame() {
  resizeCanvas();
  disableScroll();

  snake = [
    { x: 8 * scale, y: 8 * scale },
  ];
  food = createFood();

  direction = null;
  score = 0;
  obstacles = [];

  document.addEventListener("keydown", changeDirection);

  let game = setInterval(move, speed);

  function move() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (direction) {
      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      if (checkCollisionObstacle(head)) {
        gameOver(game);
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("scoreAtual").innerHTML = score;
        if (score % 10 === 0) {
          createObstacle();
        }
        food = createFood();
      } else {
        snake.pop();
      }

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width ||
        head.y >= canvas.height ||
        checkCollision(head)
      ) {
        gameOver(game);
        return;
      }
    }

    obstacles.forEach(obstacle => {
      context.fillStyle = "#ff8000";
      context.fillRect(obstacle.x, obstacle.y, scale, scale);
    });

    snake.forEach(segment => {
      context.fillStyle = "#ffffff";
      context.fillRect(segment.x, segment.y, scale, scale);
      context.strokeStyle = "#222222";
      context.strokeRect(segment.x, segment.y, scale, scale);
    });

    context.fillStyle = "green";
    context.fillRect(food.x, food.y, scale, scale);

    displayScore();
  }
}

function changeDirection(event) {
  const key = event.keyCode;
  const up = direction && direction.y === -scale;
  const down = direction && direction.y === scale;
  const left = direction && direction.x === -scale;
  const right = direction && direction.x === scale;

  if (key === 37 && !right) {
    direction = { x: -scale, y: 0 };
  } else if (key === 38 && !down) {
    direction = { x: 0, y: -scale };
  } else if (key === 39 && !left) {
    direction = { x: scale, y: 0 };
  } else if (key === 40 && !up) {
    direction = { x: 0, y: scale };
  }
}

function checkCollision(position) {
  return snake.slice(1).some(segment => {
    return segment.x === position.x && segment.y === position.y;
  });
}

function checkCollisionObstacle(position) {
  return obstacles.some(obstacle => {
    return obstacle.x === position.x && obstacle.y === position.y;
  });
}

function gameOver(game) {
  clearInterval(game);
  document.removeEventListener("keydown", changeDirection);
  context.fillStyle = "#ffffff";
  context.font = "24px Arial";
  context.fillText(`Fim de jogo! Pontuação: ${score}, Parabéns ${playerName}`, 50, canvas.height / 2);
  document.getElementById("game-over").innerText = `Fim de jogo! Jogador: ${playerName} | Pontuação: ${score}`;

  highScores.push({ playerName, score });
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 10);
  displayScore();
  enableScroll();
}

function displayScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = "<h3>Top 10 Scores:</h3>";

  if (highScores.length > 0) {
    const scoreList = document.createElement("ol");

    highScores.forEach(entry => {
      const scoreItem = document.createElement("li");
      scoreItem.innerText = `${highScores.indexOf(entry) + 1} Jogador: ${entry.playerName} | Pontuação: ${entry.score}`;
      scoreList.appendChild(scoreItem);
    });

    scoreElement.appendChild(scoreList);
  }
}

function createObstacle() {
  const pontos = Math.floor(score / 5);

  for (let i = 0; i < pontos; i++) {
    let obstaclePosition = {
      x: Math.floor(Math.random() * (canvas.width / scale)) * scale,
      y: Math.floor(Math.random() * (canvas.height / scale)) * scale
    };

    while (
      checkCollision(obstaclePosition) ||
      checkCollisionObstacle(obstaclePosition) ||
      obstaclePosition.x === food.x ||
      obstaclePosition.y === food.y
    ) {
      obstaclePosition = {
        x: Math.floor(Math.random() * (canvas.width / scale)) * scale,
        y: Math.floor(Math.random() * (canvas.height / scale)) * scale
      };
    }

    obstacles.push(obstaclePosition);
  }
}

function createFood() {
  let newFoodPosition = {
    x: Math.floor(Math.random() * (canvas.width / scale)) * scale,
    y: Math.floor(Math.random() * (canvas.height / scale)) * scale
  };

  while (checkCollision(newFoodPosition) || checkCollisionObstacle(newFoodPosition)) {
    newFoodPosition = {
      x: Math.floor(Math.random() * (canvas.width / scale)) * scale,
      y: Math.floor(Math.random() * (canvas.height / scale)) * scale
    };
  }

  return newFoodPosition;
}

function disableScroll() {
  document.body.style.overflow = "hidden";
  start.className = "btn btn-primary disabled";
}

function enableScroll() {
  document.body.style.overflow = "";
  start.className = "btn btn-primary";
}

window.addEventListener("resize", resizeCanvas);