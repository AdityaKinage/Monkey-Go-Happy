
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  monkey = createSprite(40,160,20,50);
  monkey.addAnimation('running',monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(30,195,600,10);

  console.log(ground.x);
  
var FruitGroup=createGroup();
var obstacleGroup=createGroup();
  
}


function draw() {
background('white');
  drawSprites();
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  if(keyDown('space')&&monkey.y>=100){
    monkey.velocityY = -5;
    monkey.velocityY = monkey.velocityY + 0.8;
  }
  
  
  FoodGroup();
   
  
}
 function FoodGroup(){
  if(frameCount%50===0){
 var banana = createSprite(600,random(1,600),100,40);
    banana.velocityX = -6;
    banana.addImage('banana',bananaImage);
    banana.scale = 0.1;
    
    
    
  }
}




