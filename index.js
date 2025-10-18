const usuario = document.getElementById("usuario").value;
const password = document.getElementById("password").value;
const errorMsg = document.getElementById("errorMsg");

 
 document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Evita que se recargue la página

      
      if (usuario === "admin" && password === "admin1234") {
        // Redirige a otra página
         window.location.href = "home.html";
      } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos";
      }
    });