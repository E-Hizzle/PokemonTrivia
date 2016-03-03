var entryMusic    = new Audio("assets/music/entryMusic.mp3")
var questionMusic = new Audio("assets/music/question2.wav")
var winner = new Audio("assets/music/winner.mp3")
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

  {
    question: "Where is Ash from?",
    answers: ["Pewter City","Pallet Town","Cerulean City","Viridian Forest"],
    correct: 2
  },

  {
    question: "Who is the leader of the gym in Pewter City?",
    answers: ["Misty","Lance","Morty","Brock"],
    correct: 4
  },

  {
    question: "Who is the gym leader at Cerulean City?",
    answers: ["Ash","Misty","Nurse Joy","Lance"],
    correct: 2
  },

  {
    question: "If you enter any Pokémon Center, who will you be greeted by?",
    answers: ["Nurse Joy","Nurse Jenny","Nurse Crystal","Nurse Kevorkian"],
    correct: 1
  },

  {
    question: "Uh oh! You committed a Pokécrime, who's taking your Pokébutt to Pokéjail?",
    answers: ["Officer Brock","Officer Jenny","Officer Lance","Paul Blart"],
    correct: 2
  },

  {
    question: "Who is the Elite 4 member that specializes in dragon-Type Pokémon?",
    answers: ["Lorelei","Bruno","Agatha","Lance"],
    correct: 4
  },

  {
    question: "Who is the Elite 4 member that specializes in fighting-type Pokémon?",
    answers: ["Lorelei","Bruno","Agatha","Lance"],
    correct: 2
  },

  {
    question: "Who is the Elite 4 member that specializes in ghost-type Pokémon?",
    answers: ["Lorelei","Bruno","Agatha","Lance"],
    correct: 3
  },

  {
    question: "Who is the Elite 4 member that specializesin ice-type Pokémon?",
    answers: ["Lorelei","Bruno","Agatha","Lance"],
    correct: 1
  }

];

$(document).ready(function(){
  entryMusic.play();
  $("#gamePanel").hide();

  $("#startButton").on("click", function(){
    entryMusic.pause();
    questionMusic.play();
    questionMusic.loop= true;
    time = 20;
    timer();
    promptQuestions();
    $(".topPanel").hide();
    $("#gamePanel").show();
    $(".dancingTrio").hide();

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
          document.querySelector("#results").innerHTML = "You are correct!";
          wins++
          document.querySelector("#wins").innerHTML = "Wins: " + wins;
          promptQuestions();
          time = 31;
        }
        else{
          document.querySelector("#results").innerHTML = "You are incorrect!";
          losses++
          document.querySelector("#losses").innerHTML = "Losses: " + losses;
          promptQuestions();
          time = 21;
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
        time = 21;
        losses++;
        alert("Time's up!")
        timer();
        promptQuestions();
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
      }; 
    };
  }; //end of timer

});





















