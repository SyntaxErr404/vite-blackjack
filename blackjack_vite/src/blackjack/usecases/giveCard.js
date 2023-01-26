/**
 *
 * @param {Array<string>} deck
 * @returns {String}
 */

export const giveCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("no hay cartas en el deck");
  }
  const carta = deck.pop();
  return carta;
};
