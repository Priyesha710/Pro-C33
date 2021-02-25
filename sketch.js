var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight = 300;
var score = 0;
var times = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}



function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
//300,100,50,500,20,0,30,0,60,900
var y = 500;
var x = 40;
//40,120,200,280
  text("300",x,y);
  text("100",x+80,y);
  text("50",x+160,y);
  text("500",x+240,y);
  text("20",x+320,y);
  text("0",x+400,y);
  text("30",x+480,y);
  text("0",x+560,y);
  text("60",x+640,y);
  text("900",x+720,y);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
   // Add(particles[j]);
    // console.log(particles[j].x);
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

if(times>6){
  background("Black");
  textSize(40);
  fill("white");
  text("GAME OVER", 360, 400);
  textSize(20);
  text("Your Score :"+score , 400, 500);
}
}

function mouseClicked() {
  if(times < 5){
  particles.push(new Particle(mouseX, 10, 10));
}
times++; 
}
