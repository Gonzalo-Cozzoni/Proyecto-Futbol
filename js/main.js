const Boton = document.querySelector(".boton")
const navMenu = document.querySelector(".nav-menu")

Boton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
})