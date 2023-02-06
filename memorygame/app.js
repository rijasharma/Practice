console.log("hello");

const cardImg = [

    {
        name: "images(1)",
        img: "images(1).jpg"
    },

    {
        name: "images(2)",
        img: "images(2).jpg"
    },
    {
        name: "images(3)",
        img: "images(3).jpg"
    },
    {
        name: "images(4)",
        img: "images(4).jpg"
    },
    {
        name: "images(5)",
        img: "images(5).jpg"
    },
    {
        name: "images(6)",
        img: "images(6).png"
    },
    {
        name: "images(1)",
        img: "images(1).jpg"
    },
    {
        name: "images(2)",
        img: "images(2).jpg"
    },
    {
        name: "images(3)",
        img: "images(3).jpg"
    },
    {
        name: "images(4)",
        img: "images(4).jpg"
    },
    {
        name: "images(5)",
        img: "images(5).jpg"
    },
    {
        name: "images(6)",
        img: "images(6).png"
    }
];

cardImg.sort(() => 0.5 - Math.random());
console.log(cardImg);



const gridDisplay = document.querySelector("#grid");

let chosenImg = [];
let chosenImgId = [];
const cardWon = [];

function createGame() {

    for (let i = 0; i < cardImg.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "foods1.png");
        card.setAttribute("data-id", i);
        card.setAttribute("class", "squares");
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card);

    }
}

createGame()


function flipCard() {

    const cardId = this.getAttribute("data-id");
    chosenImg.push(cardImg[cardId].name);
    chosenImgId.push(cardId);
    console.log("clicked", cardId);
    console.log(chosenImg);
    this.setAttribute("src", cardImg[cardId].img);
    checkMatch()

}

function checkMatch() {
    const cards = document.querySelectorAll("img");

    if (chosenImg.length == 2 && chosenImg[0] == chosenImg[1]) {
        alert("Found a match");
        cards[chosenImgId[0]].setAttribute("src", "blank.png");
        cards[chosenImgId[1]].setAttribute("src", "blank.png");
        cards[chosenImgId[0]].removeEventListener("click", flipCard);
        cards[chosenImgId[1]].removeEventListener("click", flipCard);

        cardWon.push(chosenImgId);
        console.log(cardWon);
        chosenImg = [];
        chosenImgId = [];

    }

    if (chosenImg.length == 2 && chosenImg[0] != chosenImg[1]) {
        alert("Try Again !!!");
        cards[chosenImgId[0]].setAttribute("src", "foods1.png");
        cards[chosenImgId[1]].setAttribute("src", "foods1.png");
        chosenImg = [];
        chosenImgId = [];
    }

    if (cardWon.length == 6) {
        alert("You Clared All");
    }

}

