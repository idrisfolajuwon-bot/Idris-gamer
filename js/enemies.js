const enemies = [];

function createEnemy(x, y) {
  enemies.push({
    x: x,
    y: y,
    health: 100
  });
}

function updateEnemies() {
  console.log("Enemies:", enemies.length);
}
