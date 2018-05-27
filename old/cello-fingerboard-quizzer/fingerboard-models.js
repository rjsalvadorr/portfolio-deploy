var FingerboardModels = {
    createNote: function(stringNum, notePositionNum, pitchName, isMarked) {
        var newNote = {string: stringNum, notePos: notePositionNum, pitch: pitchName, marked: isMarked};
        return newNote;
    },
};