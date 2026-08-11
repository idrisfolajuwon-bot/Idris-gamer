const controls = {
  up: false,
  down: false,
  left: false,
  right: false
};

function blocked(x, y) {
  const playerSize = 24;

  const objects = document.querySelectorAll(".tree, .obstacle");

  for (const object of objects) {
    const r = object.getBoundingClientRect();

    if (
      x + playerSize > r.left &&
      x - playerSize < r.right &&
      y + playerSize > r.top &&
      y - playerSize < r.bottom
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
  }, {passive:false});

  joystick.addEventListener("touchend", function(e) {
    active = false;
    knob.style.left = "35px";
    knob.style.top = "35px";
    controls.up = controls.down =
    controls.left = controls.right = false;
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
  }, {passive:false});

  setInterval(function() {
    let nx = player.x;
    let ny = player.y;

    if (controls.up) ny -= player.speed;
    if (controls.down) ny += player.speed;
    if (controls.left) nx -= player.speed;
    if (controls.right) nx += player.speed;

    if (!blocked(nx, player.y)) {
      player.x = nx;
    }

    if (!blocked(player.x, ny)) {
      player.y = ny;
    }

    updatePlayer();
  }, 16);
      }
