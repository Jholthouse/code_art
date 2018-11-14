var circleX;
var circleY;
var circleS;

function setup() {
  createCanvas(1800, 1800);
  circleX=-50;
  circleY=-10;
  circleS=-25;
}

function draw() {
  background(250,250,100);

  circleX=circleX+3;
  fill(250,200,200);
  ellipse(100,circleX,100,100);

  circleY=circleY+5;
  fill(250,200,200);
  ellipse(200,circleY,100,100);

  circleS=circleS+10;
  fill(250,200,200);
  ellipse(300,circleS,100,100);
}
