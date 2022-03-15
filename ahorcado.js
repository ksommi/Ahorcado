"use strict";

/* Pantallas */
var homeScreen = document.querySelector("#pantalla-principal");
var gameScreen = document.querySelector("#pantalla-juego");

/* Botones */
var startGameBtn = document.querySelector("#iniciar-juego");
var showFormBtn = document.querySelector("#agregar-palabra");
var backBtn = document.querySelector("#volver");
var addWordBtn = document.querySelector("#enviar-palabra");

/* Demas */
var wordForm = document.querySelector("#form-palabra");
var wordInput = document.querySelector("#input-palabra");
var wordGame = document.querySelector("#palabra-juego");

/* Eventos */
showFormBtn.addEventListener("click", showInput);
startGameBtn.addEventListener("click", goGame);
backBtn.addEventListener("click", goHome);
addWordBtn.addEventListener("click", sendWord);

/* Juego */
var wordsSaved = ["4444", "55555", "666666", "1", "22", "333", "7777777"];
var wordsCount = wordsSaved.length - 1;

/* Variables */
var wordArray = [];
var stringWord = "";

/* Funciones */

function generateRandom() {
  var random = Math.round(Math.random() * (wordsCount - 0)) + 0;
  return random;
}

function generateWord() {
  var wordToPlay = wordsSaved[generateRandom()];
  wordArray = Array.from(wordToPlay);
  return wordArray;
}

function showWord() {
  wordGame.textContent = stringWord;
}

function showInput() {
  wordForm.style.display = "flex";
}

function goGame() {
  gameScreen.style.display = "block";
  homeScreen.style.display = "none";
  generateWord();
  hideWord(wordArray);
  showWord();
}

function goHome() {
  gameScreen.style.display = "none";
  homeScreen.style.display = "block";
}

function sendWord() {
  var palabra = wordInput.value;
  wordsSaved.push(palabra);
  wordForm.style.display = "none";
}

function hideWord(array) {
  var arrayUnderscore = [];
  for (var i = 0; i < array.length; i++) {
    arrayUnderscore.push("_");
  }
  stringWord = arrayUnderscore.join("");
  return stringWord;
}
