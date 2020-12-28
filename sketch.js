
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score;
var survivaltime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   monkey = createSprite(100,315,50,50);
  monkey.addAnimation("monk",monkey_running);
  monkey.scale = 0.1;
  ground=createSprite(400,350,800,10);
  ground.velocityX = -4;
  FoodGroup = new Group();
  ObstacleGroup = new Group();
  
  
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x= ground.width/2;
  }
  if(keyDown("space")){
  monkey.velocityY= -12;
  }
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnfruits();
  spawnobstacles();
  if(monkey.isTouching(ObstacleGroup)){
   monkey.velocityY = 0;
    ground.velocityX = 0;
    FoodGroup.setVelocityXEach(0);
    ObstacleGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
     ObstacleGroup.setLifetimeEach(-1);
  }
drawSprites();
  survivaltime = Math.ceil(frameCount / frameRate());
  text("survival Time: "+survivaltime,100,50);
}
function spawnfruits(){
  if(frameCount %80 ===0){
    banana = createSprite(400,Math.round(random(100,200)),40,40);
    banana.velocityX= -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
 
} 
function spawnobstacles(){
  if(frameCount %300 ===0){
    obstacles = createSprite(400,330,40,40);
    obstacles.velocityX= -4;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.lifetime = 200;
    ObstacleGroup.add(obstacles);
  }
  
}





