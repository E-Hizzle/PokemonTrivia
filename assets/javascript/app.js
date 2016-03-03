var entryMusic    = new Audio("assets/music/entryMusic.mp3")
var questionMusic = new Audio("assets/music/question.wav")
var questionMusic2 = new Audio("assets/music/question2.wav")
var wins          = 0;
var losses        = 0;
var timer         = 0;
var questions = [

  {
    question: "What was Ash's first Pokémon?",
    answers: ["Bulbasaur","Charmander","Squirtle","Pikachu"],
    correct: 4
  },

  {
    question: "What stone is used to evolve Nidorino into Nidoking?",
    answers: ["Sun Stone","Moon Stone","Star Stone","Cobble Stone"],
    correct: 2
  },

  {
    question: "What is Ash's rival's name?",
    answers: ["Greg","Al","Mariah","Gary",],
    correct: 4
  },

  {
    question: "Besides being a fire type, what is Charizard's other type?",
    answers: ["Fighting","Dragon","Flying","He's only one type, bruh."],
    correct: 3
  },

  {
    question: "What level does Magikarp evolve into Gyarados?",
    answers: ["15","20","30","35"],
    correct: 2
  },

  {
    question: "Ghost Pokémon are immune to what type of attacks?",
    answers: ["Fighting","Water","Psychic","Flying"],
    correct: 1
  },

  {
    question: "Dratini is what type of Pokémon?",
    answers: ["Flying","Water","Dragon","Fire"],
    correct: 3
  },

];

$(document).ready(function(){
  entryMusic.play();
  $("#gamePanel").hide();

  $("#startButton").on("click", function(){
    entryMusic.pause();
    questionMusic.play();
    time = 30;
    questionMusic.onended = function(){
      timer();
      promptQuestions();
      $(".topPanel").hide();
      $("#gamePanel").show();
      $(".dancingTrio").hide();
      questionMusic2.play();
    }

  }); //End of click function

  function promptQuestions(){
    //I can't believe this part actually worked.
    var choiceArray = [];
    $("#choices").empty();
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    choiceArray=randomQuestion.answers
    answer = randomQuestion.correct
    document.querySelector("#question").innerHTML = randomQuestion.question;
    for (i=0; i<choiceArray.length; i++){
      $("#choices").append("<p><span id = q" + i + ">" + '<img id="placeholder" width="20" height="20" src="assets/images/pokeball.jpg" /> ' + choiceArray[i] + "</span></p>");
        $("#q" + i).click(function(){
        console.log(this);
        // console.log(randomQuestion.correct-1);
        if (this.id[1] == randomQuestion.correct-1){
          alert("Correct!");
          wins++
          document.querySelector("#wins").innerHTML = "Wins: " + wins;
          promptQuestions();
          time = 31;
        }
        else{
          alert("Incorrect!");
          losses++
          document.querySelector("#losses").innerHTML = "Losses: " + losses;
          promptQuestions();
          time = 31;
        };
    });
    };
  }; //end of promptQuestions

  function timer(){
    var timing = setInterval(timer, 1000);
    // var time = 30;
    function timer(){
      time--;
      document.querySelector("#timer").innerHTML = "Time remaining: " + time + " seconds.";
      if (time == 0){
        // alert("Time's up!");
        time = 31;
        losses++;
        alert("Time's up!")
        timer();
        promptQuestions();
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
      }; 
    };
  }; //end of timer
});





















