/**
 *
 * @param {String} card
 * @returns {Number}
 */
export const valueCard = (card) => {
  const valor = card.substring(0, card.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
