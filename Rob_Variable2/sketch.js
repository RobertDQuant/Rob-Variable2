var circleX = 50; //this variable is for where the shape starts

function setup() {
  createCanvas(600, 480)  //this is the size of the canvas
}

function draw() {
  background(250, 0, 250); //this is the color of the background
  noStroke(); // this makes the shape to not have a outline 
  fill(0, 0, 255); //this is the color of the shape
  ellipse(circleX, 200, 55, 55);

  circleX = circleX + 1; // this makes the shape move
}
