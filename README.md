# Dynamics.js Animations Library wrapped for Meteor

See [dynamicsjs](http://dynamicsjs.com/)

## Install into Meteor

    meteor add zeroasterisk:dynamicsjs

## Usage

On client, you can directly use the `dynamics` object,
see their API documentation.

    Template.body.events({
      'click p': function(event) {
        var el = event.currentTarget;
        // reset to 0
        dynamics.animate(el, {
          translateX: 0,
          scale: 0,
          opacity: 1
        }, {
          frequency: 0,
          friction: 0,
          duration: 0
        });
        // animate
        dynamics.animate(el, {
          translateX: 350,
          scale: 2,
          opacity: 0.5
        }, {
          type: dynamics.spring,
          frequency: 200,
          friction: 200,
          duration: 1500
        });
      }
    });



