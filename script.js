document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let usuario = document.getElementById("username").value.trim();
    let contraseña = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (usuario === "" || contraseña === "") {
        errorMessage.textContent = "⚠️ Todos los campos son obligatorios";
        return;
    }

    if (contraseña.length < 6) {
        errorMessage.textContent = "⚠️ La contraseña debe tener al menos 6 caracteres";
        return;
    }


    errorMessage.style.color = "green";
    errorMessage.textContent = "✅ Inicio de sesión exitoso";

 
    setTimeout(() => {
        alert("Bienvenido, " + usuario);
        window.location.href = "dashboard.html"; 
    }, 1500);
});

