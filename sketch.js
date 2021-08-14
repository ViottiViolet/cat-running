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
  createCanvas(600, 400);

  cat = createSprite(200, 300, 10, 10);
  cat.addAnimation("cat", catimg);
  cat.scale = 0.3;
}

function draw() {
  drawSprites();
}