var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;

function nextSequence() {
  level = level + 1;
  userClickedPattern = [] ;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(document).keypress(function() {
  if (start === false) {
    start = true;
    nextSequence();
  }
})

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
})

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // Check if the LAST button clicked is right
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    // set a variable to count how many colors the user got right
    var count = 0;
    // loop through the two arrays, and compare if EACH ONE of the values is the same as the other
    for (var i = 0; i < gamePattern.length; i++) {
      if (gamePattern[i] === userClickedPattern[i]) {
        // if the two values matche, count + 1
        count++;
      }
    }
    // ONLY if the count is the same number as gamePattern length,
    // (meaning each one of the colors was right) then it's success
    if (count === gamePattern.length) {
      console.log("success");
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    // otherwise, it's wrong and trigger Game Over
  } else {
    console.log("wrong");
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over");
    $("h2").text("(Press Any Key to Restart)")
    startOver();
  }
}

// Reset every variable -------------

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
}
