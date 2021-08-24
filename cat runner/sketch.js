var cat, dog, bird, milk, catimg, dogimg, birdimg, milkimg, fish, fishimg, cloudimg;
var gameover, gameoverimg
var milkG, fishG;
var background, backgroundimg;
var gamestate;
var ground;
var points = 0;
var gamestate = 0;

function preload() {
  catimg = loadAnimation("cat1.png", "cat2.png");
  dogimg = loadImage("dog.png");
  birdimg = loadImage("bird.png");
  milkimg = loadImage("milk.png");
  fishimg = loadImage("fish.png");
  cloudimg = loadAnimation("cloud.png")
  gameoverimg = loadImage("gameover.png")

  backgroundimg = loadImage("background.png");
}

function setup() {
  createCanvas(700, 400);

  background = createSprite(450, 100, 10, 10);
  background.addImage("background", backgroundimg)
  background.scale = 1.5;
  background.velocityX = -3;

  cat = createSprite(100, 270, 10, 10);
  cat.addAnimation("cat", catimg);
  cat.addAnimation('cloud', cloudimg);
  cat.scale = 0.15;

  ground = createSprite(0, 400, 700, 120)
  ground.visible = false;

  gameover = createSprite(350, 200, 20, 20)
  gameover.addImage('gameover', gameoverimg)
  gameover.scale = 0.2
  gameover.visible = false;

  milkG = createGroup();
  fishG = createGroup();
  dogG = createGroup();
  birdG = createGroup();
}

function draw() {
  backgroundColor = "white"

  if(gamestate == 0) {
    background.velocityX = -(3 + points/5);

  if(background.x < 250) {
    background.x = 450
  }

  if(keyDown('SPACE') && cat.y >= 100) {
    cat.velocityY = -6;
  }

  //add gravity
  cat.velocityY += 0.5;
  cat.collide(ground);

  if(milkG.isTouching(cat)) {
    milkG.destroyEach();
    points++;
  }
  else if(fishG.isTouching(cat)) {
    fishG.destroyEach();
    points += 3;
  }

  spawnDog();
  spawnBird();
  spawnMilk();
  spawnFish();

  if(dogG.isTouching(cat) || birdG.isTouching(cat)) {
    gamestate = 1;
  }
  }

  else if(gamestate == 1) {
    gameover.visible = true
    background.velocityX = 0;
    dogG.setVelocityXEach(0);
    dogG.setLifetimeEach(-1);
    birdG.setVelocityXEach(0);
    birdG.setLifetimeEach(-1);
    milkG.setVelocityXEach(0);
    milkG.setLifetimeEach(-1);
    fishG.setVelocityXEach(0);
    fishG.setLifetimeEach(-1);
    cat.velocityX = 0;
    cat.velocityY = 0;
    cat.changeAnimation('cloud', cloudimg)
  }

  //console.log(points);
  drawSprites();
  textSize(30)
  fill("black")
  text("Points : " + points, 475, 50)
}

function spawnDog() {
  if(frameCount % 150 == 0) {
  dog = createSprite(1000, Math.round(random(280, 370)), 10, 10);
  dog.addImage("dog", dogimg);
  dog.velocityX = -(3 + points/5);
  dog.scale = 0.5
  dog.lifetime = 500
  dogG.add(dog)
  }
}

function spawnBird() {
  if(frameCount % 130 == 0) {
  bird = createSprite(1000, Math.round(random(50, 75)), 10, 10);
  bird.addImage("bird", birdimg);
  bird.velocityX = -(3 + points/5);
  bird.scale = 0.1
  bird.lifetime = 500
  birdG.add(bird)
  }
}

function spawnMilk() {
  if(frameCount % 180 == 0) {
  milk = createSprite(1000, Math.round(random(200, 300)), 10, 10);
  milk.addImage("milk", milkimg);
  milk.velocityX = -(3 + points/5);
  milk.scale = 0.07
  milk.lifetime = 500
  milkG.add(milk);
  }
}

function spawnFish() {
  if(frameCount % 200 == 0) {
  fish = createSprite(1000, Math.round(random(200, 300)), 10, 10);
  fish.addImage("fish", fishimg);
  fish.velocityX = -(3 + points/5);
  fish.scale = 0.1
  fish.lifetime = 500
  fishG.add(fish);
  }
}