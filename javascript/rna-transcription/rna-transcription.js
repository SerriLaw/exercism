var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(x) {
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
};

module.exports = DnaTranscriber;
