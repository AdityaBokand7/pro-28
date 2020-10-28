
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
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
stone = new Stone(200,200,50,50);
mango = new Mangoes(1000,330,70,70)
mango2 = new Mangoes(1300,200,70,70)
mango3 = new Mangoes(1100,150,70,70)
mango4 = new Mangoes(1250,330,70,70)
mango5 = new Mangoes(1200,50,70,70)
mango6 = new Mangoes(1400,120,70,70)

chain = new Chain(stone.body,{x:327,y:530})
var render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("white");
  Engine.update(engine);

  
 

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


  detectollision(stone,mango)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)


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
gameState = "onsling"
}

}

function  detectollision(lstone,lmango){
stoneBodyPosition=lstone.body.position
mangoBodyPosition=lmango.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false)

}
}
