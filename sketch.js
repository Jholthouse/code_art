var xpos=0;
var xspeed=40;
var ypos=0;
var yspeed=15;
var zpos=0;
var zspeed=35;
var spos=0;
var sspeed=20;
var img1;
var img2;
var img3;
var img4;
var font,fontsize = 50

function preload(){
  soundFormats('mp3');
  mySound = loadSound('piano.mp3');
  img1=loadImage("men.jpg");
  img2=loadImage("depression.jpg");
  img3=loadImage("pill.png");
  img4=loadImage("questionmark.png");
  font=loadFont('beautiful.ttf');
}

function setup() {
  createCanvas(1200,850);
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop()
  noCursor();
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

}

function draw() {
  imageMode(CORNER)
  image(img1,0,0);
  imageMode(CORNER);
  if(mouseIsPressed){
  image(img2,0,0);
  }
  else{
  image(img1,0,0);
  }

  imageMode(CENTER);
  if(mouseIsPressed){
  image(img3,mouseX,mouseY);
  fill(150);
  text("Depression has many faces", 600, 600);
  }
  else{
  image(img4,mouseX,mouseY);
  }

  noStroke();
  fill(100,8,250,50);
  ellipse(0,xpos,75,75);
  ellipse(100,xpos,75,75);
  ellipse(200,xpos,75,75);
  ellipse(300,xpos,75,75);
  ellipse(400,xpos,75,75);
  ellipse(400,xpos,75,75);
  ellipse(500,xpos,75,75);
  ellipse(600,xpos,75,75);
  ellipse(700,xpos,75,75);
  ellipse(800,xpos,75,75);
  ellipse(900,xpos,75,75);
  ellipse(1000,xpos,75,75);
  ellipse(1100,xpos,75,75);
  ellipse(1200,xpos,75,75);
  fill(3,8,250,50);
  ellipse(0,xpos,60,60);
  ellipse(100,xpos,60,60);
  ellipse(200,xpos,60,60);
  ellipse(300,xpos,60,60);
  ellipse(400,xpos,60,60);
  ellipse(400,xpos,60,60);
  ellipse(500,xpos,60,60);
  ellipse(600,xpos,60,60);
  ellipse(700,xpos,60,60);
  ellipse(800,xpos,60,60);
  ellipse(900,xpos,60,60);
  ellipse(1000,xpos,60,60);
  ellipse(1100,xpos,60,60);
  ellipse(1200,xpos,60,60);
  if(xpos > 1300){
  xspeed=-5;
  }
  if(xpos<-50){
  xspeed=10;
  }
  xpos+=xspeed;

  noStroke();
  fill(3,8,150,50);
  ellipse(0,ypos,100,100);
  ellipse(100,ypos,100,100);
  ellipse(200,ypos,100,100);
  ellipse(300,ypos,100,100);
  ellipse(400,ypos,100,100);
  ellipse(400,ypos,100,100);
  ellipse(500,ypos,100,100);
  ellipse(600,ypos,100,100);
  ellipse(700,ypos,100,100);
  ellipse(800,ypos,100,100);
  ellipse(900,ypos,100,100);
  ellipse(1000,ypos,100,100);
  ellipse(1100,ypos,100,100);
  ellipse(1200,ypos,100,100);
  fill(3,108,150,50);
  ellipse(0,ypos,80,80);
  ellipse(100,ypos,80,80);
  ellipse(200,ypos,80,80);
  ellipse(300,ypos,80,80);
  ellipse(400,ypos,80,80);
  ellipse(400,ypos,80,80);
  ellipse(500,ypos,80,80);
  ellipse(600,ypos,80,80);
  ellipse(700,ypos,80,80);
  ellipse(800,ypos,80,80);
  ellipse(900,ypos,80,80);
  ellipse(1000,ypos,80,80);
  ellipse(1100,ypos,80,80);
  ellipse(1200,ypos,80,80);
  if(ypos > 1300){
  yspeed=-25;
  }
  if(ypos<-50){
  yspeed=5;
  }
  ypos+=yspeed;

  noStroke();
  fill(3,8,15,50);
  ellipse(0,zpos,70,70);
  ellipse(100,zpos,70,70);
  ellipse(200,zpos,70,70);
  ellipse(300,zpos,70,70);
  ellipse(400,zpos,70,70);
  ellipse(500,zpos,70,70);
  ellipse(600,zpos,70,70);
  ellipse(600,zpos,70,70);
  ellipse(700,zpos,70,70);
  ellipse(800,zpos,70,70);
  ellipse(900,zpos,70,70);
  ellipse(1000,zpos,70,70);
  ellipse(1100,zpos,70,70);
  ellipse(1200,zpos,70,70);
  fill(3,80,15,50);
  ellipse(0,zpos,30,30);
  ellipse(100,zpos,30,30);
  ellipse(200,zpos,30,30);
  ellipse(300,zpos,30,30);
  ellipse(400,zpos,30,30);
  ellipse(500,zpos,30,30);
  ellipse(600,zpos,30,30);
  ellipse(700,zpos,30,30);
  ellipse(800,zpos,30,30);
  ellipse(900,zpos,30,30);
  ellipse(1000,zpos,30,30);
  ellipse(1100,zpos,30,30);
  ellipse(1200,zpos,30,30);
  if(zpos > 1300){
  zspeed=-10;
  }
  if(zpos<-50){
  zspeed=5;
  }
  zpos+=zspeed;

  noStroke();
  fill(200,80,150,50);
  ellipse(0,spos,35,35);
  ellipse(100,spos,35,35);
  ellipse(200,spos,35,35);
  ellipse(300,spos,35,35);
  ellipse(400,spos,35,35);
  ellipse(500,spos,35,35);
  ellipse(600,spos,35,35);
  ellipse(700,spos,35,35);
  ellipse(800,spos,35,35);
  ellipse(900,spos,35,35);
  ellipse(1000,spos,35,35);
  ellipse(1100,spos,35,35);
  ellipse(1200,spos,35,35);
  fill(150,180,15,50);
  ellipse(0,spos,10,10);
  ellipse(100,spos,10,10);
  ellipse(200,spos,10,10);
  ellipse(300,spos,10,10);
  ellipse(400,spos,10,10);
  ellipse(500,spos,10,10);
  ellipse(600,spos,10,10);
  ellipse(700,spos,10,10);
  ellipse(800,spos,10,10);
  ellipse(900,spos,10,10);
  ellipse(1000,spos,10,10);
  ellipse(1100,spos,10,10);
  ellipse(1200,spos,10,10);
  if(spos > 1300){
  sspeed=-20;
  }
  if(spos<-50){
  sspeed=15;
  }
  spos+=sspeed;

  if (mouseX > 400 && mouseX < 800 && mouseY > 400) {
  fill(150)
  text("Maybe you missed that", 600, 110);
  }

  if (mouseX > 400 && mouseX < 800 && mouseY > 500) {
  fill(150)
  text("Click to see it again", 600, 200);
  }

  textAlign(CENTER);
  drawWords( width * .5);
}

function drawWords(x){
  fill(150);
  text("Did you see that", x, 50);

}
