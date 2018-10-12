//JavaScript for TriviaGame
var time = 120;
var timeInterval;
var questions = [ //This will list all questions as objects within an array.
    {
        question: "When did Arizona become a state?",
        answers: ["1776", "1912", "2004", "1886"],
        answerIndex: 2
    },
    {
        question: "What was the last Arizona professional sport to win a championship?",
        answers: ["Arizona Cardinals", "Pheonix Suns", "Arizona Rattlers", "Arizona Diamondbacks"],
        answerIndex: 3
    },
]

$("#start").on("click", function () {//This will control reactions when start button is clicked.
    $("#intro").addClass("hidden");
    $("#trivia").removeClass("hidden");


    timeInterval = setInterval(function () {
        time--;
        if (time === 0) { //This will be very helpful when time hits 0 anything that we need to have happen will be located here.
            clearInterval(timeInterval);//Keeps timer from going negative.
        }
        $("#timer").text(time);
    }, 1000);
});
function renderQuestions() {

    questions.forEach(function (question, index) {
        var $form = $("<form>");
        var $question = $("<h5>").text(question.question);

        $form.append($question);

        question.answers.forEach(function (answer, i) {
            var $input = $('<input type="radio">');
            $input.attr("value", answer);
            $input.attr("name", index);
            $form.append($input);
            $form.append(answer);
        });

        $("#questions").append($form);
    });
}

$("#timer").text(time);

renderQuestions();

