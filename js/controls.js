const controls = {
  up: false,
  down: false,
  left: false,
  right: false
};

function setupControls() {
  window.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp" || e.key === "w") controls.up = true;
    if (e.key === "ArrowDown" || e.key === "s") controls.down = true;
    if (e.key === "ArrowLeft" || e.key === "a") controls.left = true;
    if (e.key === "ArrowRight" || e.key === "d") controls.right = true;
  });

  window.addEventListener("keyup", function(e) {
    if (e.key === "ArrowUp" || e.key === "w") controls.up = false;
    if (e.key === "ArrowDown" || e.key === "s") controls.down = false;
    if (e.key === "ArrowLeft" || e.key === "a") controls.left = false;
    if (e.key === "ArrowRight" || e.key === "d") controls.right = false;
  });

  setInterval(function() {
    if (controls.up) player.y -= player.speed;
    if (controls.down) player.y += player.speed;
    if (controls.left) player.x -= player.speed;
    if (controls.right) player.x += player.speed;

    updatePlayer();
  }, 16);
}
