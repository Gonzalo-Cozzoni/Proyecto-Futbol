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


let formulario = document.querySelector(".form")

console.log(formulario);

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();

  if(!loguearse()){
    alert("Ingresa bien los datos");
    e.preventDefault();
  }else
  formulario.submit();
  

})


function loguearse(){
  
  let usuario = document.getElementById("correoelectronico");
  let contraseña = document.getElementById("password");
    if (usuario.value === "grupo2@gmail.com" && contraseña.value === "Grupo222"){
        return true;
    }
    else{
        alert("Usuario o contraseña incorrectos");
      return false;
        
    }


}
