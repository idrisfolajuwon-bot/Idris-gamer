const player = {
  x: 0,
  y: 0,
  health: 100,
  speed: 5
};

function updatePlayer() {
  const element = document.getElementById("player");

  element.style.left = player.x + "px";
  element.style.top = player.y + "px";
}
