let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;

let level = 0;

// start game
$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

// user clicked button
$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

// for checking user answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

// For sequence of game
function nextSequence(){

    userClickedPattern= [];

    level++;
    $("#level-title").text("Level "+ level);

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

// For Sound
function playSound(name){
    new Audio("sounds/" + name + ".mp3").play();
}

// For animation
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){$("#"+ currentColor).removeClass("pressed")},100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}