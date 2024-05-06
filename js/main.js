const Boton = document.querySelector(".boton")
const navMenu = document.querySelector(".nav-menu")

Boton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
})



// Insertar el header en todas las páginas
document.body.insertAdjacentHTML('afterbegin', headerContent);

// Insertar el footer en todas las páginas
document.body.insertAdjacentHTML('beforeend', footerContent);


// Resto del código
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const dniInput = document.getElementById('dni');
const telefonoInput = document.getElementById('telefono');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');

// Función para validar campos de texto
function validarCampo(input, regex, mensaje) {
    input.addEventListener('input', function(event) {
        if (!regex.test(input.value)) {
            input.setCustomValidity(mensaje);
        } else {
            input.setCustomValidity('');
        }
    });

    // Limpiar el mensaje de error cuando se corrija el valor del campo
    input.addEventListener('change', function(event) {
        if (regex.test(input.value)) {
            input.setCustomValidity('');
        }
    });
}

// Validación de nombre
validarCampo(nombreInput, /^[A-Za-z ]+$/, 'Ingrese un nombre válido');

// Validación de apellido
validarCampo(apellidoInput, /^[A-Za-z ]+$/, 'Ingrese un apellido válido');

// Validación de Teléfono
validarCampo(telefonoInput, /^\d{10,11}$/, 'Ingrese un teléfono válido (10 o 11 números)');

// Validación de contraseña
validarCampo(passwordInput, /(?=.*\d{3})(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'La contraseña debe tener mínimo 8 caracteres, incluyendo mínimo una letra mayúscula, una minúscula y tres números');

// Validación de repetir contraseña
repeatPasswordInput.addEventListener('input', function(event) {
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;
    if (repeatPassword !== password) {
        repeatPasswordInput.setCustomValidity('Las contraseñas deben coincidir');
    } else {
        repeatPasswordInput.setCustomValidity('');
    }
});
});