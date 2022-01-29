
function setup() {
  createCanvas(400,400);
}

var score = 0 ;

//Creating the Walls

var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(44,170,50,3);
var wall8 = createSprite(44,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,167,50,3);
var wall11 = createSprite(21,190,3,40);
var wall12 = createSprite(360,190,3,42);
//Now Creating green Square
var ding = createSprite(40,190,13,13);
ding.shapeColor = "Green" ;
//creating the dongs

var dong1 = createSprite(100,130,10,10);
dong1.shapeColor = "Red";

var dong2 = createSprite(215,130,10,10);
dong2.shapeColor = "Red";

var dong3 = createSprite(161.5,250,10,10);
dong3.shapeColor = "Red";

var dong4 = createSprite(269,250,10,10);
dong4.shapeColor = "Red";

//Giving Velocity to the dongs

dong1.velocityY = -6.5;
dong2.velocityY = -6.5;
dong3.velocityY = 6.5;
dong4.velocityY = 6.5;






function draw() {
  background("SkyBlue");
  textSize(20);
  text(" Deaths " + score,45,30);
  
  
  
  
  
  
  //Controlling the Ding
  if(keyDown("right")){
    ding.x = ding.x + 2 ;
  }
   if(keyDown("left")){
    ding.x = ding.x - 2 ;
  }
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2); 
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2); 
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2); 
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2); 
  
   if(
  ding.isTouching(dong1)||ding.isTouching(dong2)||
  ding.isTouching(dong3)||ding.isTouching(dong4)){
    playSound("sound://category_explosion/melodic_loss_1.mp3", false);
    
    
    score = score+1;
  }
  
  if(ding.isTouching(wall11)|| ding.isTouching(wall12)||
  ding.isTouching(dong1)||ding.isTouching(dong2)||
  ding.isTouching(dong3)||ding.isTouching(dong4)){
    ding.x = 40 ;
    ding.y = 190;
  }
 drawSprites(); 
}





