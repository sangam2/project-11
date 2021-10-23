var path,pathImg,boy,boyImg,leftBoundary,rightBoundary;
var score=0;
function preload(){
  //loading the animations
  pathImg=loadAnimation("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //createing sprites to path ,boy 
  path=createSprite(200,200);
  path.addAnimation("ground",pathImg);
  path.velocityY=5;

  boy=createSprite(150,350,100,20);
  boy.addAnimation("running",boyImg);
  boy.scale=0.6;

  //createing invisible boundaries
  leftBoundary = createSprite(370, 200, 100, 400);
  leftBoundary.visible = false;
  
  rightBoundary = createSprite(40, 200, 100, 400);
  rightBoundary.visible = false;
  
}

function draw() {
  background(0);

  

 //making the infinte ground
 if(path.y > 400){
  path.y = height/30
 }

 //making boy to collide with the boundaries
boy.collide(leftBoundary);
boy.collide(rightBoundary)

//making sprites to draw

  drawSprites();
}
