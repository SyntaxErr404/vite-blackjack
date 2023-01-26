/**
 *
 * @param {String} card
 * @returns retorna el url de la carta
 */
export const crearCarta = (card) => {
  if (!card) {
    throw new Error("el parametro card  es obligatorio");
  }
  let createCardImg = document.createElement("img");
  createCardImg.src = `./assets/cartas/${card}.png`;
  createCardImg.classList.add("img");
  return createCardImg;
};
