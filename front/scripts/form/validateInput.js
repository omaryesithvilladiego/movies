
function validateInputs(form) {
  // Añadir la clase para activar los estilos de Bootstrap
  form.classList.add('was-validated');

  // Verificar si el formulario es válido
  if (!form.checkValidity()) {
      alert('No cumple con las validaciones');
      return false;
  }

  // Si es válido, retornar true
  return true;
}

module.exports = validateInputs


