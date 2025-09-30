// Example dictionary (expand as needed)
const dictionary = [
  "casa","perro","gato","arbol","flor","cielo","sol","luna","estrella","mar",
  "rio","montana","libro","puerta","ventana","mesa","silla","nube","rojo",
  "verde","azul","blanco","negro","fuego","tierra","viento","agua","camino",
  "sueno","musica","coche","tren","avion","barco","pajaro","pez","ratón","teclado",
  "pantalla","reloj","pluma","papel","ciudad","pueblo","bosque","isla","jardin",
  "puente","castillo","templo","torre","computadora","telefono","internet","cable"
];

// Helper: pick a random word
function getRandomWord(options) {
  const { noRepeat, used } = options;
  let word;
  do {
    word = dictionary[Math.floor(Math.random() * dictionary.length)];
  } while (noRepeat && used.has(word));
  used.add(word);
  return word;
}

function generatePassword() {
  let wordCount = parseInt(document.getElementById("wordCount").value);
  const capitalize = document.getElementById("capitalize").checked;

  const used = new Set();
  let words = [];

  for (let i = 0; i < wordCount; i++) {
    let w = getRandomWord({ noRepeat:false, used });
    if (capitalize) {
      w = w.charAt(0).toUpperCase() + w.slice(1);
    }
    words.push(w);
  }

  let password = words.join("");
  if (password.length < 8) {
    alert("Generated password is less than 8 characters! Increase number of words.");
    return;
  } else if (password.length > 64) {
    password = password.slice(0, 64); // truncate to 64 characters
  }

  document.getElementById("password").innerText = password;
}
