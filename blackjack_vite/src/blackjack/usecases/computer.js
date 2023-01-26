import { valueCard, giveCard, crearCarta } from "./";
/**
 *
 * @param {Number} playerPoints
 * @param {Number} computerPoints
 * @param {HTMLElement} score
 * @param {HTMLElement} img__computer
 * @param {Array} deck
 */

//computadora
export const computer = (
  playerPoints,
  computerPoints,
  score,
  img__computer,
  deck
) => {
  do {
    let card = giveCard(deck);
    computerPoints += valueCard(card);
    score[1].innerText = computerPoints;
    img__computer.append(crearCarta(card));
    if (playerPoints > 21) {
      break;
    }
  } while (computerPoints < playerPoints && playerPoints <= 21);
  {
    if (computerPoints === playerPoints) {
      alert("han empatado");
    } else if (computerPoints > playerPoints) {
      if (computerPoints <= 21) {
        alert("perdistes");
      } else if (computerPoints > 21 && playerPoints <= 21) {
        alert("ganastes");
      } else {
        alert("ambos perdieron");
      }
    } else if (computerPoints < playerPoints) {
      if (playerPoints <= 21) {
        alert("ganastes");
      } else if (playerPoints > 21 && computerPoints <= 21) {
        alert("perdistes");
      } else {
        alert("ambos perdieron");
      }
    }
  }
};
