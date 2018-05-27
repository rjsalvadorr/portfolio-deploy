/*
    Controls and encapsulates fingerboard logic, 
*/
var FingerboardController = {
    noteArray: "",
    init: function() {
      this.noteArray = Array();
    },
    registerNote: function(stringNum, notePosNum, pitchName, isMarked) {
        this.noteArray.push(FingerboardModels.createNote(stringNum, notePosNum, pitchName, isMarked));
    },
    toggleNote: function(stringNum, notePosNum) {
        
    },
    unmarkNote: function(stringNum, notePosNum) {
        for(i = 0; i < this.noteArray.length; i++) {
            
        }
    },
    unmarkNotesOnString: function(stringNum) {
        // find all notes on this string
        // 
    }
};