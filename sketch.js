function setup() {
  createCanvas(400, 400);
}

function draw() {
  background((mouseY / 400) * 255);
  triangle(40, 200, 360, 200, 200, 30);
  rect(50, 200, 300, 150);
}
