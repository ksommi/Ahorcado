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
var keyGame = document.querySelector(".letras-tecleadas");

/* Eventos */
showFormBtn.addEventListener("click", showInput);
startGameBtn.addEventListener("click", goGame);
backBtn.addEventListener("click", goHome);
addWordBtn.addEventListener("click", sendWord);

/* Juego */
var wordsSaved = ["tres", "cinco", "cuatro", "y", "se", "ser", "factura"];
var wordsCount = wordsSaved.length - 1;

/* Declaraciones */
var stringWord = "";
var keyPressed = [];
var tecla = "";
var wordToPlay = "";

/* Funciones */

function generateRandom() {
  var random = Math.round(Math.random() * (wordsCount - 0)) + 0;
  return random;
}

function generateWord() {
  wordToPlay = wordsSaved[generateRandom()];
  return wordToPlay;
}

function showWord(word) {
  wordGame.textContent = word;
}

function showInput() {
  wordForm.style.display = "flex";
}

function goGame() {
  gameScreen.style.display = "block";
  homeScreen.style.display = "none";
  generateWord();
  hideWord(wordToPlay);
  showWord(stringWord);
  listenKey();
}

function goHome() {
  gameScreen.style.display = "none";
  homeScreen.style.display = "block";
  location.reload();
}

function sendWord() {
  var palabra = wordInput.value;
  wordsSaved.push(palabra);
  wordForm.style.display = "none";
}

function hideWord(word) {
  for (var i = 0; i < word.length; i++) {
    stringWord = stringWord.concat("_");
  }
  return stringWord;
}

function validateKey() {
  var valids = /[a-zA-Z]/.test(tecla);
  return valids;
}

function listenKey(e) {
  window.addEventListener("keypress", (e) => {
    tecla = e.key;
    tecla = tecla.toLowerCase();
    if (wordToPlay.indexOf(tecla) >= 0) {
      for (var i = 0; i < wordToPlay.length; i++) {
        if (wordToPlay[i] === tecla) {
          stringWord = stringWord.replace(
            stringWord.substring(i, i + 1),
            tecla
          );
        }
        stringWord = stringWord.toUpperCase();
        showWord(stringWord);
      }
    } else {
      if (validateKey() === true) {
        if (keyPressed.includes(tecla) || stringWord.indexOf(tecla) >= 0) {
          console.log("Esta tecla ya se apretó");
        } else {
          keyPressed.push(tecla);
          var keyString = keyPressed.join(" ");
          keyString = keyString.toUpperCase();
          keyGame.textContent = keyString;
        }
      } else {
        console.log("ingrese un caracter valido");
      }
    }
    gameStatus();
  });
}

function gameStatus() {
  if (stringWord.indexOf("_") >= 0) {
    console.log("sigue el juego");
  } else {
    alert("ganaste");
  }
}
