var FingerboardQuiz = {
    renderFingerboard: function(targetSelector) {
        var $fingerboard = FingerboardViewController.createFingerboard();
        $fingerboard.appendTo(targetSelector);
    }
};

$(document).ready(function() {
    
});