var timeEl = document.querySelector(".timer");
var start = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');

var secondsLeft = 100;

// A start button that when clicked a timer starts
start.addEventListener('click', function () {

  startScreen.style.display = 'none'; // removes the start screen
  questionTitle.style.display = 'block';
  displayQuestion(currentQuestionIndex); // questions are displayed when timer starts

  // countdown
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time left: ' + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);
})


var currentQuestionIndex = 0;

function radioButtons(questionSet) {

    // making an element for the title.
    questionTitle.innerHTML = questionSet.question;
    document.body.appendChild(questionTitle);

    // making an element for the choices.
    questionSet.choices.forEach(function (choice, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.name = choice;
      button.value = choice;

      button.addEventListener('click', function () {
        buttonClick(choice, questionSet.answer);
      });

      button.setAttribute("style", "display: block; margin-bottom: 10px;");

      document.body.appendChild(button);
      button.appendChild(document.createTextNode(choice)); 
    });
    // 'document.createTextNode(choice)' creates a new text node
    // with the content equal to the value of the choice variable
    // from the 'questions' array.
    // 'button.append.child' adds the text to the 'button' element.
    // it links them together




    // checking if the user has clicked the right answer

      function buttonClick(userChoice, answer) {
        if (userChoice === answer) {
          alert ('Correct!');
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
        } else {
          alert ('Incorrect!');
        }
    }; 
}

function displayQuestion(index) {

  var previousChoices = document.querySelectorAll('button');
  previousChoices.forEach(function (choice) {
    choice.remove();
  });

  if (index < questions.length) {
    radioButtons(questions[index]);
  } else {
    alert("Quiz completed!");
  }
}