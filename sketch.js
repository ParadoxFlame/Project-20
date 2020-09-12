var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = ((0.5)*speed*weight*speed)/22500;

  car.velocityX = speed;
}

function draw() {
  background("black");  

  if ((wall.x - car.x < car.width/2 + wall.width/2)
    && (car.x - wall.x < car.width/2 + wall.width/2))
    {
      deformCheck();
    }

  drawSprites();
}

  function deformCheck(){
    car.velocityX = 0;
    car.x = 1450;


    if (deformation < 100){
      car.shapeColor = "green";
    }
  
    else if (100 < deformation < 180){
      car.shapeColor = "yellow";
    }
  
    else if (1 < deformation){
      car.shapeColor = "red";
    }
  }