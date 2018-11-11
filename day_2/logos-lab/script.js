
function setup(){
    // Some code goes here
    createCanvas(1000, 800); //new function with height and width
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw(){
    // target logo
    fill("red");
    ellipse(56, 46, 65, 65);
    fill("white");
    ellipse(56, 46, 45, 45);
    fill("red");
    ellipse(56, 46, 20, 20);
    
    // converse logo
    fill("navy");
    ellipse(70, 200, 120, 120);
    fill("white")
    ellipse(70, 200, 110, 110);
    fill("navy");
    star(70, 200, 20, 50, 5);
    
    // red cross logo
    fill("red");
    noStroke();
    rect(30, 330, 80, 20);
    fill("red");
    noStroke();
    rect(60, 300, 20, 80);
    
    // microsoft logo
    fill("white");
    rect(200, 100, 84, 84);
    fill("red");
    rect(205, 105, 35, 35);
    fill("green");
    rect(245, 105, 35, 35);
    fill("blue");
    rect(205, 145, 35, 35);
    fill("yellow");
    rect(245, 145, 35, 35);
    noStroke();
    noFill();
    rect(200, 100, 85, 85);
}

