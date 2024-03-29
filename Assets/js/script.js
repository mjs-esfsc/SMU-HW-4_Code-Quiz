//declare global variables
var startButton = document.querySelector(".start-button");
var testScore = 0;
var highScore = 0;
var timer;
var timerCount;
var subjectName ="";
var nameInput = document.querySelector("#userName");


function startTest() {
    console.log("started");
    testInProgress = true;
    // Prevents start button from being clicked when round is in progress
    localStorage.setItem
    if (testInProgress) {
      startButton.disabled = "true";
    }
    loadQuestions();

    startTimer();
  }

function init(){
        getHighScores();
    }

//TODO   getHighScores function
function getHighScores(){
     console.log("high scores loaded");
 }

// Calls init() so that it fires when page opened


function startTimer(){
    console.log("timer started");
  // Sets timer
   //TODO allow full 10 minutes
  timer = 10
 
  timerCount = setInterval(function () {
    if (timer > 0){
    timer--
    console.log(timer);
    console.log(timerCount);
    }
   if (timer === 0) {
      // Stops execution of action at set interval
      clearInterval(timerCount);
      endTest()
    }


  }, 1000);

 }
 //TODO  endTest function
 function endTest(){
     console.log("test ended");
     startButton.disabled = false;

 }

//TODO    loadQuestions function
function loadQuestions(){
    console.log("questions loaded");
}

// Calls init() so that it fires when page opened
init();
startButton.addEventListener("click", startTest);