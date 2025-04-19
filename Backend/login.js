document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (email === "admin@email.com" && password === "123456") {
    errorMessage.textContent = "";
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "E-mail ou senha inválidos!";
  }
});