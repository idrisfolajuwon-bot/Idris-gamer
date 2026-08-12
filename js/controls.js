window.controls = {
  up: false,
  down: false,
  left: false,
  right: false
};

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
    if (controls.up) player.y -= player.speed;
    if (controls.down) player.y += player.speed;
    if (controls.left) player.x -= player.speed;
    if (controls.right) player.x += player.speed;

    updatePlayer();
  }, 16);
}
