
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var balls = []
var divisions = []
var particle1,particle2,particle3,particle4,particle5,particle6,particle7,particle8,particle9,particle10
,particle11,particle12,particle13,particle14,particle15,particle16,particle17,particle18;

var division1,division2,division3;

var ball1;

var ground;
var divisionHeight = 300;
function preload()
{
	
}

function setup() {
	createCanvas(400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	particle1 = new Particle(50,50,20);
	particle2 = new Particle(150,50,20);
	particle3 = new Particle(250,50,20);
	particle4 = new Particle(350,50,20);
	particle5 = new Particle(450,50,20);
	particle6 = new Particle(50,150,20);
	particle7 = new Particle(150,150,20);
	particle8 = new Particle(250,150,20);
	particle9 = new Particle(350,150,20);
	particle10 = new Particle(50,250,20);
	particle11 = new Particle(150,250,20);
	particle12 = new Particle(250,250,20);
	particle13 = new Particle(350,250,20);
	particle14 = new Particle(450,250,20);
	particle15 = new Particle(50,350,20);
	particle16 = new Particle(150,350,20);
	particle17 = new Particle(250,350,20);
	particle18 = new Particle(350,350,20);
 
	division1 = new Division(100,500,10,200);
	division2 = new Division(200,500,10,200);
	division3 = new Division(300,500,10,200);

	ground = new Ground(200,597,400,10);

	ball1 = new Ball(200,30,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  particle16.display();
  particle17.display();
  particle18.display();

  division1.display();
  division2.display();
  division3.display();

  ground.display();

  ball1.display();

}



