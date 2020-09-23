
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImage;
var paper;
var ground;


function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(400,670,800,20,ground_options);
	World.add(world,ground);
	console.log(ground.position);
	
	paperObject = new Paper(200,500,20,"pink")

	box1 = new Dustbin(595,610,15,120);
	box2 = new Dustbin(649,650,100,15);
	box3 = new Dustbin(700,610,15,120);

	trashcan=createSprite(649,610)
	trashcan.addImage(dustbinImage)
	trashcan.scale = 0.4;

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);

 

  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
 
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-60});


	}



}




