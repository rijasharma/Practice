let container = document.getElementById("container");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let line = document.querySelector(".line");
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let ball = document.getElementById("ball");

let controlUp = false;
let controlDown = false;

document.addEventListener("keydown", downEvent);
document.addEventListener("keyup", upEvent);

function downEvent(e) {
    if (e.keyCode === 38) {
        controlUp = true;
        console.log("38");
    } else if (e.keyCode === 40) {
        controlDown = true;
        console.log("40");
    }
}

function upEvent(e) {
    if (e.keyCode === 38) {
        controlUp = false;
        console.log("38 released");
    } else if (e.keyCode === 40) {
        controlDown = false;
        console.log("40 released");
    }
}



let x = -4;
let y = -5;
let velocity = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));  //PYTHAGORUS THEOREM.......


function reset() {
    ball.style.left = "50%";
    ball.style.top = "50%";
    x = -4;
    y = -5;
    velocity = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));  //PYTHAGORUS THEOREM.......
}


function isCollision(currentBox) {
    let ballTop = ball.offsetTop;
    let ballBottom = ball.offsetTop + ball.offsetHeight;
    let ballLeft = ball.offsetLeft;
    let ballRight = ball.offsetLeft + ball.offsetWidth;

    let boxTop = currentBox.offsetTop;
    let boxBottom = currentBox.offsetTop + currentBox.offsetHeight;
    let boxLeft = currentBox.offsetLeft;
    let boxRight = currentBox.offsetLeft + currentBox.offsetWidth;

    if (ballBottom > boxTop &&
        ballTop < boxBottom &&
        ballRight > boxLeft &&
        ballLeft > boxRight) {
        console.log("collision");
        return true;
    }
    else{
        return false;
    }
}



function game() {

    if (ball.offsetLeft < 0) {
        x = -x;
    }
    if (ball.offsetLeft > 800) {
        x = -x;
    }
    if (ball.offsetTop < 0) {
        y = -y;
    }
    if (ball.offsetTop > 500) {
        y = -y;
    }


    let currentBox = ball.offsetLeft < 800 / 2 ? box1 : box2;
    // console.log(currentBox);
    let ballCenterY = ball.offsetTop + 20 / 2;
    let boxCenterY = currentBox.offsetTop + 100 / 2;
    let angle = 0;

    if(isCollision(currentBox)){
        if (currentBox == box1) {
            if (ballCenterY < boxCenterY) {
                angle = -Math.PI / 4;
            }
            else if (ballCenterY > boxCenterY) {
                angle = Math.PI / 4;
            }
            else{
                angle = 0;
            }
        }

        else if (currentBox == box2) {
            if (ballCenterY < boxCenterY) {
                angle = -3 * Math.PI / 4;
            }
            else if (ballCenterY > boxCenterY) {
                angle = 3* Math.PI / 4;
            }
            else{
                angle = 0;
            }
        }

x = velocity * Math.cos(angle);
y = velocity * Math.sin(angle);

    }


    ball.style.left = ball.offsetLeft + x + "px";
    ball.style.top = ball.offsetTop + y + "px";




    if (controlUp && box1.offsetTop > 55) {
        box1.style.top = box1.offsetTop - 5 + "px";
    }
    if (controlDown && box1.offsetTop < 450) {
        box1.style.top = box1.offsetTop + 5 + "px";
    }
    requestAnimationFrame(game);  ////  FOR CONTINUOUS RUNNING.........
}

game();