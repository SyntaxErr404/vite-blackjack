import _ from "underscore";
import {
  crearDeck,
  valueCard,
  giveCard,
  computer,
  crearCarta,
} from "./usecases/index";

let deck = [];
const tipos = ["H", "D", "S", "C"],
  specials = ["A", "J", "Q", "K"];

let playerPoints = 0,
  computerPoints = 0;

let newGame = document.querySelector("#new__game");
let pedir = document.querySelector("#pedir__carta");
let detener = document.querySelector("#detener");
let score = document.querySelectorAll("span");
let img = document.querySelector("#cards");
let img__computer = document.querySelector("#cards__computer");
// let imgCartas = document.querySelector("img");

deck = crearDeck(tipos, specials);

//nueva carta
const createCardImg = (card) => {
  img.append(crearCarta(card));
};
//borrar todo
const start = () => {
  deck = [];
  deck = crearDeck(tipos, specials);
  playerPoints = 0;
  computerPoints = 0;
  score[0].innerText = playerPoints;
  score[1].innerText = playerPoints;
  pedir.disabled = false;
  detener.disabled = false;
  img.innerHTML = "";
  img__computer.innerHTML = "";
};

// nuevo juego
newGame.addEventListener("click", () => {
  start();
});

// pedir carta
pedir.addEventListener("click", () => {
  let card = giveCard(deck);
  playerPoints += valueCard(card);
  score[0].innerText = playerPoints;
  createCardImg(card);

  if (playerPoints > 21) {
    pedir.disabled = true;
    detener.disabled = true;
    computer(playerPoints, computerPoints, score, img__computer, deck);
  } else if (playerPoints === 21) {
    pedir.disabled = true;
    detener.disabled = true;
    computer(playerPoints, computerPoints, score, img__computer, deck);
  }
});

//detenerme
detener.addEventListener("click", () => {
  pedir.disabled = true;
  detener.disabled = true;
  computer(playerPoints, computerPoints, score, img__computer, deck);
});
