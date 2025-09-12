function convertToBinary() {
  // Récupère la valeur
  const decimalInput = document.getElementById("decimalInput").value;

  // Récupère l'élément HTML où sera affiché le résultat binaire
  const binaryResult = document.getElementById("binaryResult");

  // Si le champ est vide ou la valeur n'est pas un nombre valide efface le contenu de l'élément de résultat
  if (decimalInput === "" || isNaN(decimalInput)) {
    binaryResult.textContent = "";
    return;
  }

  // Conversion du nombre décimal en chaîne binaire
  // https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
  const decimalNumber = parseInt(decimalInput, 10);
  binaryResult.textContent = decimalNumber.toString(2);
}
