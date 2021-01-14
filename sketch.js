
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, boy, stoneBoy;

var mango1, mango2, mango3, mango4;

var tPoint = {x: 145, y: 600}

function preload()
{

	boy = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 700, width, 50)
	tree = new Tree(500, 350)

	stoneBoy = new Stone(145, 600, 10, tPoint)

	mango1 = new Mango(575, 450, 13, 33, 44)
	mango2 = new Mango(650, 425, 13, 33, 44)
	mango3 = new Mango(600, 400, 13, 33, 44)
	mango4 = new Mango(625, 450, 13, 33, 44)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display()
  tree.display()

  image(boy, 125, 565, 100, 150)
  stoneBoy.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()

  detectCollision(mango1, stoneBoy)
  detectCollision(mango2, stoneBoy)
  detectCollision(mango3, stoneBoy)
  detectCollision(mango4, stoneBoy)
  

  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneBoy.body, {x: mouseX, y: mouseY}) 
 }
 
function mouseReleased(){
	stoneBoy.fly()
}

function keyPressed(){

	if(keyCode == 32){
		stoneBoy.attach({x: 145, y: 600})
	}
}

function detectCollision(mango, stone){
	mangoPos = mango.body.position;
	stonePos = stone.body.position

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

	if (distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body, false)
	}
}




