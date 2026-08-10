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
