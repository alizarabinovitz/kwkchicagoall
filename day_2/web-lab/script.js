var centerX
var centerY

function setup() {
    createCanvas(windowWidth, windowHeight);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

function draw() {
    clear();
    strokeWeight(4)
    line(0, 0, mouseX, mouseY);
    line(centerX, 0, mouseX, mouseY);
    line(windowWidth, 0, mouseX, mouseY);
    line(0, centerY, mouseX, mouseY);
    line(centerX, windowHeight, mouseX, mouseY);
    line(0, windowHeight, mouseX, mouseY);
    line(windowWidth, windowHeight, mouseX, mouseY);
    line(windowWidth, centerY, mouseX, mouseY);


}
