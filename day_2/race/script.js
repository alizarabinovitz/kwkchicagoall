var racerSize = 30;
var startX = 0;
var startY;
var top_speed = 8
var second_speed = 10
var third_speed = 6
var fourth_speed=3

var startX1 = startX
var startX2 = startX
var startX3 = startX
var startX4 = startX

function setup() {
    createCanvas(windowWidth, windowHeight);
    startY = windowHeight/5;
}

function draw() {
   background(200, 255, 255);
   
   // the finish line
   strokeWeight(4);
   stroke(0);
   line(windowWidth-35,0,windowWidth-35,windowHeight);

    // the competing dots
    strokeWeight(1);
    fill("red");
    ellipse(startX1,startY,racerSize);
    fill("navy");
    ellipse(startX2,startY*2,racerSize);
    fill("green");
    ellipse(startX3,startY*3,racerSize);
    fill("yellow");
    ellipse(startX4,startY*4,racerSize);
    
    // making the dots move
    startX1 = startX1 + third_speed
    startX2 = startX2 + top_speed
    startX3 = startX3 + second_speed
    startX4 = startX4 + fourth_speed
    
    // display winner
    if(startX2 >= (windowWidth-35))
    {
      fill("black");
      textSize(30);
      text("WINNER!", 10, 30);  
    }
    
}
