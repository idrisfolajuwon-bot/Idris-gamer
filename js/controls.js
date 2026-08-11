const controls = {
  up: false,
  down: false,
  left: false,
  right: false
};

function blocked(x, y) {
  const playerWidth = 48;
  const playerHeight = 60;

  const objects = document.querySelectorAll(".tree, .obstacle");

  for (const object of objects) {
    const ox = object.offsetLeft;
    const oy = object.offsetTop;
    const ow = object.offsetWidth;
    const oh = object.offsetHeight;

    if (
      x < ox + ow &&
      x + playerWidth > ox &&
      y < oy + oh &&
      y + playerHeight > oy
    ) {
      return true;
    }
  }

  return false;
}

function setupControls() {
  const joystick = document.getElementById("joystick");
  const knob = document.getElementById("joystick-knob");

  let active = false;

  joystick.addEventListener("touchstart", function(e) {
    active = true;
    e.preventDefault();
  }, { passive: false });

  joystick.addEventListener("touchend", function() {
    active = false;
    knob.style.left = "35px";
    knob.style.top = "35px";
    controls.up = false;
    controls.down = false;
    controls.left = false;
    controls.right = false;
  });

  joystick.addEventListener("touchmove", function(e) {
    if (!active) return;

    const touch = e.touches[0];
    const rect = joystick.getBoundingClientRect();

    let dx = touch.clientX - (rect.left + 60);
    let dy = touch.clientY - (rect.top + 60);

    const distance = Math.hypot(dx, dy);
    const max = 35;

    if (distance > max) {
      dx = dx / distance * max;
      dy = dy / distance * max;
    }

    knob.style.left = (35 + dx) + "px";
    knob.style.top = (35 + dy) + "px";

    controls.left = dx < -8;
    controls.right = dx > 8;
    controls.up = dy < -8;
    controls.down = dy > 8;

    e.preventDefault();
  }, { passive: false });

  setInterval(function() {
    let nextX = player.x;
    let nextY = player.y;

    if (controls.up) nextY -= player.speed;
    if (controls.down) nextY += player.speed;
    if (controls.left) nextX -= player.speed;
    if (controls.right) nextX += player.speed;

    if (!blocked(nextX, player.y)) {
      player.x = nextX;
    }

    if (!blocked(player.x, nextY)) {
      player.y = nextY;
    }

    updatePlayer();
  }, 16);
}
