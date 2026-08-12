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

  const bulletMove = setInterval(function() {
    bullet.style.top = (bullet.offsetTop - 10) + "px";

    const enemies = document.querySelectorAll(".enemy");

    enemies.forEach(function(enemy) {
      const bulletBox = bullet.getBoundingClientRect();
      const enemyBox = enemy.getBoundingClientRect();

      if (
        bulletBox.left < enemyBox.right &&
        bulletBox.right > enemyBox.left &&
        bulletBox.top < enemyBox.bottom &&
        bulletBox.bottom > enemyBox.top
      ) {
        enemy.remove();
        bullet.remove();
        clearInterval(bulletMove);
      }
    });

    if (bullet.offsetTop < 0) {
      bullet.remove();
      clearInterval(bulletMove);
    }
  }, 30);
});
