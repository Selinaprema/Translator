// Translator map with English words as keys and their translations as values
const translator = new Map([
  ["hello", "hola"],
  ["goodbye", "adiós"],
  ["please", "por favor"],
  ["thank you", "gracias"],
  ["sorry", "lo siento"],
  ["yes", "sí"],
  ["no", "no"],
  ["friend", "amigo"],
  ["water", "agua"],
  ["food", "comida"],
]);

// Function to handle user input and display the translation
function translateWord() {
  // Get the user input from the HTML input field
  const inputWord = document.getElementById("inputWord").value.toLowerCase();

  // Get the output element where the result will be displayed
  const output = document.getElementById("output");

  // Check if the word exists in the translator map
  if (translator.has(inputWord)) {
    // Display the corresponding translation
    output.innerText = `The translation for "${inputWord}" is "${translator.get(
      inputWord
    )}".`;
  } else {
    // Display an error message if the word is not found
    output.innerText = `Sorry, "${inputWord}" is not in the translator.`;
  }
}
