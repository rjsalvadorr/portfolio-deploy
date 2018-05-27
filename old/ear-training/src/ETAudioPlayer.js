var ETMidiGenerator = require('./ETMidiGenerator.js');
var MidiPlayer = require('../js/lib/node_modules/midi-player-js');
var SoundfontPlayer = require('../js/lib/node_modules/soundfont-player');

module.exports = {
    player: "",
    instrument: "",
    audioContext: "",
    
    init: function() {
        this.audioContext = new AudioContext;
        
        // is this kind of scope hackery necessary?!
        var audioPlayer = this;
        
        this.instrument = Soundfont.instrument(this.audioContext, 'bright_acoustic_piano', {soundfont: 'MusyngKite'}).then(function (piano) {
            audioPlayer.player = new MidiPlayer.Player(function(event) {
                console.debug(event);
                if (event.name == 'Note on' && event.velocity > 0) {
                    piano.play(event.noteName, audioPlayer.audioContext.currentTime, {gain: 4});
                }
                if (event.name == 'Note off') {
                    piano.stop();
                }
            });
            
            var loadEvent = new CustomEvent("midiLoaded");
            document.body.dispatchEvent(loadEvent);
        });
    },
    
    _throwError: function() {
        throw "Failed to load MIDI!";
    },
    
    _displayProgress: function(state, progress) {
        console.log(state, progress);
    },
    
    _stopPlayer: function() {
        if(this.player.isPlaying()) {
            this.player.stop();
        }
    },
    
    playNote: function(tNote) {
        this._stopPlayer();
        var noteMidi = ETMidiGenerator.generateNoteMidi(tNote);
        this.player.loadDataUri(noteMidi);
        this.player.play();
    },
    
    playChord: function(tChord) {
        this._stopPlayer();
        var chordMidi = ETMidiGenerator.generateChordMidi(tChord);
        this.player.loadDataUri(chordMidi);
        this.player.play();
    },
    
    playQuiz: function(tChord, tNote) {
        this._stopPlayer();
        var quizMidi = ETMidiGenerator.generateQuizMidi(tChord, tNote);
        this.player.loadDataUri(quizMidi);
        this.player.play();
    },
    
    playCadence: function(tChord) {
        this._stopPlayer();
        var cadenceMidi = ETMidiGenerator.generateCadenceMidi(tChord);
        this.player.loadDataUri(cadenceMidi);
        this.player.play();
    },
    
    playResolution: function(oldNote, oldScale, newTonicChord, newNote) {
        this._stopPlayer();
        var resolutionMidi = ETMidiGenerator.generateQuizSuccessMidi(oldNote, oldScale, newTonicChord, newNote);
        this.player.loadDataUri(resolutionMidi);
        this.player.play();
    }
};
