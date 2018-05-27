# Browser Ear Trainer

[![npm version](https://badge.fury.io/js/browser-ear-trainer.svg)](https://badge.fury.io/js/browser-ear-trainer)

Browser Ear Trainer is a convenient way for musicians to practice ear training anywhere (with an internet connection, of course). See it in action [here](http://www.rj-salvador.com/ear-training/). 
This is still under heavy construction, and probably won't be a "proper" module for some time.
The project will probably evolve into a tool for songwriting and/or music theory examples.

## Getting Started
Download the package, and run the HTML in the demo.
Currently, I use Browserify to bundle all the JS (with `$ browserify src\index.js > demo\bundle.js`).
If you're hacking around with this, just know that the UI and JS stuff is integrated with the elegance of duct tape and twine.

## More details
Big shout-outs to the authors of the following libraries. They made my work super easy and fun:
- `teoria`
- `midi-writer-js`
- `midi-player-js`
- `soundfont-player`
