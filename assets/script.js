//Set global variables
var rulesEl = document.querySelector(".rules")
var timeEl = document.querySelector(".time");
var startBtnEl = document.querySelector("#startBtn");
var startPageEl = document.querySelector(".startPage");
var questionEl = document.querySelectorAll(".question")
var questionOneContainerEl = document.querySelector("#questionOneContainer");
var questionTwoContainerEl = document.querySelector("#questionTwoContainer");
var questionThreeContainerEl = document.querySelector("#questionThreeContainer");
var questionFourContainerEl = document.querySelector("#questionFourContainer");
var wrongAnsOneEl = document.querySelectorAll(".wrongAnsOne");
var wrongAnsTwoEl = document.querySelectorAll(".wrongAnsTwo");
var wrongAnsThreeEl = document.querySelectorAll(".wrongAnsThree");
var wrongAnsFourEl = document.querySelectorAll(".wrongAnsFour");
var correctAnsOneEl = document.querySelector(".correctAnsOne");
var correctAnsTwoEl = document.querySelector(".correctAnsTwo");
var correctAnsThreeEl = document.querySelector(".correctAnsThree");
var correctAnsFourEl = document.querySelector(".correctAnsFour");
var scorePageEl = document.querySelector(".scorePage");
var scoreListEl = document.querySelector("#scoreList");
var startOverBtnEl = document.querySelector("#startOverBtn");
var secondsLeft = 35;
var score = 0;
var x = 0;
var userInitials = "";
var highScoreArray = [];

//Set initial timer and display on start page
timeEl.textContent = "Time: " + secondsLeft;

//Hide questions from appearing on start page
var hideQuestions = function() {
    for (var i = 0; i<questionEl.length; i++) {
        questionEl[i].classList.toggle("hide");
    }
}

//Hide high scores from appearing on start page
var hideScorePage = function() {
    scorePageEl.classList.toggle("hide");
};


//Button click on high score page hides the page and shows start page
var restart = function () {
    startOverBtnEl.addEventListener("click", function() {
        scorePageEl.classList.toggle("show");
        startPageEl.classList.toggle("hide");
    }); 
}

//Timer function and more. Will describe functionality in comments below 
var timer = function(){
    //Sets interval for timer
    var timerInterval = setInterval(function() {
        //Shows timer on DOM
        timeEl.textContent = "Time: " + secondsLeft;
        //Takes time in seconds off of the timer
        secondsLeft--;
        //Time runs out when the secondsLeft variable is equal to a value of -2. The timer on screen was delayed so this number was chosen to show the proper time of 0 when the timer runs out
        if(secondsLeft <= -2) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
            //Hides timer when time runs out
            timeEl.textContent = "";
            //Hides the current question being shown if the timer runs out and gives a prompt for user to input initials to track high scores
            questionEl[x].classList.toggle("show");
            userInitials = window.prompt("Game Finished!\nFinal Score: " + score + "\nPlease enter initials to store high score.");
            //If user does not input initials, user will be prompted once to re-enter, then alerted that they have one more chance to enter and prompted again, and if no input, nothing will be saved and the page will reload
            if (userInitials === "" || userInitials === null) {
                userInitials = window.prompt("No input\nFinal Score: " + score + "\nPlease enter initials to store high score.");
                if (userInitials === "" || userInitials === null) {
                    window.alert("One more chance! Please enter initials or score will not be saved");
                    userInitials = window.prompt("No input\nFinal Score: " + score + "\nPlease enter initials to store high score.");
                if (userInitials === "" || userInitials === null) {
                        location.reload();
                        return;
                    }
                }
            }    
            //Sets initials and score to variable
            highScoreVar = "Score: " + score + " - Initials: " + userInitials;
            // Add new score and initials to high score array, allowing it to be displayed later
            highScoreArray.push(highScoreVar);   
            // Store updated scores in localStorage, re-render the list
            storeScores();
            renderScores();
            //Show high scores
            scorePageEl.classList.toggle("show");
            //Reloads page so start page is shown
            startOverBtnEl.addEventListener('click', () => {
                location.reload();
            });
        }
    }, 1000);
}

//Sets up function that will be called to show the first question of the quiz
var qOne = function() {
    questionOneContainerEl.classList.toggle("show");
    //When one of the wrong answers is clicked, take off time from timer and show the next question
    for (var i = 0; i<wrongAnsOneEl.length; i++) {
        wrongAnsOneEl[i].addEventListener("click", function() {
            window.alert("Wrong!");
            secondsLeft = secondsLeft - 5;
            questionOneContainerEl.classList.toggle("show");
            questionTwoContainerEl.classList.toggle("show");
            //Keeps track of what question is showing in the event the timer runs out
            x++;
        });
    }
    //When correct answer is clicked, log score and show the next question
    correctAnsOneEl.addEventListener("click", function() {
        window.alert("Correct!");
        score++;
        questionOneContainerEl.classList.toggle("show");
        questionTwoContainerEl.classList.toggle("show");
        //Keeps track of what question is showing in the event the timer runs out
        x++;
    })
}

var qTwo = function() {
    //When one of the wrong answers is clicked, take off time from timer and show the next question
    for (var i = 0; i<wrongAnsTwoEl.length; i++) {
        wrongAnsTwoEl[i].addEventListener("click", function() {
            window.alert("Wrong!");
            secondsLeft = secondsLeft - 5;
            questionTwoContainerEl.classList.toggle("show");
            questionThreeContainerEl.classList.toggle("show");
            //Keeps track of what question is showing in the event the timer runs out
            x++;
        })
    }
    //When correct answer is clicked, log score and show the next question
    correctAnsTwoEl.addEventListener("click", function() {
        window.alert("Correct");
        score++;
        questionTwoContainerEl.classList.toggle("show");
        questionThreeContainerEl.classList.toggle("show");
        //Keeps track of what question is showing in the event the timer runs out
        x++;
    }) 
}

var qThree = function() {
    //When one of the wrong answers is clicked, take off time from timer and show the next question
    for (var i = 0; i<wrongAnsThreeEl.length; i++) {
        wrongAnsThreeEl[i].addEventListener("click", function() {
            window.alert("Wrong!");
            secondsLeft = secondsLeft - 5;
            questionThreeContainerEl.classList.toggle("show");
            questionFourContainerEl.classList.toggle("show");
            //Keeps track of what question is showing in the event the timer runs out
            x++;
        })
    }
    correctAnsThreeEl.addEventListener("click", function() {
        window.alert("Correct!");
        score++;
        questionThreeContainerEl.classList.toggle("show");
        questionFourContainerEl.classList.toggle("show");
        //Keeps track of what question is showing in the event the timer runs out
        x++;
    }) 
}

var qFour = function() {
    //When one of the wrong answers is clicked, set timer to a value less than -2 so the script from the timer function runs to log high score
    for (var i = 0; i<wrongAnsFourEl.length; i++) {
        wrongAnsFourEl[i].addEventListener("click", function() {
            timeEl.classList.toggle("hide");
            secondsLeft = -3;
            window.alert("Wrong!");
        })
    }
    //When the correct answer is clicked, log score and set timer to a value less than -2 so the script from the timer function runs to log the high score
    correctAnsFourEl.addEventListener("click", function() {
        timeEl.classList.toggle("hide")
        secondsLeft = -3;
        window.alert("Correct");
        score++;
        console.log(score);
    });
}

//Starts the quiz once the start button is clicked
var start = function() {
    startBtnEl.addEventListener("click", function() {
        timer();
        startPageEl.classList.toggle("hide");
        rulesEl.classList.toggle("hide");
        qOne();
        qTwo();
        qThree();
        qFour();
    });
}

// Render a new li for each high score
var renderScores = function () {
    for (var i = 0; i < highScoreArray.length; i++) {
        //Allows scores to be shown in order of highest score to lowest
        highScoreArray.sort().reverse();
        var highScore = highScoreArray[i];
        var listItem = document.createElement("li");
        listItem.textContent = highScore;
        listItem.setAttribute("data-index", i);
        scoreListEl.appendChild(listItem);
    }
}

//Function to update scores
var updateNameScoreStore = function () {
    var highScoreStore = JSON.parse(localStorage.getItem("highScore"));
    if(highScoreStore !== null){
        highScoreArray = highScoreStore; 
    }
}

//Function to store scores in local storage
var storeScores = function () {
    // Stringify and set key in localStorage to high score array
    localStorage.setItem("highScore", JSON.stringify(highScoreArray));
    };

hideQuestions();

hideScorePage();

updateNameScoreStore();

start();