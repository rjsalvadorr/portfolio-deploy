// how do we work with "instances" of this object?
module.exports = {
    scaleType: "major",
    scaleDegreeBlacklist: [],
    
    setScaleType: function(newScaleType) {
        this.scaleType = newScaleType;
    },
    
    toggleScaleType: function() {
        this.scaleType = this.scaleType === "major" ? "minor" : "major";
    },
};
