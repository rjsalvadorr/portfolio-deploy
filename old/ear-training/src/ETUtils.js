module.exports = {
    getRandomIntInclusive: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    debugPrintObj: function(msg, obj) {
        console.debug(msg + "\n" + JSON.stringify(obj, null, 4))
    },
    
    outputMessage: function(msg) {
        $("#msg-output").html(msg);
        $("#msg-output").show();
        $("#msg-output").fadeOut("slow");
    },
    
    updateScore: function(totalAttempts, correctAttempts) {
        var correctPercent = (correctAttempts / totalAttempts * 100).toFixed(2) + "%";
        $("#total-attempts").html(totalAttempts);
        $("#correct-attempts").html(correctAttempts);
        $("#correct-percent").html(correctPercent);
    }
};
