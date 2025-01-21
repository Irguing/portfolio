// Obtener los elementos del formulario
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const mensajeInput = document.getElementById('mensaje');
const submitButton = document.getElementById('submitButton');

// Función para validar los campos
function validarFormulario() {
    const nombreValido = nombreInput.value.trim().length > 0;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoInput.value);
    const telefonoValido = /^[0-9]{10}$/.test(telefonoInput.value);
    const mensajeValido = mensajeInput.value.trim().length > 0;

    // Habilitar o deshabilitar el botón según la validación
    submitButton.disabled = !(nombreValido && correoValido && telefonoValido && mensajeValido);
}

// Agregar eventos de escucha para validar los campos en tiempo real
nombreInput.addEventListener('input', validarFormulario);
correoInput.addEventListener('input', validarFormulario);
telefonoInput.addEventListener('input', validarFormulario);
mensajeInput.addEventListener('input', validarFormulario);