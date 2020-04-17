$(document).on("keydown", function(event) {
  start(event);
});
$(document).on("keydown", function(key) {
  refresh(key);
});
var gameProgress = [];
var userProgress = [];
var j = 1;

function start(event) {
  //stating of game
  if (event.key == "s") {
    $(".starting").text("level " + j);

    var store = Math.random() * 4 + 1;
    store = Math.floor(store);

    if (store == 1) {
      var audio = new Audio("sounds/red.mp3"); //audio
      audio.play();
    }
    if (store == 2) {
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
    }
    if (store == 3) {
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
    }
    if (store == 4) {
      var audio = new Audio("sounds/green.mp3");
      audio.play();
    }

    gameProgress.push(store); //pushing the random variable in the array

    $(".a-" + store).addClass("play"); //adding and removing class
    setTimeout(function() {
      $(".a-" + store).removeClass("play");
    }, 500);
  }
}

$("button").on("click", playerAnswer); //adding userclick and calling playAnswer to the button

function playerAnswer() {
  $(".a-" + this.innerHTML).addClass("play"); //adding and removing class
  setTimeout(() => {
    $(".a-" + this.innerHTML).removeClass("play");
  }, 500);

  userProgress.push(this.innerHTML); //pushing user entered keys in array

  if (this.innerHTML == 1) {
    var audio = new Audio("sounds/red.mp3"); //audio
    audio.play();
  }
  if (this.innerHTML == 2) {
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
  }
  if (this.innerHTML == 3) {
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
  }
  if (this.innerHTML == 4) {
    var audio = new Audio("sounds/green.mp3");
    audio.play();
  }

  if (userProgress.length == gameProgress.length)
    check(gameProgress, userProgress); //calling the check function
}

function check(gameProgress, userProgress) {
  gameProgress = gameProgress.toString();

  if (gameProgress == userProgress) {
    j += 1;
    console.log("level change");
    var audio = new Audio("sounds/sound18.mp3");
    setTimeout(() => {
      audio.play();
      $(".starting").text("level " + j);
    }, 700);
  } else {
    var audio = new Audio("sounds/wrong.mp3"); //audio
    audio.play();

    console.log("loose");
    $(".starting").text("YOU LOOSE");
    $("body").addClass("loose");

    setTimeout(() => {
      location.reload();
    }, 700);
  }
}
function refresh(key) {
  //refresh the user entred inputs
  if (key.key == "s") {
    while (userProgress.length) {
      userProgress.pop();
    }
  }
}
