var ship, ship_img;
var enemyGroup,enemy,enemy_img;
var edges;
var gameState = 1;
var time = 0;
var level = 1;
var rand;
var leftA,rightA,upA,downA;
var rightR,leftR,upR,downR;
var orb;
var yrand;
var explosion;
var backgroundImg;
var gameOver;
var gameOverImg;
var reset,resetImg;
var youWin;youWinImg;



function preload() {
orb = loadImage("Orb.png");
ship_img = loadImage("ship.png");
gameOverImg = loadImage("gameover.png");
resetImg = loadImage("reset.png");

youWinImg = loadImage("you win.png");

leftA = loadImage("LeftAsteroid.png");
rightA = loadImage("RightAsteroid.png");
upA = loadImage("UpAsteroid.png");
downA = loadImage("DownAsteroid.png");

explosion = loadImage("explosion.gif");

rightR = loadImage("RocketRight.png");
leftR = loadImage("RocketLeft.png");
upR = loadImage("RocketUp.png");
downR = loadImage("RocketDown.png");

backgroundImg = loadImage("background.PNG");




}
function setup() {
  createCanvas(900,600);
  ship = createSprite(200,300,65,65);
  ship.addImage(ship_img);
  ship.scale=(0.1);

  gameOver = createSprite(450,300,65,65);
  gameOver.addImage(gameOverImg);
  gameOver.scale=(0.8);
  gameOver.visible = false;

  reset = createSprite(450,500,65,65);
  reset.addImage(resetImg);
  reset.scale=(0.5);
  reset.visible = false;

  youWin = createSprite(450,300,65,65);
  youWin.addImage(youWinImg);
  youWin.scale=(0.5);
  youWin.visible = false;


  enemyGroup = createGroup();
  edges = createEdgeSprites();
  
  
  

  
  textSize(30);
  
 
}

function draw() {
  if (gameState === 1 ) {
 
  time = time + 4;
  }
  fill("white");
  
  background(backgroundImg);
  text("Score: "+ time,500,100);

  if (time > 15000) {
    gameState = 2;
    gameOver.destroy();
    reset.destroy();
    youWin.visible = true;
  }
  
  
  if (gameState === 1) {
   
   

    if (time < 1500) {
      
      level1();
    }
     if(time > 1500 && time < 3000) {
      level2();

    }
    else if(time > 3000 && time < 4500) {
      level3();
      
    }
    else if(time > 4500 ) {
      level4();
    }
  }
  

  else if (gameState === 2){
    
    //image(explosion,ship.x,ship.y-20,100,100);
    
    ship.visible = false;
    gameOver.visible = true;
    reset.visible = true;
    
  if (mousePressedOver(reset)) {
    restart();
  };
  
  }
  ship.collide(edges);
 console.log(time);

  
 

  
  if (ship.collide(enemyGroup)) {
    
    ship.addImage(explosion);
    gameState = 2;
  }
  
   
  drawSprites();
}



function spawnEnemy() {


  if (frameCount % 60 === 0) {
  enemy = createSprite(1000,random(100,500),50,50);
  enemy.setVelocity(-20,0)
  enemy.addImage(leftA);
  enemy.scale=(0.2);
  enemyGroup.add(enemy);

}
}





function spawnEnemy2() {
  

  if (frameCount % 30 === 0) {
     rand = Math.round(random(1,4));
    
    if (rand === 1) {
      enemy = createSprite(0,random(100,500),50,50);
      enemy.setVelocity(+20,0);
      enemy.addImage(rightA);
      enemy.scale=(0.2);
      ;
    }
    else if(rand === 2){
      enemy = createSprite(1000,random(100,500),50,50);
      enemy.setVelocity(-20,0);
      enemy.addImage(leftA);
      enemy.scale=(0.2);
      
    }
    else if(rand === 3){
      enemy = createSprite(random(100,800),0,50,50);
      enemy.setVelocity(0,+20);
      enemy.addImage(downA);
      enemy.scale=(0.2);
      
    }
    else if(rand === 4){
      enemy = createSprite(random(100,800),600,50,50);
      enemy.setVelocity(0,-20);
      enemy.addImage(upA);
      enemy.scale=(0.2);
      
    }
  console.log(rand); 
  enemyGroup.add(enemy);
  
  

}
}






function spawnEnemy3() {
  

  if (frameCount % 30 === 0) {
     rand = Math.round(random(1,4));
    
    if (rand === 1) {
      enemy = createSprite(0,ship.y,50,50);
      enemy.setVelocity(+17,0);
      enemy.addImage(rightR);
      enemy.scale=(0.2);
      ;
    }
    else if(rand === 2){
      enemy = createSprite(1000,ship.y,50,50);
      enemy.setVelocity(-17,0);
      enemy.addImage(leftR);
      enemy.scale=(0.2);
      
    }
    else if(rand === 3){
      enemy = createSprite(ship.x,0,50,50);
      enemy.setVelocity(0,+17);
      enemy.addImage(downR);
      enemy.scale=(0.2);
      
    }
    else if(rand === 4){
      enemy = createSprite(ship.x,600,50,50);
      enemy.setVelocity(0,-17);
      enemy.addImage(upR);
      enemy.scale=(0.2);
      
    }
  console.log(rand); 
  enemyGroup.add(enemy);
  
  

}}





function spawnEnemy4() {
  

  if (frameCount % 10 === 0) {
     rand = Math.round(random(1,4));
     
    
    if (rand === 1) {
      enemy = createSprite(100,600,50,50);
      enemy.setVelocity(+20,random(0,-25));
      enemy.addImage(orb);
      enemy.scale=(0.1);
      ;
    }
    else if(rand === 2){
      enemy = createSprite(900,0,50,50);
      enemy.setVelocity(-20,random(0,25));
      enemy.addImage(orb);
      enemy.scale=(0.1);
      
    }
    if (time>7500) {
    if (rand === 3) {
      enemy = createSprite(0,0,50,50);
      enemy.setVelocity(+20,random(0,+25));
      enemy.addImage(orb);
      enemy.scale=(0.1);
      
    }

    if (rand === 4) {
      enemy = createSprite(900,600,50,50);
      enemy.setVelocity(-20,random(0,-25));
      enemy.addImage(orb);
      enemy.scale=(0.1);
      
    }
  }
    
  console.log(rand); 
  enemyGroup.add(enemy);
  
  
  

}}





function level1() {

  text("Level 1 ", 100, 100);

  if(keyIsDown(UP_ARROW)){

    ship.y = ship.y-10;
  }

  if(keyIsDown(DOWN_ARROW)){

    ship.y = ship.y+10;
  }
  if (ship.collide(enemyGroup)) {
    gameState = 2;
  }
  spawnEnemy();
  
}






function level2() {

  text("Level 2 ", 100, 100);

  if(keyIsDown(UP_ARROW)){

    ship.y = ship.y-10;
  }

  if(keyIsDown(DOWN_ARROW)){

    ship.y = ship.y+10;
  }
  if(keyIsDown(RIGHT_ARROW)){

    ship.x = ship.x+10;
  }

  if(keyIsDown(LEFT_ARROW)){

    ship.x = ship.x-10;
  }

  if (ship.collide(enemyGroup)) {
    gameState = 2;
  }
  spawnEnemy2();
}






function level3() {

  text("Level 3 ", 100, 100);

  if(keyIsDown(UP_ARROW)){

    ship.y = ship.y-10;
  }

  if(keyIsDown(DOWN_ARROW)){

    ship.y = ship.y+10;
  }
  if(keyIsDown(RIGHT_ARROW)){

    ship.x = ship.x+10;
  }

  if(keyIsDown(LEFT_ARROW)){

    ship.x = ship.x-10;
  }

  if (ship.collide(enemyGroup)) {
    gameState = 2;
  }
  spawnEnemy3();
}






function level4() {

  text("Level 4 ", 100, 100);

  if(keyIsDown(UP_ARROW)){

    ship.y = ship.y-10;
  }

  if(keyIsDown(DOWN_ARROW)){

    ship.y = ship.y+10;
  }
  if(keyIsDown(RIGHT_ARROW)){

    ship.x = ship.x+10;
  }

  if(keyIsDown(LEFT_ARROW)){

    ship.x = ship.x-10;
  }

  if (ship.collide(enemyGroup)) {
    gameState = 2;
  }
  spawnEnemy4();
}

function restart() {
  level = 1;
  time = 0;
  gameOver.visible = false;
  reset.visible = false;
  ship.visible = true;
  gameState = 1;
  ship.addImage(ship_img);
  ship.x = 200;
  
}