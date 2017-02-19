var Bob = function() {};

Bob.prototype.hey = function(input) {
  var output = 'Whatever.';
  var yellAns = 'Whoa, chill out!';
  var questionAns = 'Sure.';
  var notSayAns = 'Fine. Be that way!';

  var patternYell = /([A-Z]+\s[A-Z]+|[A-Z]!$)/;  //upper case letter many times, space, upper case letter many times OR upper case letter and end in !
  var patternQuestion = /\?$/;  //ends in ?
  var patternNotSay = /^\s+/;  //only has spaces

  if (patternQuestion.test(input))
    output = questionAns;

  if (patternNotSay.test(input) || input === '')
    output = notSayAns;

  if (patternYell.test(input))
    output = yellAns;


  return output;

};

module.exports = Bob;
