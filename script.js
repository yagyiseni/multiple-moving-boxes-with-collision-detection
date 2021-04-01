var stepx = 1;

var stepy = 1;
var Box = new Array();
var Xposition = new Array();
var Yposition = new Array();
parentBox = document.getElementById("main-div");
window.onload = createBoxes();
var counter = 0;
paragraph = document.getElementById("counter-display");
const cnt = document.createElement("p");
cnt.innerText("ants killed:" + counter);
paragraph.append(cnt);

function createBoxes() {

    for (var i = 0; i < 7; i++) {
        const Boxes = document.createElement("div");
        parentBox.append(Boxes);
        var dx = positionGeneratorx();
        var dy = positionGeneratory();
        Boxes.setAttribute('name', 'child-div-' + i);
        Boxes.setAttribute("id", "child-div-" + i);
        Boxes.setAttribute("style", "position:absolute; top:" + dy + "px; left:" + dx + "px; height:30px; width:30px; background-color: #a52a2a ");
        var ant = document.createElement("img");
        ant.src = "ant-svg.svg";
        ant.setAttribute("style", "width:30px; height:30px;");
        Boxes.appendChild(ant);
        Boxes.addEventListener('click', function() {
            deleteBoxes(Boxes);
        });
        move(0.2, 0.2, dx, dy, Boxes, i);
    }

}

function deleteBoxes(Boxes) {
    counter++;
    const del = Boxes.parentElement;
    del.removeChild(Boxes);


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
        if (stepx < 0) {
            Boxes.style.transform = "rotate(270deg)";
            if (stepy > 0) {
                Boxes.style.transform = "rotate(-90deg)";
            }
            if (stepy < 0) {
                Boxes.style.transform = "rotate(90deg)";
            }
        }
        if (stepx > 0) {
            Boxes.style.transform = "rotate(90deg)";
            if (stepy > 0) {
                Boxes.style.transform = "rotate(90deg)";
            }
            if (stepy < 0) {
                Boxes.style.transform = "rotate(-90deg)";
            }
        }
        // if (stepy > 0) {
        //     Boxes.style.transform = "rotate(180deg)";
        //     if (stepx > 0) {
        //         Boxes.style.transform = "rotate(-90deg)";
        //     }
        //     if (stepx < 0) {
        //         Boxes.style.transform = "rotate(90deg)";
        //     }
        // }
        // if (stepy < 0) {
        //     Boxes.style.transform = "rotate(0deg)";
        //     if (stepx > 0) {
        //         Boxes.style.transform = "rotate(90deg)";
        //     }
        //     if (stepx < 0) {
        //         Boxes.style.transform = "rotate(-90deg)";
        //     }
        // }
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