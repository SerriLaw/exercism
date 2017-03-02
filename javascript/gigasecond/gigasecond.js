var Gigasecond = function() {};

Gigasecond.prototype.date = function(input) {
  const gigasecondMS = 1000000000 * 1000;
  var givenDate = input;

  givenDate = givenDate.getTime();

  var output = new Date(givenDate + gigasecondMS);

  return output;
};

module.exports = Gigasecond;
