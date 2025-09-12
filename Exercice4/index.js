const message = document.getElementById("message");
message.style.display = "none";

// Ici j'ajoute juste un event listener pour le bouton pour display le message
document.getElementById("myButton").addEventListener("click", function () {
  message.style.display = "block";
});
