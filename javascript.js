var playing = false;
var score; 
var action
var timeremaining
var  correctAnswer
document.getElementById("startreset").onclick = function()
{
    if(playing == true)
      {
        location.reload();
      }
    else
    {   
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML= timeremaining;
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}

for(i=1; 1<5; i++)
{
    document.getElementById("box"+i).onclick = function()
    {
      if(playing == true)
      {
        if(this.innerHTML == correctAnswer)
        {
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();
        }
        else{
            show("wrong");
            hide("correct");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
      }
    }
}


function startCountdown()
{
    action = setInterval(function(){
       timeremaining -= 1;
       document.getElementById("timeremainingvalue").innerHTML= timeremaining;
       if(timeremaining == 0)
       {
        stopCountdown();
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is " + score + ".</p>";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("startreset").innerHTML = "Start Game";
       }
    },1000)
}

function stopCountdown()
    {
        clearInterval(action);
    }
function hide(id)
    {
        document.getElementById(id).style.display = "none";
    }
function show(id)
    {
        document.getElementById(id).style.display = "block";
    }
function generateQA()
    {
         var x = 1 + Math.round(9*Math.random());
         var y = 1 + Math.round(9*Math.random());
         correctAnswer = x*y;
         document.getElementById("question").innerHTML = x + "x" + y;
         var correctPosition = 1 + Math.round(3*Math.random());
         document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
         var answers = [correctAnswer]
         for(i=1; i<5; i++)
         {
           if(i != correctPosition)
           {
            var wrongAnswer;
            do
            {
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
            }
            while(answers.indexOf(wrongAnswer)>-1)
            {
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
           }
         }
    }
}
