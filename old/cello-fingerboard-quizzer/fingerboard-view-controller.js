/*
    Controls DOM-related functions, and user-interaction functions.
    Will typically call methods of the FingerboardController.
*/
var FingerboardViewController = {
    createFingerboardUnit: function(fbPositionNum) {
        return jQuery("<div/>", {
            class: "fingerboard-unit"
        });
    },
    
    createFingerboardNoteUnit: function(fbPositionNum, stringNum) {
        var fbNoteUnit = jQuery("<div/>", {
            class: "fingerboard-note-unit",
            data-coordinates: stringNum + "," + fbPositionNum
        });
        jQuery("<div/>", {class: "note-unit-01"}).appendTo(fbNoteUnit);
        jQuery("<div/>", {class: "note-unit-02"}).appendTo(fbNoteUnit);
        jQuery("<div/>", {class: "note-unit-03"}).appendTo(fbNoteUnit);
        
        return fbNoteUnit;
    },
    
    markNoteUnit: function(noteUnit) {
        // get note unit coords
        // call controller method to mark that position
        // if position is already marked, unmark it
    },
    
    createFingerboard: function(numStrings, numNotePositions) {
        var $fingerboard = jQuery("<div/>", {
            class: "fingerboard"
        });
        // for each note position, create a note unit for each string.
        for(var notePos = 1; notePos <= numNotePositions; notePos++) {
            var $fbUnit = this.createFingerboardUnit(notePos);
            for(var stringNum = 1; stringNum <= numStrings; stringNum++) {
                var $fbNoteUnit = this.createFingerboardNoteUnit(notePos, stringNum);
                $fbNoteUnit.appendTo($fbUnit);
            }
            $fbUnit.appendTo($fingerboard);
        }
        return $fingerboard;
    }
};