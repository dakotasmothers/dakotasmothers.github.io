/* 
    Below is an IIFE - Immediately Invoked Function Expression.
    IIFE's run as soon as they are defined. IIFE's are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts.
*/

(function(){
    //Because this variable is inside of an IIFE, it is not in the global scope.
    var variable = 10;

    //Make references to our elements that we are going to interact with.
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var resetButton = document.getElementById("reset");

    var myQuestions = [];

    //What does a quiz question consist of?
    //Question Text, Answer choices, Correct Answer
    var question1 = {
        question: "What color is the sky?",
        answers: {
            a: "Brown",
            b: "Blue",
            c: "Green"
        },
        correctAnswer: "b"
    }

    var question2 = {
        question: "What color is Dakota's car?",
        answers: {
            a: "blue",
            b: "silver",
            c: "teal"
        },
        correctAnswer: "b"
    }

    var question3 = {
        question: "What is Barren County's Mascot?",
        answers: {
            a: "Trojans",
            b: "Scotties",
            c: "Patriots"
        },
        correctAnswer: "a"
    }

    //Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3);

    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz(){
        //Go through each of our question objects and use them to build out the HTML to show a question

        for (var i = 0; i < myQuestions.length; i++){
            //Create a display for the question text
            var questionDiv = document.createElement("div");
            questionDiv.innerText = myQuestions[i].question;

            //Display the answer  choices and take user input

            //Creating div to hold the question answers
            var answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");


            for (letter in myQuestions[i].answers){
                //Create label for radio button input
                var label = document.createElement("label");

                //Create a radio button for each answer
                var input = document.createElement("input");
                //Configure the input element
                input.type = "radio";
                input.name = "question" + i;
                input.value = letter;
                label.appendChild(input);
                //Create some text from the current letter we are looking at and the corresponding answer for that letter.
                var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

                //Add text to the label
                label.appendChild(labelText);
                //Add label to answers div
                answersDiv.appendChild(label);
                //Add the answerDiv to the questionDiv
                


            }
            questionDiv.appendChild(answersDiv);

            //Add questionDiv to quiz container
            quizContainer.appendChild(questionDiv);
            //Display the answer choices (and take user input to select an answer)
            


    }
}

    buildQuiz();

    //Function to show the results of the quiz

    function showResults(){
        //Get all the answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers"); //This will basically give us back an array containing everything in the quizContainer with the class "answers"
        var numCorrect = 0;
        for (var i = 0; i < answerContainers.length; i++){
            var answerContainer = answerContainers[i];

            var selector = `input[name=question${i}]:checked`;

            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === myQuestions[i].correctAnswer){
                //They got it right!
                answerContainer.style.color = "green";
                numCorrect ++;
            } else{
                //They got it wrong!
                answerContainer.style.color = "red";
            }
        

        }
        resultsContainer.innerText = "You answered " + numCorrect + " out of " + myQuestions.length + " correctly!";
    }

    submitButton.addEventListener("click", showResults);


    //Function to reset the quiz
    function resetQuiz(){
        //Clear out what's in the results container
        resultsContainer.innerText = "";
        //Clear out the quiz container
        quizContainer.innerHTML = "";
        //Rebuild the quiz
        buildQuiz();
        
    }
    resetButton.addEventListener("click", resetQuiz);


})();