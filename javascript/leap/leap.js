//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(x) {
  var output = false;

  if (x % 4 === 0) {
    if (x % 100 !== 0) {
      output = true;
    }
    if (x % 100 === 0 && x % 400 === 0) {
      output = true;
    }
  }

  return output;
};

module.exports = Year;
