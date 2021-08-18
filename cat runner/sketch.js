var cat, dog, bird, milk, catimg, dogimg, birdimg, milkimg;
var background, backgroundimg;
var gamestate;

function preload() {
  catimg = loadAnimation("cat1.png", "cat2.png");
  dogimg = loadImage("dog.png");
  birdimg = loadImage("bird.png");
  milkimg = loadImage("milk.png");

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
  cat.scale = 0.15;

}

function draw() {
  backgroundColor = "white"

  if(background.x < 250) {
    background.x = 450
  }

  spawnDog();
  spawnBird();
  spawnMilk();
  drawSprites();
}

function spawnDog() {
  if(frameCount % 150 == 0) {
  dog = createSprite(1000, Math.round(random(280, 370)), 10, 10);
  dog.addImage("dog", dogimg);
  dog.velocityX = -3;
  dog.scale = 0.5
  dog.lifetime = 500
  }
}

function spawnBird() {
  if(frameCount % 130 == 0) {
  bird = createSprite(1000, Math.round(random(50, 100)), 10, 10);
  bird.addImage("bird", birdimg);
  bird.velocityX = -3;
  bird.scale = 0.1
  bird.lifetime = 500
  }
}

function spawnMilk() {
  if(frameCount % 70 == 0) {
  milk = createSprite(1000, Math.round(random(100, 300)), 10, 10);
  milk.addImage("milk", milkimg);
  milk.velocityX = -3;
  milk.scale = 0.07
  milk.lifetime = 500
  }
}