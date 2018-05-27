:: Yep, another sad batch script that builds your webpage...
@echo off

:: Bundling the JS together, compiling the LESS, precompiling Handlebars templates
CALL browserify home.js > ..\js\home.js
CALL lessc style.less ..\css\style.css
CALL handlebars handlebars\ > templates.js

