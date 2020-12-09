
var movingSquare,fixedRect,stillCircle,unfixedRhombhus;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingSquare=createSprite(400,200,50,50);
  stillCircle=createSprite(600,350,50,50);
  unfixedRhombhus=createSprite(100,350,50,50);
  movingSquare.shapeColor="green";
  fixedRect.shapeColor="blue";
  stillCircle.shapeColor="cyan";
  unfixedRhombhus.shapeColor="magenta";
  unfixedRhombhus.velocityX=3;
  //unfixedRhombhus.velocityY=2;
  stillCircle.velocityX=-3;
 // stillCircle.velocityY=-2;
  fixedRect.velocityX=-2;
  fixedRect.velocityY=3;

}

function draw() {
  background(25,255,10);  

  movingSquare.x=mouseX;
  movingSquare.y=mouseY;
  
  is();
  bounceoff();
  drawSprites();
}

function is(){
if(movingSquare.x-fixedRect.x<=(movingSquare.width/2+fixedRect.width/2) &&
 fixedRect.x-movingSquare.x<=(movingSquare.width/2+fixedRect.width/2) &&
 fixedRect.y-movingSquare.y<=(movingSquare.height/2+fixedRect.height/2)   &&
 movingSquare.y-fixedRect.y<=(movingSquare.height/2+fixedRect.height/2))  
{ 
 movingSquare.shapeColor="pink"
 fixedRect.shapeColor="red"

}
else {
  movingSquare.shapeColor="green"
  fixedRect.shapeColor="blue"
  stillCircle.shapeColor="cyan";
  unfixedRhombhus.shapeColor="magenta";

} 
}
function bounceoff(){

if(stillCircle.x-unfixedRhombhus.x<=(stillCircle.width/2+unfixedRhombhus.width/2) &&
 unfixedRhombhus.x-stillCircle.x<=(stillCircle.width/2+unfixedRhombhus.width/2) 
 )  
{ 
 movingSquare.shapeColor="pink"
 fixedRect.shapeColor="red"
  unfixedRhombhus.velocityX=(-1*unfixedRhombhus.velocityX)
  stillCircle.velocityX=(-1*stillCircle.velocityX)
}
if (unfixedRhombhus.y-stillCircle.y<=(stillCircle.height/2+unfixedRhombhus.height/2)   &&
stillCircle.y-unfixedRhombhus.y<=(stillCircle.height/2+unfixedRhombhus.height/2)) {
   unfixedRhombhus.velocityY=(-1*unfixedRhombhus.velocityY)
   stillCircle.velocityY=(-1*stillCircle.velocityY)


}
}


 