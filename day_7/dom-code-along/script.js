// make a box change color using a counter variable and conditionals
var player1 = true

function changeColor() {
    var myBox = document.getElementById('box1');
    // if player 1 clicks box it turns tomato
    if (player1 == true) {
        myBox.setAttribute("color", "tomato");
        player1 = false;
    }
    // if player 2 clicks the box it turns yellow
    else if (player1 == false) {
        myBox.setAttribute("color", "yellow");
        player1 = true;
    }
}

//append a sphere to the page
function addSphere() {
    for (var i = 0; i < 51; i++) {
        // creating a new sphere
        var positionX = Math.floor(Math.random() * 5);
        var positionY = Math.floor(Math.random() * 5);
        var positionZ = Math.floor(Math.random() * -5);
        var size=Math.random()

        var newSphere = document.createElement("a-sphere");
        // change sphere's attributes
        newSphere.setAttribute("color", "dodgerblue")
        newSphere.setAttribute("radius", `${size}`)
        newSphere.setAttribute("position", `${positionX} ${positionY} ${positionZ}`)
            // add the sphere to the a-scene
        document.getElementById('scene').appendChild(newSphere)
    }
}
