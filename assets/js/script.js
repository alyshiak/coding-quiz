//declare question variables
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: {
            a: "A. strings", 
            b: "B. booleans", 
            c: "C. numbers", 
            d: "D. alerts",
        },
        answer: "d"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        options: {
            a: "A. quotes", 
            b: "B. curly brackets", 
            c: "C. parenthesis", 
            d: "D. square brackets",
        },
        answer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: {
            a: "A. numbers and strings", 
            b: "B. other arrays", 
            c: "C. booleans", 
            d: "D. all of the above",
        },
        answer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: {
            a: "A. quotes", 
            b: "B. curly brackets", 
            c: "C. parenthesis", 
            d: "D. commas",
        },
        answer: "a"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: {
            a: "A. JavaScript", 
            b: "B. terminal/bash", 
            c: "C. for loops", 
            d: "D. console.log",            
        },
        answer: "d"
    }
];
//declare variables
var headerEl = document.querySelector(".header");
var openingEl = document.querySelector(".opening");
var containerEl = document.querySelector(".container");
var divEl = document.querySelector(".div");
var resultEl = document.querySelector(".result");

var scoresEl = [];
var markEl = 0;
var indexEl = 0;
var recordEl = [];
var questionEl = 0;
var timeLeft = 90;
var n = 0;


//view high scores
var viewScore =document.createElement('p');
viewScore.classList.add('banner', 'high-scores');
viewScore.textContent = "View High Scores";
//timer
var viewTimer = document.createElement('p');
viewTimer.classList.add('banner', 'timer')
viewTimer.textContent = ('Time: ' + timeLeft)

headerEl.appendChild(viewScore);
headerEl.appendChild(viewTimer);

// when the user clicks the start button
// reach into the html, grab the start button
var startButton = document.querySelector('#start-button');
// console.log(startButton);
// console.dir(startButton);
startButton.addEventListener('click', function(){
    var removeAll = (containerEl);
    while(removeAll.hasChildNodes()) 
        removeAll.removeChild(removeAll.firstChild);
})

function removeLastQuestion(){
    var removeAll = (containerEl);
    while(removeAll.hasChildNodes()) 
        removeAll.removeChild(removeAll.firstChild);    
}
function showQuestion (){
    if (questionEl.length == questionEl) {
        highScore();
    }
       else {
    var h2El = document.createElement('h2');
    h2El.textContent = questions[questionEl].question;
    containerEl.appendChild(h2El)
}
}

function showOptions(){
    var optionsEl = document.createElement("p");
    for (var i=0; i<4; i++) {
        var button1 = document.createElement("button");
        var option;
        var answer = questions[questionEl].answer;
        if (i == 0) {
            // show option a
            option = questions[questionEl].options.a;
            button1.addEventListener('click', function(event){
                if ("a" == answer) {
                    // it is correct
                    var h3El = document.createElement('h3');
                    questionEl++
                    h3El.textContent = "Correct!"    
                    containerEl.appendChild(h3El);
                    removeLastQuestion();
                    // show the next question
                    showQuestion();
                    // // show the next options
                    showOptions();
                    // check if this is the last question, if it is, then we can stop the timer, and show the results
                    if (questionEl.length == questionEl) {
                       highScore();
                    }
                } else {
                    // it is incorrect
                    var h3El = document.createElement('h3');
                    timeLeft = (timeLeft - 5);
                    $("#time-left").text(timeLeft)
                    n++;
                    h3El.textContent = "Incorrect"    
                    containerEl.appendChild(h3El);
                }
            })
        }
        if (i == 1) {
            // show option b 
            option = questions[questionEl].options.b;
            button1.addEventListener('click', function(event){
                if ("b" == answer) {
                    // it is correct
                    var h3El = document.createElement('h3');
                    questionEl++
                    h3El.textContent = "Correct!"    
                    containerEl.appendChild(h3El);
                    removeLastQuestion();
                    // show the next question
                    showQuestion();
                    // // show the next options
                    showOptions();
                    // check if this is the last question, if it is, then we can stop the timer, and show the results
                    if (questionEl.length == questionEl) {
                       highScore();
                    }
                } else {
                    // it is incorrect
                    timeLeft = (timeLeft - 5);
                    $("#time-left").text(timeLeft)
                    n++;
                    var h3El = document.createElement('h3');
                    h3El.textContent = "Incorrect"    
                    containerEl.appendChild(h3El);
                }
            })
        }
        if (i == 2) {
            // show option c
            option = questions[questionEl].options.c;
            button1.addEventListener('click', function(event){
                if ("c" == answer) {
                    // it is correct
                    var h3El = document.createElement('h3');
                    questionEl++
                    h3El.textContent = "Correct!"    
                    containerEl.appendChild(h3El);
                    removeLastQuestion();
                    // show the next question
                    showQuestion();
                    // // show the next options
                    showOptions();
                    // check if this is the last question, if it is, then we can stop the timer, and show the results
                    if (questionEl.length == questionEl) {
                       highScore();
                    }
                } else {
                    // it is incorrect
                    var h3El = document.createElement('h3');
                    timeLeft = (timeLeft - 5);
                    $("#time-left").text(timeLeft)
                    n++;
                    h3El.textContent = "Incorrect"    
                    containerEl.appendChild(h3El);
                }
            })
        } 
        if (i == 3) {
            // show option d
            option = questions[questionEl].options.d;
            button1.addEventListener('click', function(event){
                if ("d" == answer) {
                    // it is correct
                    var h3El = document.createElement('h3');
                    questionEl++
                    h3El.textContent = "Correct!"    
                    containerEl.appendChild(h3El);
                    removeLastQuestion();
                    // show the next question
                    showQuestion();
                    //highScore()
                     // show the next options
                    showOptions();
                    // check if this is the last question, if it is, then we can stop the timer, and show the results
                    if (questionEl.length === questionEl) {
                       highScore();
                    }
                } else {
                    // it is incorrect
                    var h3El = document.createElement('h3');
                    h3El.textContent = "Incorrect" 
                    timeLeft = (timeLeft - 5);
                    $("#time-left").text(timeLeft)
                    n++;   
                    containerEl.appendChild(h3El);
                }
            })
        }
        button1.textContent = option;
        button1.classList.add('button')
        optionsEl.appendChild(button1);
    };
    containerEl.appendChild(optionsEl); 
};
// add an event listener
startButton.addEventListener('click', function () {
    showQuestion();
    showOptions();
    startTimer();
})


function highScore (){ 
    var h4El = document.createElement('h4');
    h4El.textContent = "Your Score is" + timeLeft
    var submitName = document.createElement('textbox')
    var submitBtn = document.querySelector('start-button');
    containerEl.appendChild(h4El)
    containerEl.appendChild(submitName)
    containerEl.appendChild(submitBtn)
}
function startTimer(){
    // reduce time by 1 second every second
    var countingDown = setInterval(function () {
        $("#time-left").text(timeLeft);
        timeLeft--;
        if (timeLeft <= 0) {
          $("#time-left").text("");
          clearInterval(countingDown);
        }
        else if (n === questions.length) {
          clearInterval(countingDown);
        };
      },  1000);
}


// this is when you save your initials and score
function highScore(event){
    var h4El = document.createElement('h4');
    h4El.textContent = "Your Score is " + timeLeft
    var submitName = document.createElement('input')
    submitName.textContent = "Enter Name";
    var submitBtn = document.createElement('button');
    submitBtn.classList.add('start-button')
    submitBtn.textContent = "Submit";
    containerEl.appendChild(h4El)
    containerEl.appendChild(submitName)
    containerEl.appendChild(submitBtn) 
    //function saveHighScore(){
            submitBtn.addEventListener('click', function(){
            var removeAll = (containerEl);
            while(removeAll.hasChildNodes()) 
                removeAll.removeChild(removeAll.firstChild); 
            showHighScores();
        })  
        }
  //}

viewScore.addEventListener ('click', function showHighScores(){
    removeLastQuestion();
 var h1El = document.createElement('h1');
 h1El.textContent = "High Scores"
 var olEl = document.createElement('ol')
 //olEl.textContent = saveHighScore
 var homeBtn = document.createElement('button')
 homeBtn.classList.add('start-button')
 homeBtn.textContent = "Back To Homepage"
 var highScores = timeLeft + 
 homeBtn.addEventListener('click', function(){
    location.reload();
    saveHighScores();
 })

 containerEl.appendChild(h1El)  
 containerEl.appendChild(olEl)
 containerEl.appendChild(homeBtn)
})

function saveHighScores() {
    var scoreInput = {
        submitName: submitName.value,
        score: timeLeft.value,
    }
    localStorage.setItem("highScores", JSON.stringify(highScores));
}