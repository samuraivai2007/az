const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
   var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2=Bodies.circle(350,10,12,ball_options);
  World.add(world,ball2);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
      con2 = Matter.Constraint.create({
        pointA:{x:0,y:0},
        bodyA:ball,
        pointB:{x:0,y:0},
        bodyB:ball2,
        length:100,
        stiffness:0.1
      });

    World.add(world,con2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("#99004d");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,20)

  rect(roof.position.x,roof.position.y,230,20);
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}




