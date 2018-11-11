var groundLevel = 550;
var rocketHeight = 80;
var rocketWidth = 20;
var rocketY = groundLevel - rocketHeight;
var rocketX = 200 - rocketWidth/2

function setup(){
    createCanvas(400,600);
}

function draw(){
    background(250);
    
    // ground
    line(0, groundLevel, width, groundLevel);
    
    // rocket body
    rect(rocketX, rocketY, rocketWidth, rocketHeight);
    
    //rocket top
    triangle()
}