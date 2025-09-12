// Variable globale pour stocker le calcul en cours
let currentInput = "";

// L'élément d'affichage de la calculatrice
const display = document.getElementById("display");

function appendToDisplay(value) {
  // Ici on ajoute la valeur au calcul en cours
  currentInput += value;

  // Mise à jour de l'affichage de la calculatrice
  document.getElementById("display").value = currentInput;

  // Console log pour le débuggage affiche la valeur ajoutée et le calcul en cours
  console.log("Appended:", value, "Current input:", currentInput);
}

function clearDisplay() {
  // Remise à zéro de la variable contenant le calcul en cours
  currentInput = "";

  // Effacement de l'affichage visuel de la calculatrice
  display.value = "";
}

// Fonction pour calculer le résultat de l'expression mathématique
function calculateResult() {
  // Console log pour le débuggage affiche le calcul en cours
  console.log("Calculating:", currentInput);

  // Regex pour valider que le calcul en cours ne contient que des chiffres et opérateurs autorisés
  // Autorise : 0-9, +, *, /, - (le tiret doit être échappé avec \)
  const validExpression = /^[0-9+*/\-]*$/;

  // Vérification de la validité du calcul en cours
  if (!validExpression.test(currentInput)) {
    // Si le calcul en cours contient des caractères non autorisés, on efface tout
    display.value = "";
    currentInput = "";
    return; // Sortie de la fonction
  }

  // Vérification spécifique pour éviter la division par zéro
  if (currentInput.includes("/0")) {
    // Affichage d'un message d'erreur
    display.value = "Division by zero is not allowed";
    currentInput = "";
    return; // Sortie de la fonction
  }

  // Tentative de calcul
  try {
    // Utilisation de eval() pour évaluer le calcul en cours
    const result = eval(currentInput);

    // Console log pour le débuggage affiche le résultat
    console.log("Result:", result);

    // Affichage du résultat dans la calculatrice
    display.value = result;

    // Mise à jour de currentInput avec le résultat pour permettre des calculs en chaîne
    currentInput = result.toString();
  } catch (error) {
    // En cas d'erreur lors du calcul (renvoie une erreur sur l'écran de la calculatrice)
    display.value = "Error";
    currentInput = "";
  }
}
