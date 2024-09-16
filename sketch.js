function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

let xpos = 200
let ypos = 200

function draw() {
  textSize(22);
  fill('red');
  background(125);
  //circle(width/2, height/2, 40);
  text('ESCAPE', xpos, ypos);
}

if (mouseX = xpos) {
  let xpos = mouseX + 10
} if (mousey = ypos) {
  let ypos = mouseY
}

function mousePressed() {
  xpos = random(50,350)
  ypos = random(50,350)
}