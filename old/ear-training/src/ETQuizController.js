var ETAudioPlayer = require('./ETAudioPlayer.js');
var ETQuizOptions = require('./ETQuizOptions');
var ETUtils = require('./ETUtils');
var teoria = require('../js/lib/node_modules/teoria');

class ETQuizController {
    constructor() {
        ///// Constants
        this.MIDDLE_C = teoria.note('c4');
        this.LOWEST_ROOT = teoria.note('A2');
        this.HIGHTEST_ROOT = teoria.note('G#3');

        ///// Fields
        this.quizOptions = null;
        this.currentScale = null;
        this.currentScaleDegree = null;
        
        this.totalAttempts = 0;
        this.correctAttempts = 0;
    }

    ///// "Private" methods, to be accessed internally
    generateMidiNote() {
        var lowerBound = this.LOWEST_ROOT.midi();
        var upperBound = lowerBound + 11;
        var generatedMidiNote = ETUtils.getRandomIntInclusive(lowerBound, upperBound);
        console.debug("lowerBound = " + lowerBound);
        console.debug("upperBound = " + upperBound);
        console.debug("generatedMidiNote = " + generatedMidiNote);
        return generatedMidiNote;
    }

    resetNote() {
        var newNote;
        do {
            newNote = teoria.note.fromMIDI(this.generateMidiNote());
            console.debug("generating new note...");
        } while (newNote.scaleDegree(this.currentScale) === 0);
        
        console.debug("Note has been reset: " + newNote.name().toUpperCase() + newNote.accidental());
        console.debug("New scale degree: " + newNote.scaleDegree(this.currentScale));
        this.currentScaleDegree = newNote.scaleDegree(this.currentScale);

    }

    resetKey() {
        var newTonicMidi = ETUtils.getRandomIntInclusive(this.MIDDLE_C.midi() - 12, this.MIDDLE_C.midi());
        var newNote = teoria.note.fromMIDI(newTonicMidi);
        this.currentScale = newNote.scale(this.quizOptions.scaleType);
        console.debug("key has been reset! " + this.currentScale.tonic.name().toUpperCase() + this.currentScale.tonic.accidental() + " " + this.currentScale.name);
    }
    
    _getCurrentNote() {
        var interval = this.currentScaleDegree - 1;
        console.debug("currentScaleDegree: " + this.currentScaleDegree);
        console.debug(this.currentScale.scale[interval]);

        return teoria.interval.from(this.currentScale.tonic, this.currentScale.scale[interval]);
    }

    _getTonicChord() {
        return this.currentScale.tonic.chord(this.quizOptions.scaleType);
    }
    
    _initializeQuiz(e) {
        console.debug("Event is called: " + e.type);
        this.playQuiz();
    }
    
    ///// "Public" methods, to be accessed outside this object.
    init() {
        ETAudioPlayer.init();
        this.quizOptions = ETQuizOptions;
        ETUtils.debugPrintObj("Quiz options initialized!", this.quizOptions);
        
        this.update();
        document.body.addEventListener("midiLoaded", this.playQuiz, false);
    }

    update() {
        this.resetKey();
        this.resetNote();
    }

    setQuizOptions(etQuizOptions) {
        this.quizOptions = etQuizOptions;
    }
        
    isQuizAnswerCorrect(inputScaleDegree) {
        this.totalAttempts++;
        var answerIsCorrect = inputScaleDegree == this.currentScaleDegree;
        console.debug("inputScaleDegree = " + inputScaleDegree + ", currentScaleDegree = " + this.currentScaleDegree + ", answerIsCorrect? " + answerIsCorrect);
        
        if(answerIsCorrect) {
            this.correctAttempts++;
            var oldNote = this._getCurrentNote();
            var oldScale = this.currentScale;
            
            // reset note, so the user can guess another one.
            this.resetNote();
            this.playResolution(oldNote, oldScale);
            
            ETUtils.updateScore(this.totalAttempts, this.correctAttempts);
            return true;
        } else {
            ETUtils.updateScore(this.totalAttempts, this.correctAttempts);
            return false;
        }
    }

    dbgPrintStatus() {
        console.debug(ETUtils.debugPrintObj(this));
    }
    
    playResolution(oldNote, oldScale) {
        ETAudioPlayer.playResolution(oldNote, oldScale, window.ETQuizController._getTonicChord(), window.ETQuizController._getCurrentNote());
    }
    
    playNote() {
        ETAudioPlayer.playNote(window.ETQuizController._getCurrentNote());
    }
    
    playChord() {
        ETAudioPlayer.playChord(window.ETQuizController._getTonicChord());
    }
    
    playQuiz() {
        ETAudioPlayer.playQuiz(window.ETQuizController._getTonicChord(), window.ETQuizController._getCurrentNote());
    }
    
    playCadence() {
        ETAudioPlayer.playCadence(window.ETQuizController._getTonicChord());
    }
}

exports.ETQuizController = ETQuizController;