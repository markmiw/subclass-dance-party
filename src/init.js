$(document).ready(function() {
  window.dancers = [];
  window.objectDistances = [];
  //Original Blinky Button
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data
    ('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    window.objectDistances.push([dancer.top, dancer.left]);
    for (let i = 0; i < window.objectDistances.length; i++) {
      let [Obj1top, Obj1left] = window.objectDistances[i];
      for (let j = i + 1; j < window.objectDistances.length; j++) {
        debugger;
        let [Obj2top, Obj2left] = window.objectDistances[j];
        let distance = Math.pow(Math.pow((Obj2left - Obj1left), 2) + Math.pow((Obj2top - Obj1top), 2), .5);
        if (distance < 100) {
          window.dancers[i].setColor('pink');
          window.dancers[j].setColor('pink');
          $('body').append(window.dancers[i].$node);
          $('body').append(window.dancers[j].$node);
        }
      }
    }
    $('body').append(dancer.$node);
  });

  //Blue Dancer Button
  $('.addBlueDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data
    ('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    window.objectDistances.push([dancer.top, dancer.left]);
    for (let i = 0; i < window.objectDistances.length; i++) {
      let [Obj1top, Obj1left] = window.objectDistances[i];
      for (let j = i + 1; j < window.objectDistances.length; j++) {
        debugger;
        let [Obj2top, Obj2left] = window.objectDistances[j];
        let distance = Math.pow(Math.pow((Obj2left - Obj1left), 2) + Math.pow((Obj2top - Obj1top), 2), .5);
        if (distance < 100) {
          window.dancers[i].setColor('pink');
          window.dancers[j].setColor('pink');
          $('body').append(window.dancers[i].$node);
          $('body').append(window.dancers[j].$node);
        }
      }
    }
    $('body').append(dancer.$node);
  });


  //Yellow Dancer Button
  $('.addYellowDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data
    ('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    window.objectDistances.push([dancer.top, dancer.left]);
    for (let i = 0; i < window.objectDistances.length; i++) {
      let [Obj1top, Obj1left] = window.objectDistances[i];
      for (let j = i + 1; j < window.objectDistances.length; j++) {
        debugger;
        let [Obj2top, Obj2left] = window.objectDistances[j];
        let distance = Math.pow(Math.pow((Obj2left - Obj1left), 2) + Math.pow((Obj2top - Obj1top), 2), .5);
        if (distance < 100) {
          window.dancers[i].setColor('pink');
          window.dancers[j].setColor('pink');
          $('body').append(window.dancers[i].$node);
          $('body').append(window.dancers[j].$node);
        }
      }
    }
    $('body').append(dancer.$node);
  });

  //Line Up Button
  $('.lineUpButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data
    ('operate-dancer-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    for (var i = 0; i < window.dancers.length; i++) {
      let ypos = (i * 20);
      let yposstr = ypos + 'px';
      let xpos = 300;
      let xposstr = xpos + 'px';
      window.objectDistances[i] = [ypos, xpos];
      var dancer = window.dancers[i];
      dancer.lineup(yposstr, xposstr);
    }
    $('.dancer').remove();
    // for (var i = 0; i < window.dancers.length; i++) {
    //   dancer = window.dancers[i];
    //   window.
    //   $('body').append(dancer.$node);
    // }

    for (let i = 0; i < window.objectDistances.length; i++) {
      let [Obj1top, Obj1left] = window.objectDistances[i];
      for (let j = i + 1; j < window.objectDistances.length; j++) {
        debugger;
        let [Obj2top, Obj2left] = window.objectDistances[j];
        let distance = Math.pow(Math.pow((Obj2left - Obj1left), 2) + Math.pow((Obj2top - Obj1top), 2), .5);
        if (distance < 100) {
          window.dancers[i].setColor('pink');
          window.dancers[j].setColor('pink');
          $('body').append(window.dancers[i].$node);
          $('body').append(window.dancers[j].$node);
        }
      }
    }

  });

});

