//crea baraja
import _ from "underscore";

/**
 *
 * @param {array <string>} tiposCarta ejemplo : ['a','b','c']
 * @param {array <string>} specialsCarta ejemplo : ['a','b','c']
 * @returns {array <string>}
 */
export const crearDeck = (tiposCarta, specialsCarta) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error("tiposCarta es obligatorio como un arreglo de string");
  if (!specialsCarta || specialsCarta.length === 0)
    throw new Error("specialsCartaes obligatorio como un arreglo de string");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposCarta) {
    for (let spe of specialsCarta) {
      deck.push(spe + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
