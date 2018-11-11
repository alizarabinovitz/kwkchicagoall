
function setup(){
    // Some code goes here
    createCanvas(1000, 800); //new function with height and width
}

function draw(){
    // circle for the head/face
    fill("pink");
    ellipse(500, 400, 475, 700);
    // two boxes for the eyes
    fill("black");
    rect(380, 240, 55, 55);
    rect(550, 240, 55, 55);
    // triangle for the mouth-nose
    triangle(462, 445, 500, 380, 534, 445);
    // two lines for the antennas
    line(200, 30, 330, 150);
    line(800, 30, 670, 150)
    // lines for the ears
    line(150, 300, 260, 370);
    // triangle and square for end of antennas
    triangle(186, 55, 206, 25, 226, 55);
    rect(790, 23, 35, 35);
}

