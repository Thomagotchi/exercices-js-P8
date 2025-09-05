function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;
  const binaryResult = document.getElementById("binaryResult");

  if (decimalInput === "" || isNaN(decimalInput)) {
    binaryResult.textContent = "";
    return;
  }

  binaryResult.innerText = (decimalInput >>> 0).toString(2);
}
