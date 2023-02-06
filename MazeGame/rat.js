let level1 = [
    [1, 0, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 1]
];

let level2 = [
    [1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1]
]
let level3 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [0, 1, 1, 1, 1]
]

let mazeArray = level1;
let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let food = document.getElementById("food");

let Level = document.getElementById("selection");
Level.addEventListener("change", () => {
    let level = Level.value;
    if (level == 1) {
        mazeArray = level1
    }

    if (level == 2) {
        mazeArray = level2
    }
    if (level == 3) {
        mazeArray = level3
    }

    maze.innerHTML =
        `<img src="images.jpg" alt="rat" id="rat">
    <img src="cheese.jpg" alt="food" id="food">
    `

    mazeCreation()
});

function setRat(x, y) {
    rat.style.top = x + "px";
    rat.style.left = y + "px";
}


function setFood(x, y) {
    food.style.bottom = x + "px";
    food.style.right = y + "px";
}

function mazeCreation() {
    for (let i = 0; i < mazeArray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row")

        for (let j = 0; j < mazeArray[i].length; j++) {
            let cols = document.createElement("div");
            if (mazeArray[i][j] == 0) {
                cols.classList.add("wall")
            } else {
                cols.classList.add("cols")
            }
            row.appendChild(cols)

            if (i == 0 && j == 0) {
                mazeArray[i][j] = 2;
            }
        }

        maze.appendChild(row)
    }

    setFood(0, 0);
    setRat(0, 0);
    getPosition()

}


function getPosition() {
    let position = [-1, -1];
    for (let i = 0; i < mazeArray.length; i++) {
        for (let j = 0; j < mazeArray[i].length; j++) {
            if (mazeArray[i][j] == 2) {
                position[0] = i;
                position[1] = j;
            }
        }
    }
    return position;
}


document.addEventListener("keydown", ratMoving);

function ratMoving(e) {
    let ratLeft = rat.offsetLeft;
    let foodLeft = food.offsetLeft;
    let ratTop = rat.offsetTop;
    let foodTop = food.offsetTop;

    let ratPosition = getPosition();



    if (e.key == "ArrowRight" && ratLeft < (mazeArray.length - 1) * 80 && mazeArray[ratPosition[0]][ratPosition[1] + 1] == 1) {
        ratLeft += 80;
        rat.style.left = ratLeft + "px";
        mazeArray[ratPosition[0]][ratPosition[1]] = 1;
        mazeArray[ratPosition[0]][ratPosition[1] + 1] = 2;
    }
    if (e.key == "ArrowLeft" && ratLeft > 0 && mazeArray[ratPosition[0]][ratPosition[1] - 1] == 1) {
        ratLeft -= 80;
        rat.style.left = ratLeft + "px";
        mazeArray[ratPosition[0]][ratPosition[1]] = 1;
        mazeArray[ratPosition[0]][ratPosition[1] - 1] = 2;
    }
    if (e.key == "ArrowDown"  && ratTop < (mazeArray.length - 1) * 80 && mazeArray[ratPosition[0] +1][ratPosition[1]] == 1) {
        ratTop += 80;
        rat.style.top = ratTop + "px";
        mazeArray[ratPosition[0]][ratPosition[1]] = 1;
        mazeArray[ratPosition[0] + 1][ratPosition[1]] = 2;
    }
    if (e.key == "ArrowUp"  && ratTop > 0 && mazeArray[ratPosition[0] -1][ratPosition[1]] == 1) {
        ratTop -= 80;
        rat.style.top = ratTop + "px";
        mazeArray[ratPosition[0]][ratPosition[1]] = 1;
        mazeArray[ratPosition[0] - 1][ratPosition[1]] = 2;
    }

    // if(ratLeft == foodLeft && ratTop == foodTop){
    //     alert("you win")
    // }
}



mazeCreation()