
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100, 400, 20)
	bob = new Bob(300, 400);
	bob1 = new Bob(350, 400);
	bob2 = new Bob(400, 400);
	bob3 = new Bob(450, 400);
	bob4 = new Bob(500, 400);
	chain = new Chain(roof.body, bob.body, -100, 0);
	chain1 = new Chain(roof.body, bob1.body, -50,0);
	chain2 = new Chain(roof.body, bob2.body, 0, 0);
	chain3 = new Chain(roof.body, bob3.body, 50, 0);
	chain4 = new Chain(roof.body, bob4.body, 100, 0);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();


  drawSprites();
 
}



