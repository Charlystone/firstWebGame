// initialize attributs
var keys = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var currentIndex = 0;
var levelCounter = 0;


//  main


document.querySelector("#level-title").addEventListener("click", function() {
  if(gamePattern.length == 0){
    giveNextButton();
  document.querySelector("#level-title").innerText = "Level " + levelCounter
}
});

keys.forEach(key => document.querySelector("#" + key + "").addEventListener("click", function() {
  var windowEvent = window.event.srcElement.id;
  if (windowEvent == gamePattern[currentIndex]) {
    correctButtonPressed(windowEvent);
    if (currentIndex == gamePattern.length-1) {
      setTimeout(function() {
        giveNextButton();
      }, 1000);
      currentIndex = 0;
      levelCounter++;
      document.querySelector("#level-title").innerText = "Level " + levelCounter;
    } else {
      currentIndex++;
    }
  } else {
    wrongButtonPressed();
    gamePattern = []
    levelCounter = 0;
  }
}));










//------------------------------ functions-----------------------------------//


function correctButtonPressed(key) {
  makeSoud(key);
  buttonAnimationForCorrect(key);
}

function giveNextButton() {
  var randNum = calcRandNumber(4);
  makeSoud(keys[randNum]);
  buttonAnimationForCorrect(keys[randNum]);
  gamePattern.push(keys[randNum]);
}


function wrongButtonPressed() {
  makeSoud("");
  buttonAnimationForWrong();
  document.querySelector("#level-title").innerText = "Game Over, Press Any Key to Restart";

}

function buttonAnimationForCorrect(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function buttonAnimationForWrong() {
  document.querySelector("body").classList.add("game-over");
  setTimeout(function() {
    document.querySelector("body").classList.remove("game-over");
  }, 300);
}

function makeSoud(key) {
  switch (key) {
    case "green":
      new Audio("sounds/green.mp3").play();
      break;
    case "red":
      new Audio("sounds/red.mp3").play();
      break;
    case "yellow":
      new Audio("sounds/yellow.mp3").play();
      break;
    case "blue":
      new Audio("sounds/blue.mp3").play();
      break;
    default:
      new Audio("sounds/wrong.mp3").play();
      break
  }
}


// calculate random number

function calcRandNumber(maxNumber) {
  var randNum = Math.random();
  randNum = randNum * maxNumber;
  randNum = Math.floor(randNum);
  return randNum;
}
