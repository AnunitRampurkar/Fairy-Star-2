//Create Variables: -
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//------------------------------------------------------------------------------------------------------------------------------------

function preload()
{
//Load the images & music below:-
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

//------------------------------------------------------------------------------------------------------------------------------------

function setup() {
//Create a canvas: -
	createCanvas(800, 750);

//Make a variable for fairy: -
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

//Make a variable for star: -
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

//Add the engine in the world: -
	engine = Engine.create();
	world = engine.world;

//Give physical states to star & add it in the world: -
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

//------------------------------------------------------------------------------------------------------------------------------------

function draw() {
  background(bgImg);

//Play a background music: -
  fairyVoice.play();

//Create name spacing: -
  star.y = starBody.position.y

//Create a command by which, Star will be stopped after touching the Fairy
  if(star.y > 470) {
	  Matter.Body.setStatic(starBody, true);
  }

  drawSprites();
  
  //fairy.debug = true;

}

//------------------------------------------------------------------------------------------------------------------------------------

//Create a function for keys: -
function keyPressed() {

//Left Key Code: -
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-25;
	}

//Right Key Code: -
	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x+25;
	}

//Down Key Code: -
	if(keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false);
	}
}
