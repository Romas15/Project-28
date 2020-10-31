const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1,
  boyImage,
  mango1,
  groundObj,
  tree1,
  mango2,
  mango3,
  mango4,
  mango5,
  mango6,
  mango7;

var mango8, launcherObject, lmango, distance, treeImage, boyImage;

function preload() {
  treeImage = loadImage("Images/tree.png");
  boyImage = loadImage("Images/boy.png");
}

function setup() {
  createCanvas(900, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  stone1 = new Stone(65, 480, 80, 80);
  mango1 = new Mango(880, 300, 30);
  mango2 = new Mango(540, 400, 30);
  mango3 = new Mango(500, 340, 50);
  mango4 = new Mango(680, 370, 30);
  mango5 = new Mango(770, 350, 30);
  mango6 = new Mango(850, 380, 30);
  mango7 = new Mango(600, 290, 30);
  mango8 = new Mango(700, 240, 30);
  tree1 = new Tree(30, 30, 1);
  ground1 = new Ground(200, 700, 500, 20);
  // launcherObject = new Slider(stone1.body, { x: 200, y: 100 });
  //launcherObject = new Slider(stone1.body, boy.body);

  launcherObject = new Slider(stone1.body, { x: 90, y: 490 });
  Engine.run(engine);
}

function draw() {
  // detectCollison(stone1, mango8);
  console.log(mouseX);

  rectMode(CENTER);

  background(100);

  fill(180);
  textSize(20);
  text("Press Space to try Again!", 200, 250);
  image(boyImage, 80, 410, 200, 300);
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground1.display();
  mango1.scale = 0.04;
  mango2.scale = 0.04;
  mango3.scale = 0.04;
  mango4.scale = 0.04;
  mango5.scale = 0.04;
  mango6.scale = 0.04;
  mango7.scale = 0.04;
  mango8.scale = 0.04;

  keyPressed();

  // detectCollison(stone1, mango2);
  // detectCollison(stone1, mango3);
  // detectCollison(stone1, mango4);
  // detectCollison(stone1, mango5);
  // detectCollison(stone1, mango6);
  // detectCollison(stone1, mango7);
  // detectCollison(stone1, mango8);

  drawSprites();
}
function mouseReleased() {
  launcherObject.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    launcherObject.attach(stone1.body);
  }
}

detectCollision(stone1, mango1);
detectCollision(stone1, mango2);
detectCollision(stone1, mango3);
detectCollision(stone1, mango4);
detectCollision(stone1, mango5);
detectCollision(stone1, mango6);
detectCollision(stone1, mango7);
detectCollision(stone1, mango8);

function mouseDragged() {
  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
}

function detectCollision(stone1, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = stone1.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  //console.log(distance)
  // console.log(lmango.r+lstone.r)
  if (distance <= lmango.r + stone1.r) {
    //console.log(distance);
    Matter.Body.setStatic(lmango.body, false);
  }
}
