function calculateAverage(numbers) {
  // Si il n'y a pas de nombres ou que le tableau est vide, on retourne un message d'erreur
  if (!numbers || numbers.length === 0) {
    return "No numbers to calculate average";
  } else {
    // La fonction reduce permet de calculer la somme des nombres du tableau
    return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
  }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
