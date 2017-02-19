var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    output = output + switchLetter(input[i]);
  }

  function switchLetter(x) {
    switch (x) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        throw 'Invalid input';
    }
  }

  return output;
};

module.exports = DnaTranscriber;
