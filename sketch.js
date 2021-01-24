
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(50,350,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,380,600,20);
  
  foodGroup=new Group()
  obstacleGroup=new Group()
  
}


function draw() {
background("green");
  
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY=-6;
  }
   monkey.velocityY=monkey.velocityY+0.5 
  
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        foodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        foodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  Food();
  Obstacle();
  
  drawSprites();
  
}

function Food(){
  if(World.frameCount%60===0){
    food=createSprite(600,200,20,20);
    food.addAnimation("moving", bananaImage);
    food.y=Math.round(random(100,350));
    food.velocityX=-4;
    food.setLifetime=50;
    food.scale=0.1;
    foodGroup.add(food);
  }
}

function Obstacle(){
  if(World.frameCount%200===0){
    obstacle=createSprite(400,350,20,20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX=-4;
    obstacle.setLifetime=50;
    obstacle.scale=0.3
    obstacleGroup.add(obstacle);
  }
}







