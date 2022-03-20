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
var keyTitle = document.querySelector("#letras-tecleadas");
var mobileKey = document.querySelectorAll(".key");

/* Eventos */
showFormBtn.addEventListener("click", showInput);
startGameBtn.addEventListener("click", goGame);
backBtn.addEventListener("click", goHome);
addWordBtn.addEventListener("click", sendWord);
mobileKey.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("red");
    keyPressed.push(key.textContent);
  });
});

/* Juego */
var wordsSaved = [
  "psicologia",
  "testimonio",
  "diccionario",
  "exploraciones",
  "papeles",
  "tres",
  "factura",
  "filosofia",
  "programacion",
  "pensamiento",
  "barriada",
  "camino",
  "extraterrestres",
  "ahorcado",
  "javascript",
  "impresionante",
  "logica",
  "introduccion",
];
var wordsCount = wordsSaved.length - 1;

/* Declaraciones */
var stringWord = "";
var keyPressed = [];
var tecla = "";
var wordToPlay = "";
var counter = 0;

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
  word = word.toUpperCase();
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
  if (!validateWord(palabra)) {
    alert(
      "Ingrese solo una palabra. Sin tildes, espacios, o caracteres especiales."
    );
  } else {
    palabra = palabra.toLowerCase();
    wordsSaved.push(palabra);
    wordForm.style.display = "none";
    wordInput.value = "";
  }
}

function hideWord(word) {
  for (var i = 0; i < word.length; i++) {
    stringWord = stringWord.concat("_");
  }
  return stringWord;
}

function validateKey(param) {
  var valids = /[a-zA-ZñÑ]/.test(param);
  return valids;
}

function validateWord(param) {
  if (/[^A-Za-zñÑ]/.test(param)) {
    return false;
  }
  return true;
}

function compareKey(keyT) {
  if (wordToPlay.indexOf(keyT) >= 0) {
    for (var i = 0; i < wordToPlay.length; i++) {
      if (wordToPlay[i] === keyT) {
        if (wordToPlay[i] != stringWord[i]) {
          stringWord =
            stringWord.substring(0, i) + keyT + stringWord.substring(i + 1);
          showWord(stringWord);
        } else {
          console.log("Esta tecla ya esta en la palabra");
        }
      }
    }
  } else {
    if (validateKey(keyT) === true) {
      if (keyPressed.includes(keyT)) {
        console.log("Esta tecla ya se apretó");
      } else {
        drawings[counter]();
        counter = counter + 1;
        keyPressed.push(keyT);
        var keyString = keyPressed.join(" ");
        keyString = keyString.toUpperCase();
        keyGame.textContent = keyString;
      }
    } else {
      console.log("ingrese un caracter valido");
    }
  }
  updateGameStatus();
}

function listenKey(e) {
  if (counter <= 8) {
    window.addEventListener("keypress", (e) => {
      tecla = e.key;
      tecla = tecla.toLowerCase();
      compareKey(tecla);
    });
  } else {
    e.preventDefault();
  }
}

function updateGameStatus() {
  if (counter === 9) {
    keyGame.textContent = "Perdiste!";
    keyTitle.textContent = "";
    window.removeEventListener("keypress", (e) => {
      e.preventDefault();
    });
  }
  if (stringWord.indexOf("_") === -1) {
    keyGame.textContent = "Ganaste!";
    keyTitle.textContent = "";
  }
}
