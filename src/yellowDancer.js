var yellowDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.color = '10px solid blue';
  this.setColor();
  //this.setColor('10px solid blue');
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = this.step;


  //return blinkyDancer;
};

yellowDancer.prototype = Object.create(makeDancer.prototype);
yellowDancer.prototype.constructor = yellowDancer;

yellowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

yellowDancer.prototype.setColor = function(color) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  if (!color) {
    color = 'yellow';
  }
  let str = '10px solid ' + color;
  var styleSettings = {
    border: str
  };
  this.$node.css(styleSettings);
};

yellowDancer.prototype.lineup = function(top, left) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.setPosition.call(this, top, left);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};