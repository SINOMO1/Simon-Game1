var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function() {
    if(!started) {
       $("#level-title").text("Level " + level);
       nextSequence();
       started = true;

    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      console.log("Success");

      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence();
          }, 1000);
      } 

    } else {
      console.log("Wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("#level-title").text("Game Over, Press Any Key to Restart")
      startOver();
    }
  }
  
function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}

function nextSequence() {

   userClickedPattern = [];
     
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    

}




$(".btn").click(function() {
     var useChosenColor = this.getAttribute("id");
     userClickedPattern.push(useChosenColor);
     playSound(useChosenColor);
     animatePress(useChosenColor);
     checkAnswer(userClickedPattern.length - 1);
});


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
    

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  







