// Selects element by class
var timeEl = document.querySelector(".time");
var startBtnEl = document.querySelector(".startBtn");
var startPageEl = document.querySelector(".startPage");
var questionEl = document.querySelectorAll(".question")
var questionOneContainerEl = document.querySelector("#questionOneContainer");
var questionTwoContainerEl = document.querySelector("#questionTwoContainer");
var questionThreeContainerEl = document.querySelector("#questionThreeContainer");
var questionFourContainerEl = document.querySelector("#questionFourContainer");
var wrongQOneEl = document.querySelectorAll(".wrongQOne");
var wrongQTwoEl = document.querySelectorAll(".wrongQTwo");
var wrongQThreeEl = document.querySelectorAll(".wrongQThree");
var wrongQFourEl = document.querySelectorAll(".wrongQFour");
var correctQOneEl = document.querySelector(".correctQOne");
var correctQTwoEl = document.querySelector(".correctQTwo");
var correctQThreeEl = document.querySelector(".correctQThree");
var correctQFourEl = document.querySelector(".correctQFour");
var scorePageEl = document.querySelector(".scorePage");
var scoreListEl = document.querySelector("#scoreList");
var startOverBtnEl = document.querySelector(".startOverBtn");
var secondsLeft = 30;
var score = 0;
var x = 0;  
// var score = localStorage.getItem("count");
var userName = ""
// var nameScoreStore = localStorage.getItem("nameScore");
var nameScoreArray = [];

timeEl.textContent = "Time: " + secondsLeft;

var hideQuestions = function() {
    for (var i = 0; i<questionEl.length; i++) {
        questionEl[i].classList.toggle("hide");
    }
}

var hideScorePage = function() {
    scorePageEl.classList.toggle("hide");
};

var restart = function () {
    startOverBtnEl.addEventListener("click", function() {
        scorePageEl.classList.toggle("show");
        startPageEl.classList.toggle("hide");
        // timeEl.classList.toggle("show")
        // timer();
        // qOne();
        // qTwo();
        // qThree();
        // qFour();
    }); 
}

 // Sets interval in variable
        
var timer = function(){
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        console.log(secondsLeft);
        if(secondsLeft <= -2) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.textContent = ""
            // hideQuestions();
            questionEl[x].classList.toggle("show");
            userName = window.prompt("Game Finished!\nFinal Score: " + score + "\nPlease enter name to store high score.");
            if (userName === "" || userName === null) {
                userName = window.prompt("No input\nFinal Score: " + score + "\nPlease enter name to store high score.");
                if (userName === "" || userName === null) {
                    window.alert("One more chance! Please enter initials or score will not be saved")
                    userName = window.prompt("No input\nFinal Score: " + score + "\nPlease enter name to store high score.");
                    if (userName === "" || userName === null) {
                            // nameScoreVar = "Score: " + score + " - Initials: AAA";
        
                            // // Add new todoText to todos array, clear the input
                            // nameScoreArray.push(nameScoreVar);
                            
                            // // Store updated todos in localStorage, re-render the list
                            // storeScores();
                            // renderScores();
                        location.reload();
                        return;
                    }
                }
            }        
            nameScoreVar = "Score: " + score + " - Initials: " + userName;
    
            // Add new todoText to todos array, clear the input
            nameScoreArray.push(nameScoreVar);
            
            // Store updated todos in localStorage, re-render the list
            storeScores();
            renderScores();
            scorePageEl.classList.toggle("show");
            startOverBtnEl.addEventListener('click', () => {
                location.reload();
            });     
                // if(nameScoreStore !== null){
                //     localStorage.setItem("nameScore", userName + ": " + score);
                // } else {
                //     localStorage.setItem("nameScore", userName + ": " + score + "\n" + nameScoreStore);
                    // }
        }
    }, 1000);
}

var qOne = function() {
    i++;
    questionOneContainerEl.classList.toggle("show");
    // timerOne();
    for (var i = 0; i<wrongQOneEl.length; i++) {
        wrongQOneEl[i].addEventListener("click", function() {
            window.alert("Wrong");
            secondsLeft = secondsLeft - 10;
            questionOneContainerEl.classList.toggle("show");
            questionTwoContainerEl.classList.toggle("show");
            x++;
        });
    }
    correctQOneEl.addEventListener("click", function() {
        window.alert("Correct");
        score++;
        console.log(score)
        questionOneContainerEl.classList.toggle("show");
        questionTwoContainerEl.classList.toggle("show");
        x++;
    })
}

var qTwo = function() {
    // timerTwo();
    i++;
    for (var i = 0; i<wrongQTwoEl.length; i++) {
        wrongQTwoEl[i].addEventListener("click", function() {
            window.alert("Wrong");
            secondsLeft = secondsLeft - 10;
            questionTwoContainerEl.classList.toggle("show");
            questionThreeContainerEl.classList.toggle("show");
            x++;
        })
    }
    correctQTwoEl.addEventListener("click", function() {
        window.alert("Correct");
        score++;
        console.log(score)
        questionTwoContainerEl.classList.toggle("show");
        questionThreeContainerEl.classList.toggle("show");
        x++;
    }) 
}

var qThree = function() {
    // timerThree();
    for (var i = 0; i<wrongQThreeEl.length; i++) {
        wrongQThreeEl[i].addEventListener("click", function() {
            window.alert("Wrong");
            secondsLeft = secondsLeft - 10;
            questionThreeContainerEl.classList.toggle("show");
            questionFourContainerEl.classList.toggle("show");
            x++;
        })
    }
    correctQThreeEl.addEventListener("click", function() {
        window.alert("Correct");
        score++;
        console.log(score);
        questionThreeContainerEl.classList.toggle("show");
        questionFourContainerEl.classList.toggle("show");
        x++;
    }) 
}

var qFour = function() {
    // timerFour();
    for (var i = 0; i<wrongQFourEl.length; i++) {
        wrongQFourEl[i].addEventListener("click", function() {
            timeEl.classList.toggle("hide");
            secondsLeft = -3;
            window.alert("Wrong");
            // secondsLeft = secondsLeft - 10;
            // questionFourContainerEl.classList.toggle("show");
            // userName = window.prompt("Final Score: " + score + '\n' + "Please enter name to store high score.");
            // if (userName === "") {
            //     userName = window.prompt("Final Score: " + score + '\n' + "Please enter name to store high score.");
            // }
            // nameScoreVar = userName + ": " + score;

            // // Add new todoText to todos array, clear the input
            // nameScoreArray.push(nameScoreVar);
        
            // // Store updated todos in localStorage, re-render the list
            // storeScores();
            // renderScores();
        })
    }


    correctQFourEl.addEventListener("click", function() {
        timeEl.classList.toggle("hide")
        secondsLeft = -3;
        window.alert("Correct");
        score++;
        console.log(score)
        // questionFourContainerEl.classList.toggle("show");
    //     userName = window.prompt("Final Score: " + score + '\n' + "Please enter name to store high score.");

    //     nameScoreVar = userName + ": " + score;

    //     // Return from function early if submitted todoText is blank

    //     // Add new todoText to todos array, clear the input
    //     nameScoreArray.push(nameScoreVar);
    
    //     // Store updated todos in localStorage, re-render the list
    //     storeScores();
    //     renderScores();
    });
}


var start = function() {
    startBtnEl.addEventListener("click", function() {
        timer();
        startPageEl.classList.toggle("hide");
        qOne();
        qTwo();
        qThree();
        qFour();
    });
}

var renderScores = function () {
    // Render a new li for each todo
    for (var i = 0; i < nameScoreArray.length; i++) {
        nameScoreArray.sort().reverse();
        var nameScore = nameScoreArray[i];

        var listItem = document.createElement("li");
        listItem.textContent = nameScore;
        listItem.setAttribute("data-index", i);

        scoreListEl.appendChild(listItem);
    }
}

var updateNameScoreStore = function () {
    var nameScoreStore = JSON.parse(localStorage.getItem("nameScore"));
    if(nameScoreStore !== null){
        // localStorage.setItem("nameScore", userName + ": " + score);
        nameScoreArray = nameScoreStore; 
    }
    // If todos were retrieved from localStorage, update the todos array to it
    
    // if (storedTodos !== null) {
    //     todos = storedTodos;
    // }

        // // This is a helper function that will render todos to the DOM
        // renderScores();
        console.log(nameScoreStore)
}

var storeScores = function () {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("nameScore", JSON.stringify(nameScoreArray));
    };

hideQuestions();

hideScorePage();

updateNameScoreStore();

start();

// restart();

localStorage.clear()

