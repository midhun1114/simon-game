var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
        {
            console.log('s');
            console.log(gamePattern[currentLevel]);
          
        
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
              }, 1000);
      
            }
        }
        else{
            console.log('w');
            playSound('wrong');
            $('body').addClass('game-over');
       
        setTimeout(function () {$('body').removeClass('game-over');},100);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        started=false;
        level=0;
        gamePattern = [];

        
        

        }
    
        
   
}

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });







function animatePress(colorname)
{     
        $('#'+colorname).addClass('pressed');
        console.log(document.getElementById(colorname).classList,colorname);
        setTimeout(function () {$('#'+colorname).removeClass('pressed');},100);

        
    

    
}







$('.btn').click(function(){
    var userChosenColour=$(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    


});





function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();


}




function nextSequence()

 {  userClickedPattern = [];
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
    $("#level-title").text("Level "+level);
    level++;


}

