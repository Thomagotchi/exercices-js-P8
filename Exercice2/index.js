function calculate(a, b, operator) {
  a = Number(a);
  b = Number(b);

  // L'operateur === est un operateur de comparaison qui permet de comparer deux valeurs
  // Je ne sais pas si c'est possible d'injecter directement l'operateur dans la fonction
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
      return "Division by zero is not allowed";
    } else {
      return a / b;
    }
  } else {
    return "Invalid operator";
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
