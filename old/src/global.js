module.exports = function() {
    // Functionality that's used for the whole webpage
    window.jQuery = $ = require('jquery');
    window.Handlebars = require('handlebars/runtime');
    
    console.debug("jquery and handlebars loaded!");
};
