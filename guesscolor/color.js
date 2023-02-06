console.log("Hello");

let box = document.querySelectorAll(".box");
let rgb = document.querySelector("p");

const randomColor = [];
const boxColor = [];
let color = 0;
let random = Math.floor(Math.random() * 9);


// CREATING 27 RANDOM NUMBER FOR RGB

for (let i = 0; i < 27; i++) {
    let random = Math.floor(Math.random() * 256);
    randomColor.push(random)
}

// CLICK FUNCTION AND RANDOM COLOR FOR ALL THE BOXES
// PUSH ALL THE COLOR VALUES OF BOXES IN BOXCOLOR ARRAY

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", checkAnswer);
    box[i].style.backgroundColor = "rgb(" + randomColor[color] + " , " + randomColor[color + 1] + "," + randomColor[color + 2];
    boxColor.push(box[i].style.backgroundColor)
    color += 3;
}


// console.log(randomColor);
// console.log(boxColor);

rgb.textContent = boxColor[random];
// rgb.style.backgroundColor = boxColor[random]


// AFTER CLICKING THE BOX CHECK THE ANSWER

function checkAnswer() {
    if (boxColor[this.id] == rgb.textContent) {
        alert("Right answer");
        window.location.reload();
    } else {
        alert("Wrong answer")
    }
}