
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var boy;
var stone;
var chain;
var mango;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;


var gameState = "onsling"
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(700,670,width,20)
tree = new Tree(1100,330,20,10)
boy = new Boy(400,600,50,100)
stone = new Stone(200,200,20,20);
mango = new Mangoes(1000,330)
mango2 = new Mangoes(1300,200)
mango3 = new Mangoes(1100,150)
mango4 = new Mangoes(1250,330)
mango5 = new Mangoes(1200,50)
mango6 = new Mangoes(1400,120)

chain = new Chain(stone.body,{x:327,y:530})

stone.depth = stone.depth+1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("white");
  Engine.update(engine);

  
  detectollision(stone,mango)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function mouseDragged(){
  if(gameState!=="launched")
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
chain.fly();
gameState = "launched"
}

function keyPressed(){
if(keyCode  === 32){
chain.attach(stone.body)

}

}

function  detectollision(lstone,lmango){
stoneBodyPosition=lstone.body.position
mangoBodyPosition=lmango.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
Matter.body.setStatic(lmango.body,false)

}
}
