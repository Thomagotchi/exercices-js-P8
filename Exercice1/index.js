function pairNumbers(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    // L'operateur % est un operateur de modulo qui permet de calculer le reste de la division entre deux nombres
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result.join(",");
}

export default pairNumbers;
