// The area object defines the boundaries of the playing field
const area = {
  element: null,
  width: 900,
  height: 650
};

// Step 1: create the area
function initialize() {
  area.element = document.createElement("div");
  area.element.classList.add("area");
  area.element.style.width = area.width + "px";
  area.element.style.height = area.height + "px";
  document.body.appendChild(area.element);
}

// Move the ball to (x, y)
function moveTo(ball, x, y) {
  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

// Reverse direction if ball hits wall
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.offsetWidth) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.offsetHeight) {
    ball.dy = -ball.dy;
  }
}

// ✅ Step 1: Create ball
function create(color, dx, dy) {
  const ball = document.createElement("div");
  ball.style.backgroundColor = color;
  ball.style.width = "30px";
  ball.style.height = "30px";
  ball.style.borderRadius = "50%";
  ball.style.position = "absolute";

  // velocity
  ball.dx = dx;
  ball.dy = dy;

  area.element.appendChild(ball);
  return ball;
}

// ✅ Step 2: Update ball position continuously
function update(ball, x, y) {
  moveTo(ball, x, y);

  // bounce on wall hit
  changeDirectionIfNecessary(ball, x, y);

  // call again every 16ms
  setTimeout(function () {
    update(ball, x + ball.dx, y + ball.dy);
  }, 16);
}

// --------------------
// Run Simulation
// --------------------
initialize();

const ball1 = create("blue", 4, 3);
const ball2 = create("red", 1, 5);
const ball3 = create("green", 2, 2);

moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);
