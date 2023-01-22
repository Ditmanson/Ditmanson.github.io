
const oldMessage  = document.querySelector("#message");
const fullCard = document.querySelector(".container");
const cardContent = fullCard.innerHTML;
const image = document.querySelector(".card img");
const card = document.querySelector(".card");

var msg = "Everest!";
var  today = new Date();
msg += " ";
msg += today.toTimeString();

function updateMessage(element){
    element.innerText = msg;
}

function changeBackgroundStyle(element){
    element.style.background = "var(--teal-3)";
    element.style.borderRadius = "var(--radius-4)";  
}


function addCard() {
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = cardContent;
    fullCard.appendChild(newCard);
    changePhoto(newCard);
}

function changePhoto(element){
    var img = element.getElementsByTagName("img")[0];
    img.src = "../imgs/Picture1.jpg";
    img.alt = "new photo";
}

addCard(fullCard, cardContent);
updateMessage(oldMessage);
changeBackgroundStyle(oldMessage);
//changePhoto(card);