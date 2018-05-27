window.jQuery = $ = require('../js/lib/node_modules/jquery');
var QuizController = require('./ETQuizController');
var ETUtils = require('./ETUtils');

function resetThisThing() {
    ETQuizController.quizOptions.setScaleType($("input[name=scale-type]:checked").val());
    ETQuizController.update();
    ETQuizController.playQuiz();
}

$(document).ready(function () {
    ETQuizController = new QuizController.ETQuizController();
    ETQuizController.init();

    $("#btn-play-note").click(function () {
        ETQuizController.playNote();
    });

    $("#btn-play-tonic-chord").click(function () {
        ETQuizController.playChord();
    });

    $("#btn-play-quiz").click(function () {
        ETQuizController.playQuiz();
    });

    $("#btn-play-cadence").click(function () {
        ETQuizController.playCadence();
    });

    $(".btn-scale-degree").click(function () {
        var scaleDegreeValue = this.dataset.value;
        var isUserCorrect = ETQuizController.isQuizAnswerCorrect(scaleDegreeValue);

        if (isUserCorrect) {
            ETUtils.outputMessage("CORRECT!");
        } else {
            ETUtils.outputMessage("WRONG");
        }
    });

    $("#btn-reset-key").click(function () {
        ETUtils.outputMessage("Resetting...");
        resetThisThing();
    });
    $(".reload-trigger").click(function () {
        ETUtils.outputMessage("Resetting...");
        resetThisThing();
    });
});
