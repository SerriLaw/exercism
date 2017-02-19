var Hamming = function() {};

Hamming.prototype.compute = function(x, y) {
  if (x.length !== y.length) {
    throw 'DNA strands must be of equal length.';
  }

  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      count = count + 1;
    }
  }

  return count;
};

module.exports = Hamming;
