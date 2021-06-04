function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,300,100,20);
  rect1=createSprite(50,50,50,50);
  rect2=createSprite(750,50,50,50)
  rect3=createSprite(200,200,100,100)
  rect4=createSprite(400,50,50,50)
  rect5=createSprite(400,350,50,50)

rect1.shapeColor="pink"
rect2.shapeColor="lightblue"
rect4.shapeColor="orange"
rect5.shapeColor="darkpink"
rect1.velocityX=2
rect2.velocityX=-2
rect4.velocityY=2
rect5.velocityY=-2
}

function draw() {
  background(0);
movingrect.x=World.mouseX
movingrect.y=World.mouseY
if(istouching(fixedrect,movingrect)){
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}
else{
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"

}
bounceOff(rect1,rect2)
bounceOff(rect4,rect5)
  drawSprites();
  
}
