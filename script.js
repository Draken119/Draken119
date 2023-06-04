document.getElementById("accountForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var usernameInput = document.getElementById("username");
  var username = usernameInput.value.trim();

  var container = document.createElement("div");
  container.className = "container loading";
  container.innerHTML = "<p>Processing...</p>";
  document.body.innerHTML = "";
  document.body.appendChild(container);

  setTimeout(function() {
    var password = generateRandomPassword(8);
    var twoSteps = generateRandomNumbers(6);
    var pin = generateRandomNumbers(6);
    var gmail = generateRandomGmail();

    // Simulando uma condição onde o gmail é falso em algumas vezes
    if (Math.random() < 0.5) {
      gmail = false;
      twoSteps = false;
      pin = false;
    }

    // Simulando uma condição onde ocorre um erro
    if (Math.random() < 0.2) {
      displayErrorMessage("Error number 1104 *TRY AGAIN*");
    } else {
      displayAccountInfo(username, password, twoSteps, pin, gmail);
    }
  }, 5000);
});

function generateRandomPassword(length) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

function generateRandomNumbers(length) {
  var numbers = "";
  for (var i = 0; i < length; i++) {
    numbers += Math.floor(Math.random() * 10);
  }
  return numbers;
}

function generateRandomGmail() {
  var username = generateRandomPassword(8);
  var domain = "gmail.com";
  return username + "@" + domain;
}

function displayErrorMessage(message) {
  var container = document.querySelector(".container.loading");
  container.innerHTML = "<p class='error'>" + message + "</p>";
}

function displayAccountInfo(username, password, twoSteps, pin, gmail) {
  var container = document.querySelector(".container.loading");
  container.innerHTML = "<p>Username: " + username + "</p>" +
    "<p>Password: " + password + "</p>" +
    "<p>Two-Steps: " + (twoSteps || "False") + "</p>" +
    "<p>Pin: " + (pin || "False") + "</p>" +
    "<p>Gmail: " + (gmail || "False") + "</p>" +
    "<p>Home:</p>" +
    "<button class='btn' onclick='restart()'>Reiniciar</button>";
}

function restart() {
  window.location.reload();
}
