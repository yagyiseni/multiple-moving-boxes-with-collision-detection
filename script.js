var stepx = 1;

var stepy = 1;
var Box = new Array();
var Xposition = new Array();
var Yposition = new Array();
parentBox = document.getElementById("main-div");

document.getElementById('move-btn').addEventListener('click', createBoxes());

function createBoxes() {

    for (var i = 0; i < 7; i++) {
        const Boxes = document.createElement("div");
        parentBox.append(Boxes);
        var dx = positionGeneratorx();
        var dy = positionGeneratory();
        Boxes.setAttribute('name', 'child-div-' + i);
        Boxes.setAttribute("id", "child-div-" + i);
        Boxes.setAttribute("style", "position:absolute; top:" + dy + "px; left:" + dx + "px; height:30px; width:30px; background-color: #ffa600 ");
        Box.push(Boxes);
        move(1, 1, dx, dy, Boxes, i);


    }
    console.log(Xposition);
    console.log(Xposition);

}

function positionGeneratorx() {
    x = Math.floor((Math.random() * 770) + 1);
    return x;

}

function positionGeneratory() {
    y = Math.floor((Math.random() * 470) + 1);
    return y;
}

function move(stepx, stepy, dx, dy, Boxes, index) {
    setInterval(() => {
        dx += stepx;
        Boxes.style.left = dx + "px";

        dy += stepy;
        Boxes.style.top = dy + "px";
        if (dx > 770 || dx < 0) {
            stepx = stepx * -1;
        }
        if (dy > 470 || dy < 0) {
            stepy = stepy * -1;
        }

        Xposition[index] = dx;
        Yposition[index] = dy;
        for (var i = 0; i < 7; i++) {

            if (!(i === index)) {
                if ((Xposition[i] < dx + 30) && (Xposition[i] + 30 > dx) && (Yposition[i] < dy + 30) && (Yposition[i] + 30 > dy)) {
                    stepx = stepx * -1;
                    stepy = stepy * -1;
                    // Boxes.setAttribute("style", "background-color:" + getRandomColor());
                }
            }
        }
    }, 10);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}