const message = document.getElementById("message");
message.style.display = "none";

document.getElementById("myButton").addEventListener("click", function () {
  message.style.display = "block";
});
