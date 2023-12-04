var timeEl = document.querySelector(".timer");
var start = document.querySelector('#start');

var secondsLeft = 100;

// A start button that when clicked a timer starts
start.addEventListener('click', function () {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time left: ' + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);
})

// - Display first question
//      add click event listener to "start quiz" button
//      display the first question based on the questions that we have defined
//      hide the start screen
//      show questions screen and populate it with questions and the choices

// var questionContainer = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var startScreen = document.querySelector('#start-screen');
var choices = document.querySelector('#choices');

var currentQuestionIndex = 0;

start.addEventListener('click', function () {
    startScreen.style.display = 'none'; // removes the start screen
    questionTitle.style.display = 'block';
    displayQuestion(currentQuestionIndex);
});

function displayQuestion(index) {
    var currentQuestion = questions[index];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, choiceIndex) {
        var choiceEl = document.createElement('div');
        var choicesButton = document.createElement('input');
        choicesButton.type = 'radio';
        choicesButton.name = 'question' + index;
        choicesButton.value = choice;

        choiceEl.appendChild(choicesButton);

        var label = document.createElement('label');
        label.textContent = choice;
        label.htmlFor = 'choice' + choiceIndex;

        choiceEl.appendChild(label);
        choices.appendChild(choiceEl);
    })
}