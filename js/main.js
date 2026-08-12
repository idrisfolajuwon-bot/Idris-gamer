const game = document.getElementById("game");

function startGame() {
  player.x = game.clientWidth / 2;
  player.y = game.clientHeight / 2;

  updatePlayer();
  setupControls();

  createEnemy(200, 200);
  createEnemy(500, 300);

  console.log("Battle Arena started!");
}

startGame();
const fireButton = document.getElementById("fire-button");

fireButton.addEventListener("click", function() {
  const bullet = document.createElement("div");

  bullet.className = "bullet";
  bullet.style.left = player.x + 20 + "px";
  bullet.style.top = player.y + 20 + "px";

  game.appendChild(bullet);
const enemyElements = document.querySelectorAll(".enemy");

enemyElements.forEach(function(enemy) {
  const enemyBox = enemy.getBoundingClientRect();
  const bulletBox = bullet.getBoundingClientRect();

  if (
    bulletBox.left < enemyBox.right &&
    bulletBox.right > enemyBox.left &&
    bulletBox.top < enemyBox.bottom &&
    bulletBox.bottom > enemyBox.top
  ) {
    enemy.remove();
    bullet.remove();
  }
});
  setTimeout(function() {
    bullet.remove();
  }, 500);
});
