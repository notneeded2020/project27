
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof = new Roof (400,100,600,50);

	bob1 = new Bob (160,550,60);
	bob2 = new Bob (280,550,60);
	bob3 = new Bob (400,550,60);
	bob4 = new Bob (520,550,60);
	bob5 = new Bob (640,550,60);

	rope1 = new Rope (bob1.body,roof.body,240,0);
	rope2 = new Rope (bob2.body,roof.body,240,0);
	rope3 = new Rope (bob3.body,roof.body,240,0);
	rope4 = new Rope (bob4.body,roof.body,240,0);
	rope5 = new Rope (bob5.body,roof.body,240,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,245,236);

  roof.display ();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

