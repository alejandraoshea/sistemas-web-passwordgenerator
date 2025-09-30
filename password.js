// Diccionario (puedes ampliarlo con más palabras)
const diccionario = [
  "gato", "perro", "luz", "sol", "luna", "mar", "cielo", "rojo",
  "verde", "azul", "casa", "libro", "teclado", "ratón", "juego"
];

function palabraAleatoria() {
  const indice = Math.floor(Math.random() * diccionario.length);
  return diccionario[indice];
}

function generarContrasena() {
  // Número de palabras que quieres en la contraseña
  const numeroPalabras = 4;
  let contrasena = "";

  for (let i = 0; i < numeroPalabras; i++) {
    contrasena += palabraAleatoria();
    if (i < numeroPalabras - 1) contrasena += "-"; // separador opcional
  }

  // Mostrar la contraseña en la página
  document.getElementById("password").innerText = contrasena;
}
