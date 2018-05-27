///////////////////////////////////////////////////////////////////////////////
/////   MAIN QUIZZER CODE   ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var quizzer = {
    constants: {
        SIMPLE_ANSWER: '1',
        MULTIPLE_CHOICE: '2',
        MATCHING: '3',
        MUSIC_KEYS: '4',
        MUSIC_GUITAR_FRETBOARD: '5',
        PRIMARY_DELIM: ";",
        SECONDARY_DELIM: ":",
        ERROR_CLASS: "answer-error",
        CORRECT_CLASS: "answer-correct",
        OPT_CASE_SENSITIVE: "caseSensitive",
        OPT_SHOW_ANSWERS: "showAnswers",
        MUSIC_QUIZ_NUM_ACCIDENTALS_LIMIT: 7
    },
        
    menuJqObj:  0,
    bodyJqObj: 0,
    titleJqObj: 0,
    descJqObj: 0,
    listJqObj: 0,
    notificationsJqObj: 0,
    currentQuizIdId: 0,
    quizzes: 0,
    selectedValues: 0,
    
    resetNotifications: function() {
        this.notificationsJqObj[0].innerHTML = "";
    },
    
    getQuiz: function(quizId) {
        for(var i = 0; i < this.quizzes.length; i++) {
            if(this.quizzes[i].id == quizId) {
                return this.quizzes[i];
            }
        }
        return null;
    },
    
    ///////////////////////////////////////////////////////////////////////////
    /////   INITIALIZING QUIZZES   ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    createSimpleAnswerQuiz: function(quizItems) {
        var returnHtml = "<!-- simple answer quiz -->\n";
        for (var k = 0; k < quizItems.length; k++) {
            returnHtml += "<li><div class=\"quizzer-question\">" + quizItems[k].question + "</div><input class=\"quizzer-answer qz-simple\" type=\"text\"></li>\n";
        }
        return returnHtml;
    },

    createMultipleChoiceQuiz: function(quizItems) {
        var returnHtml = "<!-- multiple choice quiz -->\n";
        for(var k = 0; k < quizItems.length; k++) {
            returnHtml += "<li><span class=\"quizzer-question\">" + quizItems[k].question + "</span><span class=\"quizzer-answer qz-mc\">";
            for(var l = 0; l < quizItems[k].answers.length; l++) {
                returnHtml += "<span qz-mc-pair><input type=\"radio\" name=\"qz-mc-" + k + "\" value=\"" + l + "\">" + quizItems[k].answers[l] + "</span>";
            }
            returnHtml += "</span></li>\n";
        }
        console.log(returnHtml);
        return returnHtml;
    },

    createMatchingQuiz: function(quizItems, answerList) {
        var returnHtml = "<!-- matching quiz -->\n";
        for(var k = 0; k < quizItems.length; k++) {
            returnHtml += "<li><span class=\"quizzer-question\">" + quizItems[k].question + "</span><select class=\"quizzer-answer qz-matching\"><option>Choose your destiny...</option>"
            for(var l = 0; l < answerList.length; l++) {
                returnHtml += "<option value=\"" + l + "\">" + answerList[l] + "</option>"
            }
            returnHtml += "</select></li>\n";
        }
        return returnHtml;
    },
    
    createSelectForMusicKeyQuiz: function(selectName, selectClass) {
        var returnHtml = "<select name=\'" + selectName + "\' class=\'" + selectClass + "\'";
        for(var l = 0; l <= this.constants.MUSIC_QUIZ_NUM_ACCIDENTALS_LIMIT; l++) {
            returnHtml += "<option>" + l + "</option>";
        }
        returnHtml += "</select>";
        return returnHtml;
    },
    
    createMusicKeyQuiz: function(quizItems) {
        var returnHtml = "<!-- simple answer quiz -->\n";
        for (var k = 0; k < quizItems.length; k++) {
            //returnHtml += "<li><div class=\"quizzer-question\">" + quizItems[k].question + "</div><input class=\"quizzer-answer qz-simple\" type=\"text\"></li>\n";
            returnHtml += "<li class=\'quiz-music-key\'><div class=\"quizzer-question\">" + quizItems[k].question + "</div>";
            returnHtml += this.createSelectForMusicKeyQuiz('herp-derp', 'quiz-music-accidental-select');
            returnHtml += "<input type=\'radio\' name=\'accidental01\' value=\'flat\'> Flats ";
            returnHtml += "<input type=\'radio\' name=\'accidental01\' value=\'sharp\'> Sharps ";
            returnHtml += "</li>";
        }
        return returnHtml;
    },
    
    initializeQuiz: function() {
        console.log('generating quiz...');
        $.ajax({
            url: "http://localhost:8080/portfolio/scripts/quizzer/get_all_quizzes",
            beforeSend: function(xhr) {
                xhr.overrideMimeType( "application/json; charset=x-user-defined" );
            }
        })
        .done(function( data ) {
            quizzer.quizzes = data;
            quizzer.quizzes.push(getTestMusicQuiz());
            var nextMenuButtonHtml = "<select id=\"quizzer-select\">\n";
            var quizItemHtml = 0;

            for(var i = 0; i < quizzer.quizzes.length; i++) {
                nextMenuButtonHtml += "<option value=\"" + quizzer.quizzes[i].id + "\">" + quizzer.quizzes[i].name + "</option>";
            }

            nextMenuButtonHtml += "</select>";
            quizzer.menuJqObj.append(nextMenuButtonHtml);
            quizzer.changeQuiz(1);
            $('#quizzer-select').change(function() {
                var quizValue = this.value;
                quizzer.changeQuiz(quizValue);
            });

            $('#quizzer-submit').click(function() {
                quizzer.evaluateQuiz();
            });
        });
    },
    
    ///////////////////////////////////////////////////////////////////////////
    /////   UTILITY FUNCTIONS   ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    changeQuiz: function(option) {
        console.log('changing quiz...');
        this.currentQuizId = option;
        var upcomingQuiz = this.getQuiz(this.currentQuizId);
        this.titleJqObj.html(upcomingQuiz.name);
        this.descJqObj.html(upcomingQuiz.description);
        this.listJqObj.empty();

        this.resetNotifications();
        
        var quizItemHtml = 0;
        switch(upcomingQuiz.type) {
        case this.constants.SIMPLE_ANSWER:
            // simple quiz (1)
            quizItemHtml = this.createSimpleAnswerQuiz(upcomingQuiz.quizItems);
            this.listJqObj.append(quizItemHtml);
            break;
        case this.constants.MATCHING:
            // matching (3)
            quizItemHtml = this.createMatchingQuiz(upcomingQuiz.quizItems, upcomingQuiz.answerList);
            this.listJqObj.append(quizItemHtml);

            onSelectChange(quizzer);
            $('.quizzer-answer').change(function() {
                onSelectChange(quizzer);
            });
            break;
        case this.constants.MULTIPLE_CHOICE:
            // multiple choice (2)
            quizItemHtml = this.createMultipleChoiceQuiz(upcomingQuiz.quizItems);
            this.listJqObj.append(quizItemHtml);
            break;
        case this.constants.MUSIC_KEYS:
            // musical keys (4)
            quizItemHtml = this.createMusicKeyQuiz(upcomingQuiz.quizItems);
            this.listJqObj.append(quizItemHtml);
            break;
        }
    },
    
    addError: function(domElement) {
        domElement.className += " " + this.constants.ERROR_CLASS;
    },

    removeError: function(domElement) {
        var newClass = domElement.className.replace(this.constants.ERROR_CLASS, "");
        domElement.className = newClass;
    },
    
    ///////////////////////////////////////////////////////////////////////////
    /////   EVALUATING ANSWERS   //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    evaluateQuiz: function() {
        console.log('evaluating...');
        var referenceQuiz = this.getQuiz(this.currentQuizId);
        var quizzerAnswers = $('.quizzer-answer');
        var currentResult = 0;
        var correctAnswers = 0;
        this.resetNotifications();

        switch(referenceQuiz.type) {
            case this.constants.SIMPLE_ANSWER:
                for(var i = 0; i < quizzerAnswers.length; i++) {
                    currentResult = this.evaluateSimpleAnswer(quizzerAnswers[i].value, referenceQuiz.quizItems[i].answers, referenceQuiz.options);
                }
                break;
            case this.constants.MATCHING:
                break;
            case this.constants.MULTIPLE_CHOICE:
                break;
            case this.constants.MUSIC_KEYS:
                for(var i = 0; i < quizzerAnswers.length; i++) {
                    currentResult = this.evaluateMusicKeys(quizzerAnswers[i].value, referenceQuiz.quizItems[i].answers, referenceQuiz.options);
                }
                break;
        }
        
        // ERROR HAPPENING HERE!
        if(currentResult) {
            this.removeError(quizzerAnswers[i]);
            correctAnswers++;
        } else {
            this.addError(quizzerAnswers[i]);
        }

        var answersToCorrect = quizzerAnswers.length - correctAnswers;

        if(correctAnswers <= 0) {
            this.notificationsJqObj[0].innerHTML = "<span class=\"color-red\">Whoa, you got 'em all wrong?! Hah!</span>";
        } else if(correctAnswers >= quizzerAnswers.length) {
            this.notificationsJqObj[0].innerHTML = "<span class=\"color-green\">Awesome, you aced the quiz!</span>";
        } else {
            this.notificationsJqObj[0].innerHTML = "<span class=\"color-yellow\">You've got " + answersToCorrect + " answer(s) to correct.</span>";
        }
    },
    
    evaluateSimpleAnswer: function(inputAnswer, referenceAnswer, quizOptions) {
        console.log('evaluating simple answer...');
        var caseSensitive = false;
        var optionPair = 0;
        var result = 0;
        var refAnswersArray = 0;

        for (var index = 0; index < quizOptions.length; ++index) {
            optionPair = quizOptions[index].split(this.constants.SECONDARY_DELIM);
            if(optionPair[0] == this.constants.OPT_CASE_SENSITIVE && optionPair[1] == "true") {
                caseSensitive = true;
            }
        }

        if(!caseSensitive) {
            referenceAnswer = referenceAnswer.toUpperCase();
            inputAnswer = inputAnswer.toUpperCase();
        }

        refAnswersArray = referenceAnswer.split(this.constants.PRIMARY_DELIM);
        result = $.inArray(inputAnswer, refAnswersArray) != -1;

        return result;
    },
    
    evaluateMusicKeys: function(inputAnswer, referenceAnswer, quizOptions) {
        return false;
    },
    
    ///////////////////////////////////////////////////////////////////////////
    /////   FOR DISABLING SELECTS (MULTIPLE CHOICE / MATCHING QUIZ)   /////////
    ///////////////////////////////////////////////////////////////////////////

    getCurrentlySelectedItems: function() {
        var selects = $('.quizzer-answer');
        this.selectedValues = [];
        for(var i = 0; i < selects.length; i++) {
            this.selectedValues.push(selects[i].value);
        }
    },

    disableSelectedOptions: function() {
        var isOptionAlreadySelected;
        var isDefaultSelection;

        $('.quizzer-answer > option').each(function() {
            isOptionAlreadySelected = $.inArray($(this).val(), quizzer.selectedValues) > -1;
            isDefaultSelection = $(this).prop('selected') || $(this).val() == "";

            if(isOptionAlreadySelected && !isDefaultSelection) {
                $(this).prop('disabled', true);
            } else {
                $(this).prop('disabled', false);
            }
        });
    },

    onSelectChange: function() {
        console.log('select changed!');
        this.getCurrentlySelectedItems();
        this.disableSelectedOptions();
    }
};


function getTestMusicQuiz() {
    var testMusicQuiz = {
    "id":"1337",
    "type":"4",
    "quizItems":[
    {
    "question":"G minor",
    "answers":"2 flats"
    },
    {
    "question":"A major",
    "answers":"3 sharps"
    },
    {
    "question":"C minor",
    "answers":"3 flats"
    },
    {
    "question":"E major",
    "answers":"4 sharps"
    }
    ],
    "name":"Test Music Quiz",
    "description":"MEMORIZE THOSE KEYS!",
    "options":"",
    "extraData":""
    };
    return testMusicQuiz;
}

function getMusicQuizHtml() {
    
}


///////////////////////////////////////////////////////////////////////////////
/////   INITIALIZATION   //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    // rendering the quiz
    quizzer.menuJqObj = $('#quizzer-menu');
    quizzer.bodyJqObj = $('#quizzer-body');
    quizzer.titleJqObj = $('#quizzer-title');
    quizzer.listJqObj = $('#quizzer-list');
    quizzer.descJqObj = $('#quizzer-intro');
    quizzer.notificationsJqObj = $('#quizzer-notifications');
    quizzer.initializeQuiz();
});
