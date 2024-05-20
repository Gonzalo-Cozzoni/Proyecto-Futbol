const Boton = document.querySelector(".boton");
const navMenu = document.querySelector(".nav-menu");

Boton.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

function redireccionarAIndex() {
  // Obtener todos los campos del formulario
  const camposFormulario = document.querySelectorAll(
    ".input-padron, #birthday-day, #birthday-month, #birthday-year"
  );

  // Verificar si algún campo está vacío
  let formularioCompleto = true;
  camposFormulario.forEach((campo) => {
    if (!campo.value) {
      formularioCompleto = false;
      return;
    }
  });

  // Si el formulario está completo, redirigir a index.html
  if (formularioCompleto) {
    window.location.href = "index.html";
  } else {
    alert("Por favor, complete todos los campos antes de continuar.");
  }
}

function loguearse(){
  
  let usuario = document.getElementById("correoelectronico").value;
  let contraseña = document.getElementById("password").value;
    if (usuario == "grupo2@gmail.com" && contraseña == "Grupo222"){
        window.location = "PROYECTO-FUTBOL-MAIN/index.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }


}