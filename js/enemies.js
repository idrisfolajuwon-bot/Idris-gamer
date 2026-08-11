const enemies = [];

function createEnemy(x, y) {
  const enemy = document.createElement("div");

  enemy.className = "enemy";
  enemy.style.left = x + "px";
  enemy.style.top = y + "px";

  document.getElementById("game").appendChild(enemy);

  enemies.push({
    element: enemy,
    x: x,
    y: y,
    health: 100
  });
}

function updateEnemies() {
  // Enemy movement will be added next.
}
