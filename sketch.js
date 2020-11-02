
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);

  
 monkey=createSprite(80,315,20,20) ;
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,370,900,50);
 
  foodGroup=createGroup();
  obstaclesGroup=createGroup();
}


function draw() {
background("lightgreen");
  
if(keyDown("space")){
   monkey.y=-6;
 
   }
  monkey.y=monkey.y+6;
 monkey.collide(ground) ;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time="+survivalTime,100,50);
 
drawSprites();
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600,315,30,30);
   obstacle.velocityX = 6; 
    obstacle.addImage(obstacleImage);
  
    obstacle.scale=0.7;
    obstacle.lifetime=200;
    obstaclesGroup.add(obstacle);   
  }
}
function food(){
  if(frameCount % 80===0){
   var banana = createSprite(600,200,20,20) ;
  banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.7;
    banana.lifetime=200;
    foodGroup.add(banana);
  }
  
  
  

}