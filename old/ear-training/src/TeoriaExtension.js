// Implementing extra functionality to the Teoria library.
// - Any impact with harmonic minor
// - Get chord from scale degree
var teoria = require('../js/lib/node_modules/teoria');

module.exports = {
    CHORD_TYPES_MAJOR: ["M", "m", "m", "M", "M", "m", "dim"],
    CHORD_TYPES_MINOR: ["m", "dim", "M", "m", "m", "M", "M"],
    CHORD_TYPES_HARMONIC_MINOR: ["m", "dim", "M", "m", "M", "M", "dim"],
    
    VOICING_MINOR_TRIAD: ['P1','P5', 'm10','P15'],
    VOICING_MAJOR_TRIAD: ['P1','P5', 'M10','P15'],
    VOICING_DIMINISHED_TRIAD: ['P1','d5', 'm10','P15'],
    
    VOICING_MINOR_SEVENTH: ['P1','P5', 'm7', 'm10','P15'],
    VOICING_MAJOR_SEVENTH: ['P1','P5', 'M7', 'M10','P15'],
    VOICING_DOMINANT_SEVENTH: ['P1','P5', 'm7', 'M10','P15'],
    VOICING_HALF_DIMINISHED_SEVENTH: ['P1','d5', 'm7', 'm10','P15'],
    VOICING_DIMINISHED_SEVENTH: ['P1','d5', 'd7', 'm10','P15'],
    
    _debugOutputChord: function(tChord) {
        noteString = "";
        for(var i = 0; i < tChord.notes().length; i++) {
            noteString += tChord.notes()[i].scientific() + " ";
        }
        console.log(noteString);
    },
    
    getChordFromScaleDegree : function(tScale, scaleDegIndex) {
        var newChordType = "";
        switch(tScale.name) {
            case "major":
                newChordType = this.CHORD_TYPES_MAJOR[scaleDegIndex - 1];
                break;
            case "minor":
                newChordType = this.CHORD_TYPES_MINOR[scaleDegIndex - 1];
                break;
            case "harmonicminor":
                newChordType = this.CHORD_TYPES_HARMONIC_MINOR[scaleDegIndex - 1];
                break;
        }
        var newChord = tScale.notes()[scaleDegIndex - 1].chord(newChordType);
        console.log("chord type: " + newChordType);
        console.log("scale: " + tScale.tonic.name().toUpperCase() + tScale.tonic.accidental() + " " + tScale.name);
        console.log("chord: " + JSON.stringify(newChord.simple()));
        return newChord;
    },
    
    getSubdominant: function(tChord) {
        if(tChord.symbol === "m") {
            var tempScale = tChord.root.scale("minor");
            return this.getChordFromScaleDegree(tempScale, 4);
        } else {
            return tChord.subdominant();
        }
    },
    
    buildSpaciousChord: function(tChord) {
        // Convert the close chord into one with the following formula:
        // For triads - [R] [5] [10] [R 2 octaves above first]
        // For seventh chords - [R] [5] [7] [10] [R 2 octaves above first]
        this._debugOutputChord(tChord);
        var voicing = "";
        switch(tChord.notes().length) {
            case 4: 
                // FOUR-NOTE CHORD
                if(tChord.quality() === "major") {
                    voicing = this.VOICING_MAJOR_SEVENTH;
                } else if(tChord.quality() === "minor") {
                    voicing = this.VOICING_MINOR_SEVENTH;
                } else if(tChord.quality() === "dominant") {
                    voicing = this.VOICING_DOMINANT_SEVENTH
                } else if(tChord.quality() === "diminished") {
                    voicing = this.VOICING_HALF_DIMINISHED_SEVENTH_SEVENTH;
                }
                break;
            case 3:
                // TRIAD
                if(tChord.quality() === "major") {
                    voicing = this.VOICING_MAJOR_TRIAD;
                } else if(tChord.quality() === "minor") {
                    voicing = this.VOICING_MINOR_TRIAD;
                } else if(tChord.quality() === "diminished") {
                    voicing = this.VOICING_DIMINISHED_TRIAD;
                }
                break;
            default:
                // NOTHING
                break;
        }
        tChord.voicing(voicing);
        this._debugOutputChord(tChord);
        return tChord;
    }
};
