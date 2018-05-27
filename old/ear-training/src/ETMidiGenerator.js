var MidiWriter = require('../js/lib/node_modules/midi-writer-js');
var TeoriaExtension = require('./TeoriaExtension.js');

module.exports = {
    _buildNoteMidi: function(tNote, duration, wait) {
        if(!wait) {
            wait = "0";
        }
        return new MidiWriter.NoteEvent({pitch: [tNote.midi()], duration: duration, wait: wait, velocity: 100});
    },
    
    _buildChordMidi: function(tChord, duration, wait) {
        if(!wait) {
            wait = "0";
        }
        var noteMidiArray = [];
        for(var i = 0; i < tChord.notes().length; i++) {
            noteMidiArray.push(tChord.notes()[i].midi());
        }
        return new MidiWriter.NoteEvent({pitch: noteMidiArray, duration: duration, velocity: 100, wait: wait});
    },
    
    _buildCadenceMidi: function(tonicChord, duration, wait) {
        if(!wait) {
            wait = "0";
        }
        var subdominant = TeoriaExtension.getSubdominant(tonicChord);
        var dominant = tonicChord.dominant("7");
        var chords = [tonicChord, subdominant, dominant, tonicChord.interval("P1")];
        var events = [];
        
        for(var i = 0; i < chords.length; i++) {
            var currentChord = chords[i];
            currentChord = TeoriaExtension.buildSpaciousChord(currentChord);
            events.push(this._buildChordMidi(currentChord, duration, wait));
        }
        
        return events;
    },
    
    generateNoteMidi: function(tNote) {
        var tracks = [];
        tracks[0] = new MidiWriter.Track();
        //tracks[0].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));
        
        tracks[0].addEvent(this._buildNoteMidi(tNote, "1"));
        console.debug(tNote.midi());
        
        var write = new MidiWriter.Writer(tracks);
        console.debug(write.dataUri());
        
        return write.dataUri();
    },
    
    generateChordMidi: function(tChord) {
        var tracks = [];
        tracks[0] = new MidiWriter.Track();
        
        var currentChord = TeoriaExtension.buildSpaciousChord(tChord);
        var notes = currentChord.notes();
        tracks[0].addEvent(this._buildChordMidi(tChord, "2"));
        
        var write = new MidiWriter.Writer(tracks);
        console.debug(write.dataUri());
        
        return write.dataUri();
    },
    
    generateCadenceMidi: function(tonicChord) {
        var tracks = [];
        tracks[0] = new MidiWriter.Track();
        
        var noteEvents = this._buildCadenceMidi(tonicChord, "4");
        
        for(var i = 0; i < noteEvents.length; i++) {
            tracks[0].addEvent(noteEvents[i]);
        }
        
        var write = new MidiWriter.Writer(tracks);
        console.debug(write.dataUri());
        
        return write.dataUri();
    },
    
    generateQuizMidi: function(tonicChord, tNote) {
        var tracks = [];
        tracks[0] = new MidiWriter.Track();
        
        var noteEvents = this._buildCadenceMidi(tonicChord, "4");
        
        for(var i = 0; i < noteEvents.length; i++) {
            tracks[0].addEvent(noteEvents[i]);
        }
        
        tracks[0].addEvent(this._buildNoteMidi(tNote, "1"));
        
        var write = new MidiWriter.Writer(tracks);
        console.debug(write.dataUri());
        
        return write.dataUri();
    },
    
    generateQuizSuccessMidi: function(oldNote, oldScale, newTonicChord, newNote) {
        var tracks = [];
        tracks[0] = new MidiWriter.Track();
        
        // From the given note, traverse the scale towards the nearest root.
        var scaleDegree = oldNote.scaleDegree(oldScale);
        var currentNote;
        var currentDuration;
        
        if(scaleDegree >= 5) {
            // go upwards
            for(var scaleDeg = scaleDegree; scaleDeg <= 8; scaleDeg++) {
                if(scaleDeg === 8) {
                    currentNote = oldScale.get(1).interval("P8");
                    currentDuration = "2";
                } else {
                    currentNote = oldScale.get(scaleDeg);
                    currentDuration = "8";
                }
                tracks[0].addEvent(this._buildNoteMidi(currentNote, currentDuration));
            }
        } else {
            // go downwards
            for(var scaleDeg = scaleDegree; scaleDeg >= 1; scaleDeg--) {
                if(scaleDeg === 1) {
                    currentDuration = "2";
                } else {
                    currentDuration = "8";
                }
                currentNote = oldScale.get(scaleDeg);
                tracks[0].addEvent(this._buildNoteMidi(currentNote, currentDuration));
            }
        }
        
        var noteEvents = this._buildCadenceMidi(newTonicChord, "4");
        
        for(var i = 0; i < noteEvents.length; i++) {
            tracks[0].addEvent(noteEvents[i]);
        }
        
        tracks[0].addEvent(this._buildNoteMidi(newNote, "1"));
        
        var write = new MidiWriter.Writer(tracks);
        console.debug(write.dataUri());
        
        return write.dataUri();
    }
};
